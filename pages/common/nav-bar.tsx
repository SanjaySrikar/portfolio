export default function NavBar() {
  return (
    <div className="h-32 nav">
      <ul className="flex p-2 text-2xl justify-evenly ">
        <li className="cursor-pointer hover:text-gray-300 ">Home</li>
        <li className="cursor-pointer hover:text-gray-300 ">
          Projects
        </li>
        <li className="cursor-pointer hover:text-gray-300 ">
          Contact
        </li>
      </ul>
    </div>
  );
}
