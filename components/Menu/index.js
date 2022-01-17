import React from "react";
import MenuTable from "./menuTable";
import { createMenusArray } from "../../utils/helpers";

const Menu = ({ menus }) => {
  const allMenus = createMenusArray(menus);

  console.log(allMenus);

  return (
    <MenuTable menu={allMenus[2]} noImages={false} />
  );
};

export default Menu;
