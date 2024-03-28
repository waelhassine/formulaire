import { Skeleton } from '@/components/ui/skeleton';
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <Skeleton className="h-12 w-12 rounded-full" />
      <p className="text-gray-500">Loading.....</p>
    </div>
  );
}
