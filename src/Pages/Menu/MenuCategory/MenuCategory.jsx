import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="py-10">
        {title &&<Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 my-16 gap-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><div className="text-center"><button className="btn btn-outline text-black border-0 border-black border-b-4 mt-5">Order Your favourite Food</button></div></Link>
    </div>
  );
};

export default MenuCategory;
