import React from "react";
import MenuCard from "./menuCard";
import MenuItems from "./menuItems";

const MenuTable = ({ menu, noImages = false }) => {
  const isDagensMenu = menu.name === "Dagens Lunch";

  return (
    <div className="menu">
      <div className="menu-content">
        <MenuItems menu={menu} noImages={noImages} />
      </div>
      <div className="menu-footer">
        <img src="/images/logo.svg" alt="Logo" />
        <div className={`menu-footer-decors ${isDagensMenu ? "menu-footer-decors-dagens" : ""}`}>
          {isDagensMenu ? <p>Serveras mellan 10.00 - 14.00</p> : <img
            className="mb-3"
            src="/images/menu-decor-upper.png"
            alt="Decoration"
          />}
          <img src="/images/menu-decor-lower.png" alt="Decoration" />
        </div>
        <div className="menu-footer-guestie">
          <p>
            Denna lösning är skapad
            <br />
            och drivs av G.
          </p>
          <button className="button guestie">G</button>
        </div>
      </div>
    </div>
  );
};

export default MenuTable;
