import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const SocaiLIcon = () => {
  return (
    <ul className="flex justify-center items-center gap-6 my-3 text-accent">
      <li>
        <AiFillFacebook />
      </li>
      <li>
        <AiFillInstagram />
      </li>
      <li>
        <AiFillLinkedin />
      </li>
      <li>
        <AiOutlineTwitter />
      </li>
    </ul>
  );
};

export default SocaiLIcon;
