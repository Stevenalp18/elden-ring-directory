import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full bg-neutral-900 pl-2 md:pl-0 pr-4 md:px-4 py-2 text-white font-['Lora'] justify-between flex z-50">
        <div className="flex">
          <img src="https://i.redd.it/3e2afpjsi4f61.png" width="50" />
          <h1 className="my-auto text-lg">
            <NavLink to={"/"}>Elden Ring Directory</NavLink>
          </h1>
        </div>
        <div className="my-auto">
          <i className="lg:hidden fa-solid fa-bars fa-xl" />
        </div>
        <p
          className="hidden
       lg:block my-auto"
        >
          ***Under Development***
        </p>

        <ul className="my-auto text-lg hidden lg:block">
          <li>
            <a href="https://github.com/Stevenalp18/elden-ring-directory">
              Github
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
