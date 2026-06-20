'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Packages', path: '/#packages' },
  { label: 'Book', path: '/book' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Admin', path: '/admin-dashboard' },
];

export function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded border border-neon/40 flex items-center justify-center bg-neon/5 group-hover:border-neon group-hover:bg-neon/10 transition-all duration-200">
            <span className="text-neon font-mono text-xs font-bold">DH</span>
          </div>
          <div className="font-mono text-sm">
            <span className="text-white font-semibold">DOLPHIN</span>
            <span className="text-neon">_HAJ</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 ml-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-neon font-mono text-[10px]">LIVE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 relative">
          {NAV_LINKS.map((link) => {
            const isActive = link.path === '/'
              ? activeTab === '/'
              : activeTab.startsWith(link.path.replace('/#', '/'));
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setActiveTab(link.path === '/#packages' ? '/' : link.path)}
                className="relative px-4 py-2 font-mono text-sm text-slate hover:text-white transition-colors duration-150 z-10"
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-md bg-surface border border-border"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={isActive ? 'text-white' : ''}>{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <Button variant="ghost" size="sm" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
          )}
          <Link href="/book">
            <Button variant="primary" size="sm">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-px w-5 bg-white"
              animate={{
                rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                y: menuOpen && i === 0 ? 6 : menuOpen && i === 2 ? -6 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm text-slate hover:text-white hover:bg-surface py-2 px-3 rounded transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-border flex gap-3">
                {user ? (
                  <Button variant="ghost" className="flex-1 justify-center" onClick={() => { logout(); setMenuOpen(false); }}>
                    Logout
                  </Button>
                ) : (
                  <Link href="/login" className="flex-1">
                    <Button variant="ghost" className="w-full justify-center">Login</Button>
                  </Link>
                )}
                <Link href="/book" className="flex-1">
                  <Button variant="primary" className="w-full justify-center">Book Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
