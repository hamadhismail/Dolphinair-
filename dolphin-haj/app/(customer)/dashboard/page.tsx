'use client';

import { motion } from 'framer-motion';
import { TimelineTracker } from '@/components/dashboard/TimelineTracker';
import { DocumentGrid } from '@/components/dashboard/DocumentGrid';
import { NotificationsFeed } from '@/components/dashboard/NotificationsFeed';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="font-mono text-xs text-[#52525B] mb-2">$ ./dashboard --user_id=7834</div>
          <h1 className="font-mono text-3xl font-bold text-white">
            USER_CONSOLE<span className="text-neon animate-[type-cursor_1s_step-end_infinite]">_</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="sm">Download Invoice</Button>
          <Button variant="primary" size="sm">Need Help?</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#09090B] border border-[#27272A] rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6 border-b border-[#27272A] pb-4">
              <div className="font-mono text-xs text-neon">// active_journey_tracker</div>
              <div className="font-mono text-[10px] bg-neon/10 text-neon px-2 py-1 rounded border border-neon/30">
                DH-99214K
              </div>
            </div>
            <TimelineTracker />
          </motion.div>

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="font-mono text-xs text-[#52525B] mb-4">// documents.list()</div>
            <DocumentGrid />
          </motion.div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Status card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-amber/5 border border-amber/30 rounded-xl p-6"
          >
            <div className="font-mono text-xs text-amber mb-4">// action_required</div>
            <p className="font-sans text-sm text-zinc-300 mb-4">
              Your PanCard scan is blurry. Please re-upload a clear copy to continue visa processing.
            </p>
            <Button variant="gold" className="w-full justify-center">Re-upload Document</Button>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="font-mono text-xs text-[#52525B] mb-4">// system_logs</div>
            <NotificationsFeed />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
