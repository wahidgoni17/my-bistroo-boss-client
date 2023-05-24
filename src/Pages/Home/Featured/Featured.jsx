import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featurdimg from "../../../assets/home/featured.jpg";
import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured-items bg-fixed text-white p-24 my-20">
      <SectionTitle
        heading={"featured item"}
        subheading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center p-5 bg-slate-600 bg-opacity-40">
        <div>
          <img src={featurdimg} alt="" />
        </div>
        <div className="md:ml-12 py-20">
          <p>July 15, 2025</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vel
            incidunt numquam unde asperiores ipsum magni dolorum vitae inventore
            mollitia voluptatem, veritatis porro! Totam repellendus tempore eos
            voluptatem. Ut, quibusdam maxime. Tempora incidunt illo earum at
            numquam consequatur laborum minus excepturi labore, facere nulla,
            animi aperiam nostrum eos totam laboriosam.
          </p>
          <button className="btn btn-outline border-0 border-black border-b-4 mt-5">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
