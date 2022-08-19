import { IoLocationSharp, IoTime } from "react-icons/io5";
import userImg from "../../assets/images/user.png";
import SocaiLIcon from "../../shared/SocaiLIcon";
const ProfileCard = () => {
  return (
    <article className="bg-primary p-8 rounded-lg border-2 border-transparent hover:border-accent">
      <img className="block mx-auto mb-4" src={userImg} alt="" />
      <div>
        <h3 className="text-center text-neutral font-semibold text-xl lg:text-2xl">
          Rafez Hossain
        </h3>
        <div className="text-accent flex justify-center items-center gap-2 my-2">
          <IoLocationSharp />
          <p>Dhaka Bangladesh</p>
        </div>
        <div className="text-accent flex justify-center items-center gap-2">
          <IoTime />
          <p className="whitespace-nowrap">Joined On: July 26th, 2022</p>
        </div>
        <SocaiLIcon />
        <div className="flex justify-center items-center text-accent text-center gap-3 mt-4">
          <div className="border border-dotted border-accent px-4 ">
            <p className="font-semibold">12k</p>
            <small>Followers</small>
          </div>
          <div className="border border-dotted border-accent px-4 ">
            <p className="font-semibold">Fashion</p>
            <small>Categories</small>
          </div>
          <div className="border border-dotted border-accent px-4 ">
            <p className="font-semibold">Male</p>
            <small>Gender</small>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
