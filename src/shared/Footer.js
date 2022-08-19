import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary py-5">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-4 justify-items-center text-center gap-4 lg:gap-0">
        <div className="text-accent">
          <img className="w-28 block mx-auto" src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            sed ultricies volutpat rhoncus faucibus sit.
          </p>
          <ul className="flex justify-center items-center gap-6 mt-2">
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
        </div>

        <div>
          <h5 className="text-lg font-semibold text-neutral">Company</h5>
          <ul className="text-accent">
            <li>About Us</li>
            <li>Careers</li>
            <li>Case Study</li>
            <li>Blog </li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold text-neutral">Influencer</h5>
          <ul className="text-accent">
            <li>Join as Influencer</li>
            <li>HypeSocial</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold text-neutral">Advertiser</h5>
          <ul className="text-accent">
            <li>Join as Advertiser</li>
            <li>Hypelink</li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-3 lg:gap-0 text-accent mt-3">
        <p> &copy; Hypescout {new Date().getFullYear()}. All rights reserved</p>
        <div>
          <ul className="flex items-center justify-around gap-3">
            <li>Terms & Conditions</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
