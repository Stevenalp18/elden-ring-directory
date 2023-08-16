import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <nav className="hidden lg:block p-8 w-60 fixed top-16 border-r-2 border-neutral-800 z-10 bg-black h-full">
      <ul className="text-white text- flex flex-col gap-4">
        <li>
          <NavLink to={"/ammos"}>Ammos</NavLink>
        </li>
        <li>
          <NavLink to={"/armor"}>Armor</NavLink>
        </li>
        <li>
          <NavLink to={"/ashes"}>Ashes of War</NavLink>
        </li>
        <li>
          <NavLink to={"/bosses"}>Bosses</NavLink>
        </li>
        <li>
          <NavLink to={"/classes"}>Classes</NavLink>
        </li>
        <li>
          <NavLink to={"/creatures"}>Creatures</NavLink>
        </li>
        <li>
          <NavLink to={"/incantations"}>Incantantations</NavLink>
        </li>
        <li>
          <NavLink to={"/items"}>Items</NavLink>
        </li>
        <li>
          <NavLink to={"/locations"}>Locations</NavLink>
        </li>
        <li>
          <NavLink to={"/npcs"}>NPCs</NavLink>
        </li>
        <li>
          <NavLink to={"/shields"}>Shields</NavLink>
        </li>
        <li>
          <NavLink to={"/sorceries"}>Sorceries</NavLink>
        </li>
        <li>
          <NavLink to={"/spirits"}>Spirits</NavLink>
        </li>
        <li>
          <NavLink to={"/talismans"}>Talismans</NavLink>
        </li>
        <li>
          <NavLink to={"/weapons"}>Weapons</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
