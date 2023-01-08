import Image from "next/image";
import InfineonLogo from "./assets/infi.png";
import ClarivateLogo from "./assets/clar.png";
export default function Experience() {
  return (
    <div className="item ">
      <div className="mt-10 p-2 space-x-4 flex flex-col  ">
        <Image
          className="object-contain h-10 p-1 rounded-full "
          src={InfineonLogo}
          alt="Company Logo"
          width={100}
          height={100}
        />
        <div className="w-30 ">
          <h1 className="font-bold text-2xl">Infineon Technologies</h1>
          <h1 className="text-sm font-semibold ">Jan 2021 - Feb 2022</h1>
        </div>
        <div className="p-5 w-30 mt-5 backdrop-blur-sm border border-black rounded-lg">
          <p>
            Developed a File Management API to perform CRUD operations on Files
            across DES projects
          </p>
          <h1>REST API , Microservices</h1>
          <h1>STACK : C# .NET VueJS </h1>
        </div>
      </div>
      <div className=" mt-10 p-2 space-x-4 flex flex-col  ">
        <Image
          className="object-contain h-10 p-0.5 ml-1 rounded-full "
          src={ClarivateLogo}
          alt="Company Logo"
          width={100}
          height={100}
        />
        <div className="w-30">
          <h1 className="text-2xl font-bold -mt-2">Clarivate </h1>
          <h1 className="text-sm semibold">May 2022 - Present</h1>
        </div>
        <div className=" p-5 mt-5  backdrop-blur-sm border border-black rounded-lg">
          <div className="w-30">
            <p>
              Developed the cleverbridge digital payments flow from the scratch.
            </p>
            <h1>
              REST API ,Microservices , Spring Boot , Hibernate , TailwindCSS
            </h1>
            <h1>STACK : JAVA Angular TypeScript </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
