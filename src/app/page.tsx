import Image from "next/image";
import { Hero } from "../components/sections/hero/Hero";
import { Services } from "../components/sections/services/Services"
import { About } from "../components/sections/about/About";
// import { Team } from "../components/sections/about/Team";
import { Team } from "../components/sections/about/Teams";
import { Projects } from "../components/sections/projects/Projects";
import { Contact } from "../components/sections/contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between sm:items-start">
        <Hero/>
        <Services/>
        <About/>
        <Team/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}
