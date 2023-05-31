import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import Reservation from "../Pages/DashBoard/Reservation/Reservation";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import Bookings from "../Pages/DashBoard/Bookings/Bookings";
import Payment from "../Pages/DashBoard/Payment/Payment";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path: "mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "additem",
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path: "manageitems",
        element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      },
      {
        path: "allusers",
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: "home",
        element: <UserHome></UserHome>
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>
      },
      {
        path: "history",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
    ]
  },
]);

export default Router;
