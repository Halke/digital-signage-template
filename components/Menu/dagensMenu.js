import React from "react";
import MenuTable from "./menuTable";

const DagensMenu = ({ menu }) => {
  const [dagensMenu] = menu.filter((item) => item.name === "Dagens Lunch");

  return <MenuTable menu={dagensMenu} noImages={false} />;
};

export default DagensMenu;
