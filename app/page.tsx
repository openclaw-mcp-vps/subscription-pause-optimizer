export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          SaaS Retention Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Optimize Subscription Pause Offers to{' '}
          <span className="text-[#58a6ff]">Reduce Churn</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Intercept cancellation attempts and A/B test pause durations, discounts, and messaging to find the retention offer that converts best.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start for $15/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            { stat: '40%', label: 'Avg churn reduction' },
            { stat: '3 min', label: 'Webhook setup' },
            { stat: '∞', label: 'A/B test variants' },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Webhook Interception', desc: 'Connect your billing provider in minutes. Catch every cancellation event before it finalizes.' },
            { title: 'Smart A/B Testing', desc: 'Test pause lengths, discount amounts, and copy variants simultaneously with statistical significance.' },
            { title: 'Analytics Dashboard', desc: 'Track conversion rates per variant, revenue saved, and cohort retention over time.' },
            { title: 'Embeddable Widget', desc: 'Drop a single script tag into your app to show the pause offer modal without rebuilding your UI.' },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything included. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited A/B test variants',
              'Webhook integrations (Stripe, Paddle, Chargebee)',
              'Real-time analytics dashboard',
              'Embeddable pause-offer widget',
              'Email support',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which billing providers are supported?',
              a: 'Stripe, Paddle, and Chargebee are supported out of the box via webhooks. Any provider that sends cancellation webhook events can be integrated with a custom adapter.'
            },
            {
              q: 'How does the A/B testing work?',
              a: 'When a cancellation webhook fires, the optimizer randomly assigns the subscriber to a variant (pause duration, discount %, or message copy) and tracks whether they accept the offer. Statistical significance is calculated automatically.'
            },
            {
              q: 'Will this slow down my cancellation flow?',
              a: 'No. The widget loads asynchronously and the webhook handler responds in under 50 ms. Your subscribers see the pause offer instantly with no perceptible delay.'
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Subscription Pause Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
