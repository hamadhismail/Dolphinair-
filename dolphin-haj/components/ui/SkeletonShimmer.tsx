export function SkeletonShimmer({ className = '' }: { className?: string }) {
  return (
    <div className={`skeleton rounded-md ${className}`} />
  );
}
