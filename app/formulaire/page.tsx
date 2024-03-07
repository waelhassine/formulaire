import Sidebar from "@/components/sidebar";
import { Progress } from "@/components/ui/progress";

export default function Formulaire() {
  return (
    <main className="w-full min-h-screen h-screen">
      <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-rows-1 grid-cols-1 lg:h-screen">
        <div className="lg:col-span-4 md:col-span-1 col-span-1 bg-[#4855a5] text-white">
          <Sidebar />
        </div>
        <div className="lg:col-span-8  md:col-span-1 col-span-1 p-16 flex flex-col space-y-4">
          <Progress value={10} />

          <p className="flex flex-row  text-2xl pt-12">
            Quel est le <p className="text-red-700 px-1">type de logement</p> à
            assurer ?
          </p>
        </div>
      </div>
    </main>
  );
}
