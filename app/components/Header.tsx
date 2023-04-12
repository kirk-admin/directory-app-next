import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="w-full flex justify-between items-center bg-blue-600 py-4 px-3 text-white">
        <div className="logo w-full">
          <Link href={"/"}>Course App</Link>
        </div>
        <div className="flex justify-evenly items-center w-full">
          <Link href={"/about"}>About</Link>
          <Link href={"/about/team"}>Our Team</Link>
          <Link href={"/code/repos"}>Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
