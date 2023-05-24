import img from "../../assets/others/authentication2.png";
import bgimg from "../../assets/others/authentication.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { updateProfile, getAuth } from "firebase/auth";
const auth = getAuth();
const SignUp = () => {
    const { newUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        newUser(email, password)
    .then(result=>{
        updateProfile(auth.currentUser,{
          displayName: name,
        })
        navigate('/')
    })
    .catch(error=>{
        console.log(error)
    })
      };
  return (
    <div
      style={{ backgroundImage: `url("${bgimg}")` }}
      className="hero min-h-screen"
    >
      <div
        style={{ backgroundImage: `url("${bgimg}")` }}
        className="hero-content m-16 flex-col lg:flex-row-reverse shadow-2xl"
      >
        <div className="text-center lg:w-1/2 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card lg:w-1/2 max-w-sm">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="text-center">
              <h1 className="text-4xl font-bold">SignUp</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-yellow-600 text-white border-none"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <h1 className="text-orange-600 pb-4 text-center">
            Already Registered?
            <Link className="underline" to="/login">
              Go to Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
