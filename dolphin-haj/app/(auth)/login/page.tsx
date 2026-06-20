'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [phase, setPhase] = useState<'phone' | 'loading' | 'otp'>('phone');
  const { login } = useAuth();
  const router = useRouter();

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setPhase('loading');
    setTimeout(() => setPhase('otp'), 1500);
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 6) return;
    setPhase('loading');
    setTimeout(() => {
      login(phone);
      if (phone === '0000000000') {
        router.push('/admin-dashboard');
      } else {
        router.push('/dashboard');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-black grid-texture">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-neon/5 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[#09090B] border border-[#27272A] rounded-xl overflow-hidden shadow-2xl shadow-black">
          {/* Header */}
          <div className="border-b border-[#27272A] bg-[#0A0A0C] p-6 text-center">
            <div className="w-12 h-12 rounded border border-neon/40 flex items-center justify-center bg-neon/5 mx-auto mb-4">
              <span className="text-neon font-mono text-xl font-bold">DH</span>
            </div>
            <h2 className="font-mono text-xl font-bold text-white mb-1">SYSTEM_ACCESS</h2>
            <p className="font-mono text-[10px] text-[#52525B]">enter credentials to continue</p>
          </div>

          {/* Body */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {phase === 'phone' && (
                <motion.form
                  key="phone"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleSendOTP}
                  className="space-y-4"
                >
                  <div>
                    <label className="font-mono text-xs text-[#71717A] mb-2 block">
                      <span className="text-purple-400">const</span> phone_number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm text-[#52525B]">+91</span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        className="w-full bg-[#0A0A0C] border border-[#27272A] rounded px-4 py-3 pl-12 font-mono text-sm text-white focus:border-neon focus:outline-none transition-colors"
                        placeholder="98765 43210"
                        maxLength={10}
                        autoFocus
                      />
                    </div>
                  </div>
                  <Button type="submit" variant="primary" className="w-full justify-center" disabled={phone.length < 10}>
                    Request OTP →
                  </Button>
                </motion.form>
              )}

              {phase === 'otp' && (
                <motion.form
                  key="otp"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleVerifyOTP}
                  className="space-y-4"
                >
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-mono text-xs text-[#71717A]">
                        <span className="text-purple-400">const</span> otp_code
                      </label>
                      <button type="button" onClick={() => setPhase('phone')} className="font-mono text-[10px] text-neon hover:underline">
                        change number
                      </button>
                    </div>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      className="w-full bg-[#0A0A0C] border border-[#27272A] rounded px-4 py-3 text-center tracking-[1em] font-mono text-xl text-white focus:border-neon focus:outline-none transition-colors"
                      placeholder="------"
                      maxLength={6}
                      autoFocus
                    />
                    <div className="font-mono text-[10px] text-[#52525B] mt-2 text-center">
                      Code sent to +91 {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}
                    </div>
                  </div>
                  <Button type="submit" variant="primary" className="w-full justify-center" disabled={otp.length < 6}>
                    Verify & Login →
                  </Button>
                </motion.form>
              )}

              {phase === 'loading' && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <div className="w-8 h-8 rounded-full border-2 border-[#27272A] border-t-neon animate-spin mb-4" />
                  <div className="font-mono text-xs text-neon animate-pulse">Processing...</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer info */}
          <div className="border-t border-[#27272A] bg-[#0A0A0C] p-4 text-center">
            <div className="font-mono text-[10px] text-[#52525B]">
              <span className="text-amber">hint:</span> admin use 0000000000
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
