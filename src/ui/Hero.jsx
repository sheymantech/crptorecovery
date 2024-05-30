import { Link } from "react-router-dom";
import heroImg from "../img/crypto-hero.webp";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="lg:px-32 sm:px-10 px-6 flex flex-wrap justify-center items-center gap-5 w-full text-left mt-14 ">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-y-4 py-14"
      >
        <h1 className="font-bold text-4xl tracking-wide text-gray-800">
          Easy, Transparent Wallet Recovery
        </h1>
        <p className="text-gray-600 text-xl">
          The simplest way to recover your lost wallet password and investigate
          scammed crypto.
        </p>
        <span className="w-full  flex sm:flex-row flex-col gap-5 mt-6">
          <button className="bg-[#026ffa] hover:bg-[#0e34b2] rounded-lg font-semibold tracking-wide text-white py-2 px-5 text-lg w-full sm:w-[28%] ">
            <Link to="/contact"> Contact an expert</Link>
          </button>

          <button className="bg-transparent border border-gray-600 rounded-lg font-semibold tracking-wide py-2 px-5 text-lg w-full text-gray-600 sm:w-[28%]">
            <Link to="/testimonial"> Testimonials</Link>
          </button>
        </span>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <img src={heroImg} alt="" />
      </motion.div>
    </div>
  );
}

export default Hero;
