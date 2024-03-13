import Provider2 from '@/components/Provider2';
import Sidebar from '@/components/sidebar';

export default function FormulaireLaout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full min-h-screen">
      <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-rows-1 grid-cols-1 lg:min-h-screen">
        <div className="lg:col-span-4 md:col-span-1 col-span-1 bg-[#4855a5] text-white">
          <Sidebar />
        </div>
        <div className="lg:col-span-8  md:col-span-1 col-span-1 p-16 w-full">
          <Provider2>{children}</Provider2>
        </div>
      </div>
    </section>
  );
}
