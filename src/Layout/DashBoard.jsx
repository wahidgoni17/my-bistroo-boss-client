import { Helmet } from "react-helmet-async";
import {
  FaHome,
  FaShoppingCart,
  FaWallet,
  FaCalendar,
  FaCalendarCheck,
  FaBars,
  FaShoppingBag,
  FaUtensils,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();
  // const isAdmin = true;
  const [isAdmin] = useAdmin()

  return (
    <>
      <Helmet>
        <title>Bistro Boss | DashBoard</title>
      </Helmet>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 bg-[#D1A054]  text-black">
            {/* <!-- Sidebar content here --> */}
            <h1 className="text-4xl font-bold p-3 mb-5">Bistroo Boss</h1>

            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaUtensils/>
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <TfiMenuAlt/>
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaBook/>
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers/>
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar />
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet />
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart>
                    My Cart
                    <span className="badge badge-secondary">
                      +{cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/bookings">
                    <FaCalendarCheck />
                    My Bookings
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaBars />
                Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaShoppingBag /> Order
              </NavLink>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
