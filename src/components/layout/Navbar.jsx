
export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-transparent text-white">
      <h1 className="text-xl font-bold">My 3D Site</h1>
      <ul className="flex gap-4">
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#work" className="hover:text-gray-400">Work</a></li>
      </ul>
    </nav>
  );
}
    