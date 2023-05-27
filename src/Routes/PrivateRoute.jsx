import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loaderimg from '../assets/others/loader2.gif';

const PrivateRoute = ({children}) => {
    const {user , loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <img src={loaderimg} alt="" />
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;