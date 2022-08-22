import { BiMenuAltLeft } from "react-icons/bi";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import userImg from "../assets/images/user.png";
import CustomLink from "./CustomLink";
const Menubar = () => {
  const menubar = (
    <>
      <CustomLink to="/">Dashboard</CustomLink>
      <CustomLink to="/campaign">Campaign</CustomLink>
      <CustomLink to="/Hypesocial">Hypesocial</CustomLink>
      <CustomLink to="/insights">Insights</CustomLink>
    </>
  );
  return (
    <nav className="bg-primary sticky top-0 left-0 w-full z-50">
      <div className="navbar w-full lg:w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <BiMenuAltLeft className="text-neutral text-3xl" />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              {menubar}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menubar}</ul>
        </div>
        <div className="navbar-end ">
          <div className="flex justify-center items-center space-x-3">
            <IoIosNotificationsOutline className="text-neutral text-2xl" />
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                data-toggle-theme="dark,light"
                data-act-class="ACTIVECLASS"
              />
              <BsFillSunFill className="swap-on fill-current text-neutral" />
              <BsMoonStarsFill className="swap-off fill-current text-neutral" />
            </label>
            <div className="text-neutral flex justify-center items-center space-x-2">
              <small className="font-semibold">Hi,Rakib</small>
              <img className="w-8" src={userImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
