import { NavLink } from "react-router-dom";
import { useState } from "react";
import DropDownNavbar from "./DropDownNavbar";

const Navbar = () => {
  const [toggleModal, setToggleModal] = useState(true);
  const [visible, setVisible] = useState("hidden");
  const handleClick = () => {
    setToggleModal(!toggleModal);
    if (toggleModal) {
      setToggleModal(!toggleModal);
      setVisible(() => "visible");
      return;
    } else {
      setToggleModal(!toggleModal);
      setVisible(() => "hidden");
      return;
    }
  };
  return (
    <>
      <nav className="fixed w-full bg-neutral-900 pl-2 md:pl-0 pr-4 md:px-4 py-2 text-white font-['Lora'] justify-between flex z-50">
        <div className="flex">
          <img src="https://i.redd.it/3e2afpjsi4f61.png" width="50" />
          <h1 className="my-auto text-lg">
            <NavLink to={"/"}>Elden Ring Directory</NavLink>
          </h1>
        </div>
        <div className="my-auto lg:hidden">
          <button onClick={() => handleClick()}>
            <i className="fa-solid fa-bars fa-xl" />
          </button>
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
      <DropDownNavbar visibility={visible} />
    </>
  );
};
export default Navbar;
