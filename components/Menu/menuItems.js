import React from "react";
import MenuCard from "./menuCard";

const MenuItems = ({ menu, noImages = false, show }) => {
  const maxItemsPerCategory = noImages ? 4 : 5;
  const numberOfCategories = noImages ? 10 : 4;

  const categoiresToDisplay = menu.categories.slice(0, numberOfCategories);

  const columnWidth = categoiresToDisplay.length > 3 ? 3 : 4;

  return (
    <div className={`${noImages ? "menu-no-images" : "columns"}`}>
      {!noImages ? (
        <>
          {categoiresToDisplay.map((category, k) => (
            <div key={k} className={`column ${"is-" + columnWidth}`}>
              <p className="category-title is-2">{category.name}</p>
              <div
                className={`menu-items ${columnWidth === 4 ? "big-image" : ""}`}
              >
                {category.items.slice(0, columnWidth === 4 ? 3 : 5).map((item, key) => (
                  <MenuCard key={key} item={item} />
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {categoiresToDisplay.map((category, k) => (
            <div key={k} className="menu-category">
              <p className="category-title is-2">{category.name}</p>
              <div className="menu-category-items">
                {category.items.slice(0, 3).map((item, key) => (
                  <div key={key} className="menu-card-info">
                    <p className="item-title">{item?.name || "/"}</p>
                    <p className="item-price">{item?.price || "/"}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MenuItems;
