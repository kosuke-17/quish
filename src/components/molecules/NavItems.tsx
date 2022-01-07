import React from "react";
import { NAVITEM_DATA } from "../../const/NAVITEM_DATA";
import NavItem from "../atoms/NavItem";

const NavItems: React.FC = () => {
  return (
    <React.Fragment>
      {NAVITEM_DATA.map((navItem) => {
        return (
          <NavItem key={navItem.link} name={navItem.name} link={navItem.link} />
        );
      })}
    </React.Fragment>
  );
};

export default NavItems;
