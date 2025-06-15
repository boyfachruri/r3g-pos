// import Hero from "@/components/landing-page/hero";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center px-4">
//       <Hero />
//     </main>
//   );
// }
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/login"); // langsung redirect saat server render
}

