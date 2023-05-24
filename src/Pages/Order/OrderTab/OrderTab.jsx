import FoodCart from "../../../Components/Foodcart/FoodCart";

const OrderTab = ({items}) => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((item) => (
        <FoodCart key={item._id} item={item}></FoodCart>
      ))}
    </div>
  );
};

export default OrderTab;
