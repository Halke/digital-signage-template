import DigitalSignages from "../components/DigitalSignages";
import Menu from "../components/Menu";
import { getMenuData_One, getMenuData_Two, getEvents_One, getEvents_Two } from "../utils/services";
import DagensMenu from "../components/Menu/dagensMenu";

export default function Home({menus, events}) {
  return (
    <div>
      {/* <DigitalSignages events={events} /> */}
      <Menu menus={menus} />
      {/* <DagensMenu menu={menus.menuOne || {}} /> */}
    </div>
  )
}

export async function getStaticProps(ctx) {
  const menuOne = await getMenuData_One(ctx);
  const menuTwo = await getMenuData_Two(ctx);
  const eventsOne = await getEvents_One(ctx);
  const eventsTwo = await getEvents_Two(ctx);

  const menus = {
    menuOne: [...menuOne],
    menuTwo: [...menuTwo]
  }

  const events = {
    eventsOne: [...eventsOne],
    eventsTwo: [...eventsTwo]
  };

  return {
    props: {
      menus,
      events
    },
    revalidate: 30
  }
};
