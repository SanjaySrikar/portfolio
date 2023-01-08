import Image from "next/image";
export default function Skills() {
  return (
    <div className="container p-5 ">
      <h1 className="font-bold text-center text-3xl">Skills</h1>
      <div className="skills flex flex-col px-5 justify-center mt-20 items-center p-5 border overflow-auto border-black rounded-lg backdrop-blur-sm">
        <div className="skill flex space-x-10">
          <h1 className="font-semibold text-xl ">TypeScript</h1>
        </div>
        <div className="skill flex space-x-10">
          <h1 className="font-semibold text-xl">Java</h1>
        </div>
        <div className="skill flex space-x-10">
          <h1 className="font-semibold text-xl">JavaScript</h1>
        </div>
        <div className="skill flex space-x-10">
          <h1 className="font-semibold text-xl">Angular</h1>
        </div>
        <div className="skill flex space-x-10">
          <h1 className="font-semibold text-xl">Tailwind CSS</h1>
        </div>
        <div className="skill flex space-x-10">
          <h1 className="font-semibold text-xl">Python</h1>
        </div>
        <div className="skill flex space-x-10">
          <h1 className="font-semibold text-xl">Spring Boot</h1>
        </div>
        <div className="skill flex space-x-10">
          <h1 className="font-semibold text-xl">Microservices</h1>
        </div>
        <div className="skill flex space-x-10">
          <h1 className="font-semibold text-xl">Hibernate</h1>
        </div>
        <div className="skill flex space-x-10">
          <h1 className="font-semibold text-xl">SQL</h1>
        </div>
        <div className="skill flex space-x-10">
          <h1 className="font-semibold text-xl">REST API</h1>
        </div>
      </div>
    </div>
  );
}
