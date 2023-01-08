export default function Projects() {
  return (
    <div className="p-5 ">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <div className="projects mt-20 space-y-10">
        <div className="project">
          <h1 className="text-2xl font-bold">File Management System </h1>
          <span className="font-semibold">[.NET , C# , Vue , TypeScript]</span>
          <p className="mt-2 border border-black rounded-lg p-5 backdrop-blur-lg">
            This project involved developing a File Management API for teams,
            using .NET and Vue.js. The API was designed to be accessible and
            secure, providing the necessary functions for teams to securely
            store, share and manage their files. Features included a
            user-friendly UI, multiple file uploads, file previews, search, and
            file access logging. The API was tested for security and
            performance, and successfully deployed.
          </p>
        </div>
        <div className="project">
          <h1 className="text-2xl font-bold">Food Order System </h1>
          <span className="font-semibold">
            [JAVA , SpringBoot , Angular , TypeScript]
          </span>
          <p className="mt-2 border border-black rounded-lg p-5 backdrop-blur-lg">
            Developed a full stack food ordering system using Spring Boot and
            Angular. The system allowed users to browse and place orders for
            meals from various restaurants, with the option to pay online or
            upon delivery. Implemented features such as customer registration
            and authentication, restaurant management, and order tracking.
          </p>
        </div>
        <div className="project">
          <h1 className="text-2xl font-bold">Idea Submission App </h1>
          <span className="font-semibold">
            [JAVA , SpringBoot , Angular , TypeScript]
          </span>
          <p className="mt-2 border border-black rounded-lg p-5 backdrop-blur-lg">
            Developed an idea submission app using Spring Boot, Angular, MySQL,
            and Tailwind CSS. The app allowed users to create accounts, login,
            and submit ideas, which were stored in a MySQL database. Implemented
            features such as user authentication, idea submission and
            validation, and idea voting. Used Spring Boot to build the back-end
            server and business logic, Angular for the front-end interface, and
            MySQL for data storage and retrieval. Utilized Java, HTML, and
            Tailwind CSS for the development and styling of the app. Tailwind
            CSS provided a set of highly customizable, low-level CSS utility
            classes for rapid UI development
          </p>
        </div>
      </div>
    </div>
  );
}
