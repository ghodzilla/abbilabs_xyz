'use client';
import { useEffect, useState, useRef } from 'react';

export default function YieldDashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState('');
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  async function fetchData() {
    try {
      const res = await fetch('/api/yield-sim');
      const json = await res.json();
      if (!json.ok) throw new Error(json.error);
      setData(json.data);
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!data || !chartRef.current) return;
    import('https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js').catch(() => {});
    
    const script = document.getElementById('chartjs-script');
    if (!script) {
      const s = document.createElement('script');
      s.id = 'chartjs-script';
      s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
      s.onload = () => renderChart(data);
      document.head.appendChild(s);
    } else {
      renderChart(data);
    }
  }, [data]);

  function renderChart(s) {
    if (!window.Chart || !chartRef.current) return;
    if (chartInstance.current) chartInstance.current.destroy();
    const snapsA = s.strategyA.snapshots || [];
    const snapsB = s.strategyB.snapshots || [];
    const labels = snapsA.map(snap => {
      const d = new Date(snap.ts);
      return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    });
    chartInstance.current = new window.Chart(chartRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [
          { label: 'Strategy A (Max APY)', data: snapsA.map(s => s.balance), borderColor: '#2563eb', backgroundColor: '#2563eb18', fill: true, tension: 0.4, pointRadius: snapsA.length > 20 ? 0 : 3 },
          { label: 'Strategy B (Risk-Adjusted)', data: snapsB.map(s => s.balance), borderColor: '#22c55e', backgroundColor: '#22c55e18', fill: true, tension: 0.4, pointRadius: snapsB.length > 20 ? 0 : 3 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#94a3b8', font: { size: 13 } } } },
        scales: {
          x: { ticks: { color: '#475569', maxTicksLimit: 8 }, grid: { color: '#ffffff0a' } },
          y: { ticks: { color: '#475569', callback: v => '$' + Number(v).toFixed(2) }, grid: { color: '#ffffff0a' } }
        }
      }
    });
  }

  const fmt = n => '$' + Number(n).toFixed(2);
  const fmtPct = n => (Number(n) >= 0 ? '+' : '') + Number(n).toFixed(2) + '%';
  const fmtTVL = n => n >= 1e9 ? '$' + (n / 1e9).toFixed(1) + 'B' : n >= 1e6 ? '$' + (n / 1e6).toFixed(1) + 'M' : '$' + (n / 1e3).toFixed(0) + 'K';

  if (error) return (
    <div style={{ background: '#0f172a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', fontFamily: 'monospace' }}>
      ❌ {error}
    </div>
  );

  if (!data) return (
    <div style={{ background: '#0f172a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontFamily: 'sans-serif' }}>
      ⏳ Loading simulation data...
    </div>
  );

  const daysRunning = ((Date.now() - new Date(data.startedAt)) / 86400000);
  const retA = (data.strategyA.virtualBalance - data.capital / 2) / (data.capital / 2) * 100;
  const retB = (data.strategyB.virtualBalance - data.capital / 2) / (data.capital / 2) * 100;
  const apyA = daysRunning > 0 ? retA / daysRunning * 365 : 0;
  const apyB = daysRunning > 0 ? retB / daysRunning * 365 : 0;
  const dailyA = data.strategyA.positions.reduce((s, p) => s + (data.capital / 2 / data.strategyA.positions.length) * (p.apy || 0) / 365 / 100, 0);
  const dailyB = data.strategyB.positions.reduce((s, p) => s + (data.capital / 2 / data.strategyB.positions.length) * (p.apy || 0) / 365 / 100, 0);
  const combined = data.strategyA.virtualBalance + data.strategyB.virtualBalance;
  const totalGain = combined - data.capital;
  const winner = data.strategyA.virtualBalance >= data.strategyB.virtualBalance ? 'A' : 'B';
  const progress = Math.min(daysRunning / 7 * 100, 100);
  const daysToRec = Math.max(0, 7 - daysRunning);

  const chainColor = { Base: '#60a5fa', Arbitrum: '#93c5fd', Solana: '#a78bfa', Ethereum: '#818cf8' };
  const typeColor = { lp: '#f59e0b', lending: '#22c55e' };

  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', color: '#e2e8f0', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif' }}>
      {/* Header */}
      <div style={{ background: '#1e293b', borderBottom: '1px solid #334155', padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: 0 }}>🤖 <span style={{ color: '#2563eb' }}>Yield Agent</span> Dashboard</h1>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ background: '#f59e0b22', color: '#f59e0b', border: '1px solid #f59e0b44', borderRadius: 20, padding: '4px 14px', fontSize: 13, fontWeight: 600 }}>⚡ SIMULATION MODE</span>
          <span style={{ fontSize: 12, color: '#475569' }}>Updated: {lastUpdate}</span>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '28px 32px' }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {[
            { value: fmt(combined), label: 'Total Portfolio', sub: `${fmt(totalGain)} earned`, subColor: totalGain >= 0 ? '#22c55e' : '#ef4444' },
            { value: fmt(dailyA + dailyB), label: 'Daily Earnings (projected)', sub: `${fmt((dailyA + dailyB) * 30)}/month`, subColor: '#60a5fa', valueColor: '#22c55e' },
            { value: `${daysRunning.toFixed(1)}d`, label: 'Simulation Running', sub: `${data.cycles} cycles`, subColor: '#64748b', valueColor: '#f59e0b' },
            { value: `🏆 Strategy ${winner}`, label: 'Current Leader', sub: daysToRec > 0 ? `${daysToRec.toFixed(1)}d to recommendation` : '✅ Ready to deploy!', subColor: '#22c55e', valueColor: '#60a5fa' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, padding: 24, textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: s.valueColor || '#fff', marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#64748b', marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: s.subColor }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, padding: '20px 24px', marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 14, color: '#94a3b8' }}>⏳ Progress to real capital recommendation (7 days)</span>
            <span style={{ fontSize: 14, fontWeight: 700 }}>{progress.toFixed(0)}%</span>
          </div>
          <div style={{ height: 6, background: '#334155', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #2563eb, #22c55e)', borderRadius: 3 }} />
          </div>
          <div style={{ fontSize: 12, color: '#475569', marginTop: 6 }}>
            {daysToRec > 0 ? `${daysToRec.toFixed(1)} days until strategy recommendation` : '🎉 7 days complete — Strategy ' + winner + ' is the winner!'}
          </div>
        </div>

        {/* Strategy cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {[
            { key: 'A', name: 'Max APY', subtitle: 'Highest yielding correlated pools', color: '#2563eb', bg: '#1e3a5f', apy: apyA, ret: retA, balance: data.strategyA.virtualBalance, earned: data.strategyA.totalEarned, daily: dailyA, positions: data.strategyA.positions },
            { key: 'B', name: 'Risk-Adjusted', subtitle: 'Lending anchors + best LPs', color: '#22c55e', bg: '#1a3a2a', apy: apyB, ret: retB, balance: data.strategyB.virtualBalance, earned: data.strategyB.totalEarned, daily: dailyB, positions: data.strategyB.positions },
          ].map(s => (
            <div key={s.key} style={{ background: `linear-gradient(135deg, ${s.bg}, #1e293b)`, border: `1px solid ${s.color}44`, borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700 }}>📊 Strategy {s.key}</div>
                  <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 4 }}>{s.subtitle}</div>
                </div>
                <div style={{ fontSize: 32, fontWeight: 900, color: s.color }}>{s.apy.toFixed(1)}%</div>
              </div>
              {[
                ['Virtual Balance', fmt(s.balance), '#fff'],
                ['Total Earned', fmt(s.earned), '#22c55e'],
                ['Return', fmtPct(s.ret), s.ret >= 0 ? '#22c55e' : '#ef4444'],
                ['Daily Earnings', fmt(s.daily) + '/day', '#fff'],
                ['Monthly (projected)', fmt(s.daily * 30) + '/month', s.color],
              ].map(([label, val, color]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ffffff0d', fontSize: 14 }}>
                  <span style={{ color: '#94a3b8' }}>{label}</span>
                  <span style={{ fontWeight: 600, color }}>{val}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <h2 style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>Portfolio Balance Over Time</h2>
          <div style={{ height: 220 }}>
            <canvas ref={chartRef} />
          </div>
        </div>

        {/* Position tables */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {[data.strategyA, data.strategyB].map((strat, si) => (
            <div key={si} style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, padding: 24 }}>
              <h2 style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>Strategy {si === 0 ? 'A' : 'B'} Positions</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr>{['Chain', 'Protocol', 'Pool', 'APY', 'TVL', 'Type'].map(h => (
                    <th key={h} style={{ textAlign: 'left', color: '#64748b', fontWeight: 500, padding: '6px 8px', borderBottom: '1px solid #334155', fontSize: 11, textTransform: 'uppercase' }}>{h}</th>
                  ))}</tr>
                </thead>
                <tbody>
                  {strat.positions.map((p, i) => (
                    <tr key={i}>
                      <td style={{ padding: '10px 8px' }}><span style={{ color: chainColor[p.chain] || '#94a3b8', fontWeight: 600 }}>{p.chain}</span></td>
                      <td style={{ padding: '10px 8px', color: '#94a3b8' }}>{(p.project || '').substring(0, 14)}</td>
                      <td style={{ padding: '10px 8px', fontWeight: 600 }}>{(p.symbol || '').substring(0, 16)}</td>
                      <td style={{ padding: '10px 8px', color: p.type === 'lending' ? '#f59e0b' : '#22c55e', fontWeight: 700 }}>{(p.apy || 0).toFixed(1)}%</td>
                      <td style={{ padding: '10px 8px', color: '#94a3b8' }}>{fmtTVL(p.tvlUsd || 0)}</td>
                      <td style={{ padding: '10px 8px' }}><span style={{ color: typeColor[p.type] || '#94a3b8', fontWeight: 600 }}>{p.type || 'lp'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
