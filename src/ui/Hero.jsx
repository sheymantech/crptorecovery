import heroImg from "../img/crypto-hero.webp";

function Hero() {
  return (
    <div className="lg:px-32 sm:px-10 px-6 flex flex-wrap justify-center items-center gap-5 w-full text-left mt-14 ">
      <div className="flex flex-col gap-y-4 py-14">
        <h1 className="font-bold text-4xl tracking-wide text-gray-800">
          Easy, Transparent Wallet Recovery
        </h1>
        <p className="text-gray-600 text-xl">
          The simplest way to recover your lost wallet password and investigate
          scammed crypto.
        </p>
        <span className="w-full  flex sm:flex-row flex-col gap-5 mt-6">
          <button className="bg-[#026ffa] hover:bg-[#0e34b2] rounded-lg font-semibold tracking-wide text-white py-2 px-5 text-lg w-full sm:w-[28%] ">
            Contact an expert
          </button>
          <button className="bg-transparent border border-gray-600 rounded-lg font-semibold tracking-wide py-2 px-5 text-lg w-full text-gray-600 sm:w-[28%]">
            Testimonials
          </button>
        </span>
      </div>
      <div>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
