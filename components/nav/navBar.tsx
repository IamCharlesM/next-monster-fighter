import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full p-4 bg-gray-800 text-white">
      <div className="flex w-fit h-full">
        {" "}
        <h1 className="text-2xl font-bold">My App</h1>
      </div>
      <div className="flex w-fit h-full">
        <Button variant={"ghost"}>reset</Button>
        <Button className=" bg-primary">resume</Button>
      </div>
    </nav>
  );
}
