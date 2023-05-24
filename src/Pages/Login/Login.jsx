import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import img from '../../assets/others/authentication2.png'
import bgimg from '../../assets/others/authentication.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
    const { googleLogIn, logIn } = useContext(AuthContext);
    const captcharef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleCaptchaValidation = ()=>{
        const user_captcha_value = captcharef.current.value
        console.log(user_captcha_value)
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
    .then(result=>{
        const loggeduser = result.user
        console.log(loggeduser)
    })
    .catch(error=>[
        console.log(error)
    ])
  };
  return (
    <div style={{ backgroundImage: `url("${bgimg}")` }} className="hero min-h-screen">
      <div style={{ backgroundImage: `url("${bgimg}")` }} className="hero-content m-16 flex-col lg:flex-row shadow-2xl">
        <div className="text-center lg:w-1/2 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card lg:w-1/2 max-w-sm">
          <form onSubmit={handleLogin} className="card-body">
            <div className="text-center"><h1 className="text-4xl font-bold">Login</h1></div>
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
                ref={captcharef}
                name="captcha"
                placeholder="Type the captcha above"
                className="input input-bordered"
              />
              <button onClick={handleCaptchaValidation} className="btn mt-4 btn-xs btn-outline btn-secondary">Validate Captcha</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn bg-yellow-600 text-white border-none" type="submit" value="Log In" />
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
