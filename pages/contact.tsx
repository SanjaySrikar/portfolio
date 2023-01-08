// write a funtion by providing email and phone no

export default function Contact() {
  return (
    <div className="container p-5  ">
      <h1 className="font-bold text-center text-3xl">Contact</h1>
      <div className="contact flex flex-col px-5 overflow-auto justify-center mt-10 items-center border border-black rounded-lg backdrop-blur-sm p-5">
        <h1 className="font-semibold text-xl">Email: </h1>
        <span >sanjaythamma@gmail.com</span>
        <h1 className="font-semibold text-xl">Phone: </h1>
        <span>9113587107</span>
      </div>
    </div>
  );
}
