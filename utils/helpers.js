import MenuTable from "../components/Menu/menuTable";
import SignageProduct from "../components/DigitalSignages/signageProduct";

export const createArrayOfEventsSignages = (events = {}) => {
  if (!events || Object.keys(events).length === 0) return [];

  const newEventsArray = [...events.eventsOne, ...events.eventsTwo];

  return newEventsArray;
};

export const createMenusArray = (menus) => {
  const newMenusArray = [];

  menus.menuOne.forEach((menu) => {
    if (menu.categories && Boolean(menu.categories.length)) {
      newMenusArray.push(menu);
      newMenusArray.push(menu);
    }
  });

  menus.menuTwo.forEach((menu) => {
    if (menu.categories && Boolean(menu.categories.length)) {
      newMenusArray.push(menu);
      newMenusArray.push(menu);
    }
  });

  return newMenusArray;
};

export const mergeEventsAndMenusIntoSingleArray = (allMenus, allEvents) => {
  const newArray = [];
  let itemKey = 0;

  if (allMenus && allMenus?.length > 0) {
    allMenus.forEach((menu) => {
      newArray.push({
        type: "menu",
        component: (
          <MenuTable key={itemKey} menu={menu} noImages={itemKey % 2 === 1} />
        ),
      });

      itemKey++;
    });
  }

  if (allEvents && allEvents?.length > 0) {
    allEvents.forEach((event) => {
      newArray.push({
        type: "event",
        component: (
          <div key={itemKey} className="signages">
            <SignageProduct event={event} />
          </div>
        ),
      });

      itemKey++;
    });
  }

  return newArray;
};
