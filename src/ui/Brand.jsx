import brand1 from "../img/crypto-brand-1.webp";
import brand2 from "../img/crypto-brand-2.webp";
import brand3 from "../img/crypto-brand-3.webp";
import brand4 from "../img/crypto-brand-4.webp";
import brand5 from "../img/crypto-brand-5.png";
import brand6 from "../img/crypto-brand-6.png";

function Brand() {
  return (
    <div className="my-10 lg:px-32 px-6">
      <p className="text-gray-600 my-12 text-lg text-center">
        Trusted by 100+ publications..
      </p>
      <div className="my-12 flex flex-wrap gap-8 w-full justify-center items-center">
        <div className="sm:w-1/4 w-1/3">
          <img className="max-w-[100%]" src={brand1} alt="" />
        </div>
        <div className="sm:w-1/4 w-1/3">
          <img className="max-w-[100%]" src={brand2} alt="" />
        </div>
        <div className="sm:w-1/4 w-1/3">
          <img className="max-w-[100%]" src={brand3} alt="" />
        </div>
        <div className="sm:w-1/4 w-1/3">
          {" "}
          <img className="sm-w-[4rem] w-3rem" src={brand4} alt="" />
        </div>
        <div className="sm:w-1/4 w-1/3">
          <img className="sm-w-[4rem] w-3rem" src={brand5} alt="" />
        </div>
        <div className="sm:w-1/4 w-1/3">
          <img className="sm-w-[4rem] w-3rem" src={brand6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Brand;
