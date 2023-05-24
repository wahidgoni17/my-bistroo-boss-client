import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="my-12">
      <SectionTitle
        heading={"From Our Menu"}
        subheading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-4">
        <button className="btn btn-outline border-0 border-black border-b-4 mt-5">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
