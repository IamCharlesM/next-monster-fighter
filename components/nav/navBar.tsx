import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">My App</h1>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Button className=" bg-primary">Test</Button>
    </nav>
  );
}
