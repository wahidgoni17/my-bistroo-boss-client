import { Parallax } from "react-parallax";
const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[700px]"
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-white bg-black bg-opacity-30 px-32 py-16">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-[750px] uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
