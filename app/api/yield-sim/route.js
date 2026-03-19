import { NextResponse } from 'next/server';

// Reads sim state from raw GitHub file (written by yield-sim.cjs on VPS)
const RAW_URL = 'https://raw.githubusercontent.com/ghodzilla/abbilabs_xyz/main/data/yield-sim-state.json';

export async function GET() {
  try {
    const res = await fetch(RAW_URL, {
      headers: { 'User-Agent': 'AbbiLabs/1.0' },
      next: { revalidate: 300 }, // cache 5 min
    });
    if (!res.ok) throw new Error('State file not found — simulation may not have run yet');
    const data = await res.json();
    return NextResponse.json({ ok: true, data });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
