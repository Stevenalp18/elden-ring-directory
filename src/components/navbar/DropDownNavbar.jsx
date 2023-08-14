import { NavLink } from "react-router-dom";

const DropDownNavbar = () => {
  return (
    <nav className="text-white fixed z-50 border-2 w-full h-full top-16 overflow-auto">
      <ul className="flex flex-col flex-nowrap text-white bg-neutral-800 overflow-auto text-xl font-['Lana'] text-center">
        <li>
          <NavLink to={"/ammos"}>
            <div className="p-4 bg-neutral-700 p-4">Ammos</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/armor"}>
            <div className="p-4 bg-neutral-700 p-4 ">Armor</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/ashes"}>
            <div className="p-4 bg-neutral-700 p-4 ">Ashes of War</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/bosses"}>
            <div className="p-4 bg-neutral-700 p-4 ">Bosses</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/classes"}>
            <div className="p-4 bg-neutral-700 p-4 ">Classes</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/creatures"}>
            <div className="p-4 bg-neutral-700 p-4 ">Creatures</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/incantations"}>
            <div className="p-4 bg-neutral-700 p-4 ">Incantantations</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/items"}>
            <div className="p-4 bg-neutral-700 p-4 ">Items</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/locations"}>
            <div className="p-4 bg-neutral-700 p-4 ">Locations</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/npcs"}>
            <div className="p-4 bg-neutral-700 p-4 ">NPCs</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/shields"}>
            <div className="p-4 bg-neutral-700 p-4 ">Shields</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/sorceries"}>
            <div className="p-4 bg-neutral-700 p-4 ">Sorceries</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/spirits"}>
            <div className="p-4 bg-neutral-700 p-4 ">Spirits</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/talismans"}>
            <div className="p-4 bg-neutral-700 p-4 ">Talismans</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/weapons"}>
            <div className="pt-3 px-3 pb-20 bg-neutral-700 p-4 ">Weapons</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DropDownNavbar;
