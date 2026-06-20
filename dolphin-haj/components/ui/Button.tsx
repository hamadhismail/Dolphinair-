'use client';

import { useRef, useState, type ButtonHTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

const variants = {
  primary: 'bg-neon text-void hover:bg-neon-dim font-semibold shadow-neon-sm hover:shadow-neon-md',
  ghost: 'bg-transparent text-white border border-border hover:border-border2 hover:bg-surface',
  gold: 'bg-amber text-void hover:bg-amber-dim font-semibold shadow-amber-sm hover:shadow-amber-md',
  danger: 'bg-transparent text-red-400 border border-red-900 hover:bg-red-950 hover:border-red-700',
  outline: 'bg-transparent text-neon border border-neon/40 hover:border-neon hover:bg-neon/5',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "onDrag"> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  magnetic?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  magnetic = true,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) * 0.15;
    const y = (e.clientY - centerY) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 600, damping: 30, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={`
        magnetic-btn font-mono rounded transition-all duration-150 inline-flex items-center gap-2
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
