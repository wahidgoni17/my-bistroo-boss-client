import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import img from "../../assets/others/authentication2.png";
import bgimg from "../../assets/others/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const { googleLogIn, logIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCaptchaValidation = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const loggeduser = result.user;
        console.log(loggeduser);
        navigate(from, {replace: true})
      })
      .catch((error) => [console.log(error)]);
      Swal.fire("Successfully!", "You are Logged in", "success");
  };
  return (
    <div
      style={{ backgroundImage: `url("${bgimg}")` }}
      className="hero min-h-screen"
    >
      <div
        style={{ backgroundImage: `url("${bgimg}")` }}
        className="hero-content m-16 flex-col lg:flex-row shadow-2xl"
      >
        <div className="text-center lg:w-1/2 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card lg:w-1/2 max-w-sm">
          <form onSubmit={handleLogin} className="card-body">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Login</h1>
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
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                onBlur={handleCaptchaValidation}
                name="captcha"
                placeholder="Type the captcha above"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn bg-yellow-600 text-white border-none"
                type="submit"
                value="Log In"
              />
            </div>
          </form>
          <h1 className="text-orange-600 pb-4 text-center">
            New to Bistroo Boss?
            <Link className="underline" to="/signup">
              Create an Account
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
