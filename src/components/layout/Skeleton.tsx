interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = "" }: SkeletonProps) => {
  return (
    <div 
      className={`animate-pulse bg-[#C7D2D9]/10 rounded-sm ${className}`} 
    />
  );
};

export default Skeleton;