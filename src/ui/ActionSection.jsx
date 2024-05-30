import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function ActionSection() {
  return (
    <div className="my-16 mx-6 lg:mx-32">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="px-6 py-10 flex flex-wrap items-center lg:justify-between justify-start gap-5 my-16 bg-[#f9fafb] rounded-lg lg:flex-nowrap gap-y-5"
      >
        <div>
          <h2 className="font-semibold text-gray-800 text-2xl tracking-wide">
            Your keys, back in your pocket
          </h2>
          <p className="text-gray-600 mt-3">
            Put your finances under your control again. Click Get started to get
            help.
          </p>
        </div>
        <div className="flex gap-x-5 flex-wrap gap-y-5">
          <Link to="/contact">
            <button className="bg-[#026ffa] hover:bg-[#0e34b2] rounded-lg font-semibold tracking-wide text-white py-2 px-5 text-lg ">
              Get Started
            </button>
          </Link>
          <Link to="/testimonial">
            <button className="bg-transparent border border-gray-600 rounded-lg font-semibold tracking-wide py-2 px-5 text-lg text-gray-600 ">
              See Our Testimonials
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ActionSection;
