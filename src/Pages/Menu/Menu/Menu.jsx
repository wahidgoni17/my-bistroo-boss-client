import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      {/* {main cover} */}
      <SectionTitle
        subheading="Don't Miss"
        heading="today's offer"
      ></SectionTitle>
      {/* {offerd menu items} */}
      <MenuCategory items={offered}></MenuCategory>
      {/* {dessert menu items} */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertBg}
      ></MenuCategory>
      {/* {pizza menu item} */}
      <MenuCategory items={pizza} title="pizza" img={pizzaBg}></MenuCategory>
      {/* {salad menu item} */}
      <MenuCategory items={salad} title="salad" img={saladBg}></MenuCategory>
      {/* {soup menu item} */}
      <MenuCategory items={soup} title="soup" img={soupBg}></MenuCategory>
    </div>
  );
};

export default Menu;
