import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCart = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, refetch] = useCart()
  const location = useLocation()
  const handleAddtoCart = (item) => {
    if (user&& user.email) {
      const cartItem = {menuItemId : _id, name, image, price, email: user?.email}
      fetch("http://localhost:4555/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch()
            Swal.fire("Successfully!", "item added successfully", "success");
          }
        });
    } else {
      Swal.fire("oops!", "please login first", "error");
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="card w-96 shadow-xl my-16">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 p-2 bg-slate-800 rounded-xl text-white">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddtoCart(item)}
            className="btn btn-outline text-orange-600 border-0 border-orange-600 border-b-4 mt-5"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
