import React from "react";
import { NAVITEM_DATA } from "../../const/NavItem_Data";
import { NavItem } from "../atoms";

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
