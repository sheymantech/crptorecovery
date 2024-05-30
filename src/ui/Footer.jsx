import footer1 from "../img/crypto-logo.png";
import footer2 from "../img/crypto-footer-logo-2.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";

function Footer() {
  const [mail, setMail] = useState("");
  return (
    <div className="w-full lg:px-32 px-6 py-10">
      <div className="w-full  flex flex-row justify-between items-start gap-10 flex-wrap">
        <div className=" flex flex-col justify-start items-center sm:w-[20rem]">
          <div className="flex gap-x-5">
            <img className="w-[8rem]" src={footer1} alt="" />
            <img className="w-[8rem]" src={footer2} alt="" />
          </div>
          <nav className="flex flex-col gap-y-4 text-left text-gray-600 mt-4 sm:mr-0 mr-auto">
            <Link to="/about">About us</Link>
            <Link to="/testimonial">Testimonials</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/press">Press</Link>
          </nav>
        </div>

        <div className=" sm:w-[20rem] flex flex-col gap-y-2">
          <span className="flex flex-nowrap items-center justify-center text-gray-600 mt-5">
            <input
              onChange={(e) => setMail(e.target.value)}
              type="mail"
              className="outline-none border-[#026ffa] border-4 rounded-lg py-2 px-4"
              placeholder="Enter your email"
            />
            <button
              onClick={() => {
                if (mail === "")
                  return toast.error("please enter a valid email address");
                toast.success("you have successfully subscribed!");

                setMail("");
              }}
              className="bg-[#026ffa] text-white ms-[-1rem] text-semibold py-[11.2px] px-3 rounded-r-lg"
            >
              Subscribe
            </button>
          </span>
          <p className="text-gray-600 text-center">We care about your data.</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-center text-gray-600 mt-10">
        <p>&copy; 2024 CryptoAssetRecovery.com, LLC. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
