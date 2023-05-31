import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
const AddItems = () => {
    const [axiosSecure] = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {name, category, price, recipe} = data
          const newItem = {name, category, price: parseFloat(price), recipe, image: imgURL}
          console.log(newItem)
          axiosSecure.post("/menu", newItem)
          .then(data=>{
            console.log('after posting new item', data.data)
            if(data.data.insertedId){
                reset()
                Swal.fire("Successfully!", "New Item Added", "success");
            }
          })
        }
      });
  };
  return (
    <div className="w-full px-10">
      <SectionTitle
        subheading={"whats New"}
        heading={"Add An Item"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-black font-semibold">
              Recipe Name*
            </span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 80 })}
            className="input text-white input-bordered w-full"
          />
        </div>
        <div className="flex gap-5 my-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-black font-semibold">
                Category*
              </span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select text-white select-bordered"
            >
              <option disabled>
                Pick One
              </option>
              <option>Pizza</option>
              <option>Salad</option>
              <option>Soup</option>
              <option>Dessert</option>
              <option>Desi</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-black font-semibold">
                Price*
              </span>
            </label>
            <input
              type="text"
              placeholder="Price"
              {...register("price", { required: true, maxLength: 80 })}
              className="input text-white input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-semibold">
              Recipe Details
            </span>
          </label>
          <textarea
            className="textarea text-white textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("recipe", { required: true, maxLength: 200 })}
          ></textarea>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text text-black font-semibold">
              Item Image
            </span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input text-white file-input-bordered w-full"
          />
        </div>
        <div>
          <input
            className="btn border-none text-white mt-4 bg-amber-600"
            type="submit"
            value="Add Item"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItems;
