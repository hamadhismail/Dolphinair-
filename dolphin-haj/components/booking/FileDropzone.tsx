'use client';

import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FileDropzone({ 
  label, 
  accept = '*', 
  onFile, 
  submitted 
}: { 
  label: string; 
  accept?: string; 
  onFile: (file: File | null) => void;
  submitted: boolean;
}) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    if (!f) return;
    setFile(f);
    setProgress(0);
    setUploading(true);
    // Simulate upload progress
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setUploading(false);
        onFile && onFile(f);
      }
      setProgress(Math.min(p, 100));
    }, 120);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const onDragOver = (e: React.DragEvent) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = () => setDragging(false);

  // SVG ring progress
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="space-y-3">
      <div className="font-mono text-xs text-[#71717A]">// {label}</div>
      <div
        onClick={() => !file && inputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`relative border rounded-lg p-6 transition-all duration-200 ${
          dragging
            ? 'border-neon bg-neon/5'
            : file
            ? 'border-neon/40 bg-[#09090B]'
            : 'border-dashed border-[#27272A] bg-[#09090B] hover:border-[#3F3F46] cursor-pointer'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              handleFile(e.target.files[0]);
            }
          }}
        />

        <AnimatePresence mode="wait">
          {!file ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="text-3xl opacity-30">📂</div>
              <div className="font-mono text-xs text-[#52525B]">
                drag_drop file here or{' '}
                <span className="text-neon underline cursor-pointer">browse</span>
              </div>
              <div className="font-mono text-[10px] text-[#3F3F46]">
                accepts: {accept === '*' ? 'all files' : accept}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="file"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-5"
            >
              {/* Progress ring */}
              <div className="relative shrink-0">
                <svg width="60" height="60" className="progress-ring">
                  <circle
                    cx="30" cy="30" r={radius}
                    fill="none" stroke="#27272A" strokeWidth="3"
                  />
                  <motion.circle
                    cx="30" cy="30" r={radius}
                    fill="none" stroke="#00FF66" strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: 'stroke-dashoffset 0.15s ease' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold text-neon">
                  {Math.round(progress)}%
                </div>
              </div>

              {/* File info */}
              <div className="flex-1 min-w-0">
                <div className="font-mono text-xs text-neon truncate">{file.name}</div>
                <div className="font-mono text-[10px] text-[#52525B] mt-1">
                  {(file.size / 1024).toFixed(1)} KB
                </div>
                <div className="font-mono text-[10px] mt-1">
                  {uploading
                    ? <span className="text-amber">uploading...</span>
                    : <span className="text-neon">✓ upload complete</span>
                  }
                </div>
              </div>

              {/* Remove */}
              {!uploading && (
                <button
                  onClick={(e) => { e.stopPropagation(); setFile(null); setProgress(0); onFile(null); }}
                  className="font-mono text-xs text-[#52525B] hover:text-red-400 transition-colors"
                >
                  ✕
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
