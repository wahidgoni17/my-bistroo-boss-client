import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {
  const { googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const loggedbygoogle = result.user;
        const saveUser = {
          name: loggedbygoogle.displayName,
          email: loggedbygoogle.email,
        };
        fetch("http://localhost:4555/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="text-center">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-circle btn-info btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
