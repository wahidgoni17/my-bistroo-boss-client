const FoodCart = ({item}) => {
    const {image, name, recipe, price}= item
  return (
    <div className="card w-96 shadow-xl my-16">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 p-2 bg-slate-800 rounded-xl text-white">${price}</p>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
        <button className="btn btn-outline text-orange-600 border-0 border-orange-600 border-b-4 mt-5">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
