import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
        <SectionTitle
        subheading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h2 className="text-4xl uppercase text-center -mt-24 text-slate-100">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h2 className="text-4xl uppercase text-center -mt-24 text-slate-100">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h2 className="text-4xl uppercase text-center -mt-24 text-slate-100">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h2 className="text-4xl uppercase text-center -mt-24 text-slate-100">Desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h2 className="text-4xl uppercase text-center -mt-24 text-slate-100">Salads</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
