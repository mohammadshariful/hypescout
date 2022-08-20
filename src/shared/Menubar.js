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
      <div class="navbar w-full lg:w-[90%] mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <BiMenuAltLeft className="text-neutral text-3xl" />
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              {menubar}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menubar}</ul>
        </div>
        <div class="navbar-end ">
          <div className="flex justify-center items-center space-x-3">
            <IoIosNotificationsOutline className="text-neutral text-2xl" />
            <label class="swap swap-rotate">
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
