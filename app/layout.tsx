import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Subscription Pause Optimizer – Reduce Churn with Smart Pause Offers',
  description: 'A/B test pause durations, discounts, and messaging to intercept cancellations and retain subscribers automatically.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="89857cc5-8f8b-42c3-a61a-2ff122aa4c0f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
