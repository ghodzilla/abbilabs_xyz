'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

const PRODUCT_NAMES = {
  'ai-sales-agent': 'AI Sales Agent Template',
  'ai-payment-monitor': 'AI Payment Monitor Template',
  'ai-customer-support-agent': 'AI Customer Support Agent Template',
  'ai-ceo-blueprint': 'AI CEO Blueprint Kit',
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const product = searchParams.get('product');

  // Fire welcome email + Beehiiv signup immediately on page load
  useEffect(() => {
    if (!sessionId || !product) return;
    fetch('/api/purchase-complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId, product }),
    }).catch(() => {}); // fire and forget
  }, [sessionId, product]);
  const productName = PRODUCT_NAMES[product] || 'Your Template';

  return (
    <main className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-xl text-gray-600 mb-8">
        Thank you for purchasing <strong>{productName}</strong>.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
        <h2 className="text-xl font-bold text-green-800 mb-4">Your download is ready</h2>
        <a
          href={`/api/download?session_id=${sessionId}&product=${product}`}
          className="btn-primary text-lg px-12 py-4 inline-block"
        >
          ⬇️ Download {productName}
        </a>
        <p className="text-green-700 text-sm mt-4">
          Click the button above to download your .tar.gz file.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 text-left mb-8">
        <h3 className="font-bold mb-3">What to do next</h3>
        <ol className="space-y-2 text-gray-700">
          <li>1. Download and unzip the file</li>
          <li>2. Open <code className="bg-gray-200 px-1 rounded">SETUP.md</code> for step-by-step instructions</li>
          <li>3. Follow the setup guide — you&apos;ll be running in minutes</li>
          <li>4. Questions? Reply to your receipt email</li>
        </ol>
      </div>

      <p className="text-gray-500 text-sm">
        Save this page URL — you can re-download anytime using the same link.
        <br />
        Need help? Email <a href="mailto:support@abbilabs.xyz" className="text-blue-600 hover:underline">support@abbilabs.xyz</a>
      </p>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
