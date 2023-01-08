import Contact from "./contact";
import Experiences from "./experiences";
import Intro from "./introduction";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  return (
    <div className="font-poppins bg-cover min-h-screen p-8 bg-[url('/assets/blob-p.svg')]">
      <Intro />
      <div className="grid grid-cols-4 gap-3 ">
        <div className="min-h-screen col-span-1 mx-12  mt-10 ">
          <Experiences />
        </div>
        <div className="min-h-screen col-span-2  mt-10">
          <Projects />
        </div>
        <div className="min-h-screen col-span-1 mx-12  mt-10  ">
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  );
}
