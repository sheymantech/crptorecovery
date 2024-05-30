import { useState } from "react";
import about1 from "../img/crypto-about-1.png";
import about2 from "../img/crypto-about-2.png";
import about3 from "../img/crypto-about-3.png";

import { motion } from "framer-motion";

function About() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "Upload your locked wallet and guesses",
      img: about1,
      content:
        "our user dashboard allows yout to upload data whenever you would like to improve our odds of recovery. All data is encrypted in transit and at rest",
    },
    {
      id: 1,
      title: "your wallet secured by an air-gap",
      img: about2,
      content:
        "To ensure data integrity, your encrypted wallet backup is moved, off-line to one of our state of the air-gaped servers.",
    },
    {
      id: 2,
      title: "Your password recovered",
      img: about3,
      content:
        "our state of the art attack strategies for brute forcing wallet passwords have acheive roughly a 50% success rate.",
    },
  ];

  return (
    <div className="my-10 lg:px-32 px-6 ">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-[#0e34b2] mb-5 text-lg text-center font-semibold mt-10"
      >
        About us
      </motion.p>
      <h3 className="font-semibold tracking-wide text-center sm:text-3xl text-2xl text-gray-900">
        Why You will Love CAR
      </h3>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-full lg:flex-nowrap flex flex-wrap gap-6 justify-center items-center mt-16"
      >
        <div className="lg:w-1/3 flex flex-col gap-y-8">
          {tabs.map((tab) => {
            return (
              <div
                onClick={() => setActiveTab(tab.id)}
                key={tab.id}
                className={`flex flex-col gap-y-3 ps-5  border-s-[5px]  tracking-wide text-left  ${
                  tab.id === activeTab ? "border-[#0e34b2]" : ""
                }`}
              >
                <h1 className="text-gray-800 font-semibold text-2xl">
                  {tab.title}
                </h1>
                <p className="text-gray-600">{tab.content}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-4 lg:w-1/3">
          {tabs.map(
            (tab) =>
              tab.id === activeTab && (
                <div key={tab.id} className="flex flex-col items-center">
                  <img src={tab.img} alt={tab.title} className="mb-4" />
                </div>
              )
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
