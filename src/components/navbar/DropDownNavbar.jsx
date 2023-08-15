import { NavLink } from "react-router-dom";

const DropDownNavbar = (props) => {
  return (
    <nav
      style={{ visibility: props.visibility }}
      className="lg:hidden text-white fixed z-50 w-full h-full top-16 overflow-auto"
    >
      <ul className="flex flex-col flex-nowrap text-white bg-neutral-800 overflow-auto text-xl font-['Lana'] text-center">
        <li>
          <NavLink to={"/ammos"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Ammos</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/armor"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Armor</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/ashes"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Ashes of War</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/bosses"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Bosses</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/classes"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Classes</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/creatures"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Creatures</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/incantations"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">
              Incantantations
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/items"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Items</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/locations"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Locations</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/npcs"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">NPCs</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/shields"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Shields</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/sorceries"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Sorceries</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/spirits"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Spirits</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/talismans"}>
            <div className="active:bg-neutral-700 p-4 sm:p-6">Talismans</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/weapons"}>
            <div className="pt-3 px-3 pb-20 active:bg-neutral-700 ">
              Weapons
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DropDownNavbar;
