'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { TerminalTypewriter } from '@/components/landing/TerminalTypewriter';
import { LiveAutomationLog } from '@/components/landing/LiveAutomationLog';
import { PackageCard } from '@/components/landing/PackageCard';
import { TrustMarquee } from '@/components/landing/TrustMarquee';
import { PACKAGES } from '@/context/BookingContext';

const STATS = [
  { value: '29+', label: 'Years Experience', unit: 'yrs' },
  { value: '10K+', label: 'Pilgrims Served', unit: 'users' },
  { value: '99.8%', label: 'Visa Approval', unit: 'rate' },
  { value: '24/7', label: 'Support Available', unit: 'uptime' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black grid-texture">
      {/* ── HERO SECTION ──────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Radial glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-neon/3 blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-amber/3 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Typography + Terminal */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* System label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                    <span className="font-mono text-xs text-neon">SYSTEM ONLINE</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-neon/30 to-transparent" />
                </div>

                {/* Main title */}
                <h1 className="font-mono text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                  <span className="block text-white">UMRAH</span>
                  <span className="block text-white">BOOKING</span>
                  <span className="block">
                    <span className="text-neon">ENGINE</span>
                    <span className="text-[#27272A] text-4xl ml-3">v2.4</span>
                  </span>
                </h1>

                <p className="font-sans text-[#71717A] text-lg leading-relaxed mb-8 max-w-lg">
                  Dolphin Haj — 29+ years of trusted pilgrimage service.{' '}
                  <span className="text-zinc-300">Automated. Certified. Guided.</span>
                  {' '}Govt approved. Saudi certified.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link href="/book">
                    <Button variant="primary" size="lg">
                      <span>{'>'}</span> Initialize Booking
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="ghost" size="lg">
                      Track Booking ↗
                    </Button>
                  </Link>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="border border-[#27272A] rounded-lg p-3">
                      <div className="font-mono text-lg font-bold text-neon">{stat.value}</div>
                      <div className="font-mono text-[10px] text-[#71717A] mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Terminal panels */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <TerminalTypewriter />
              <LiveAutomationLog />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST MARQUEE ───────────────────────── */}
      <TrustMarquee />

      {/* ── PACKAGES SECTION ────────────────────── */}
      <section id="packages" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="font-mono text-xs text-neon">// packages.config</div>
              <div className="h-px flex-1 bg-[#27272A]" />
            </div>
            <h2 className="font-mono text-3xl font-bold text-white mb-3">
              SELECT PACKAGE<span className="text-neon animate-[type-cursor_1s_step-end_infinite]">_</span>
            </h2>
            <p className="font-sans text-[#71717A]">Choose your sacred journey tier. Click any card to expand full feature set.</p>
          </motion.div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US SECTION ──────────────────────── */}
      <section className="py-20 px-6 border-t border-[#27272A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="font-mono text-xs text-amber">// system.capabilities</div>
              <div className="h-px flex-1 bg-[#27272A]" />
            </div>
            <h2 className="font-mono text-3xl font-bold text-white">WHY DOLPHIN HAJ</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🛂', title: 'AUTO VISA PROC', desc: 'Direct Ministry API integration for real-time visa tracking and approval.', color: 'neon' },
              { icon: '✈️', title: 'FLIGHT LOCK', desc: 'Seats reserved on certified carriers with instant confirmation.', color: 'amber' },
              { icon: '🏨', title: 'HARAM HOTELS', desc: 'Pre-negotiated rates at Madinah & Makkah proximity hotels.', color: 'neon' },
              { icon: '📲', title: 'LIVE TRACKING', desc: 'WhatsApp + SMS alerts at every stage of your journey.', color: 'amber' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group bg-[#09090B] border border-[#27272A] rounded-lg p-6 hover:border-${item.color}/40 transition-all duration-200 cursor-default`}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className={`font-mono text-xs font-bold mb-2 text-${item.color}`}>
                  {item.title}
                </div>
                <p className="font-sans text-[#71717A] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#27272A]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#09090B] border border-[#27272A] rounded-xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon/3 via-transparent to-amber/3 pointer-events-none" />
            <div className="relative z-10">
              <div className="font-mono text-xs text-neon mb-4">$ ./book_umrah --year 2025</div>
              <h2 className="font-mono text-4xl font-bold text-white mb-4">
                READY TO BEGIN<br />
                <span className="text-neon">YOUR JOURNEY?</span>
              </h2>
              <p className="font-sans text-[#71717A] mb-8 max-w-md mx-auto">
                Join 10,000+ pilgrims who trusted Dolphin Haj for their sacred journey. Book your Umrah slot today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/book">
                  <Button variant="primary" size="lg">
                    Start Booking →
                  </Button>
                </Link>
                <a href="https://wa.me/+919894567890" target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="lg">
                    💬 WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
