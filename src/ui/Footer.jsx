import footer1 from "../img/crypto-logo.png";
import footer2 from "../img/crypto-footer-logo-2.png";

function Footer() {
  return (
    <div className=" w-full lg:px-32 px-6  py-10  ">
      <div className="w-full justify-center items-center  sm:flex-nowrap flex-wrap gap-5">
        <div className="flex flex-col justify-start items-center sm:w-2/4">
          <div className="flex gap-x-5 ">
            <img className="w-[8rem]" src={footer1} alt="" />
            <img className="w-[8rem]" src={footer2} alt="" />
          </div>
          <nav className="flex flex-col gap-y-4 text-left text-gray-600 mt-4 sm:mr-0 mr-auto">
            <p>About us</p>
            <p>Testimonials</p>
            <p>Pricing</p>
            <p>Press</p>
            <p>Legal</p>
          </nav>
        </div>

        <div className="flex flex-col gap-y-2 sm:w-1/3">
          <span className="flex flex-nowrap items-center justify-center mt-5">
            <input
              type="text"
              className="outline-none border-[#026ffa] border-4 rounded-lg py-2 px-4"
              placeholder="Enter your email"
            />
            <button className="bg-[#026ffa] text-white ms-[-1rem] text-semibold py-[11.2px] px-3 rounded-r-lg">
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
