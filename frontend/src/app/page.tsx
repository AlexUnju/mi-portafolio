import Image from "next/image";
import { Nav } from '@/components/Nav';

export default function Home() {
  return (
    <main className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900 via-gray-900 to-gray-900 min-h-screen">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      <Nav />
    </main>  
    );
}
