"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full mb-10">
      <div className="flex justify-between text-xs text-[var(--text-muted)] mb-3 uppercase tracking-widest">
        <span>Question {current} of {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="h-1 bg-[var(--border)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--accent)] rounded-full transition-all duration-500 ease-out progress-glow"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
