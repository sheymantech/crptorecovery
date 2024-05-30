import brand1 from "../img/crypto-brand-1.webp";
import brand2 from "../img/crypto-brand-2.webp";
import brand3 from "../img/crypto-brand-3.webp";
import brand4 from "../img/crypto-brand-4.webp";
import brand5 from "../img/crypto-brand-5.png";
import brand6 from "../img/crypto-brand-6.png";

import { motion } from "framer-motion";

function Brand() {
  return (
    <div className="my-10 lg:px-32 px-6">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-gray-600 my-12 text-lg text-center"
      >
        Trusted by 100+ publications..
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-12 flex flex-wrap gap-8 w-full justify-center items-center"
      >
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
      </motion.div>
    </div>
  );
}

export default Brand;
