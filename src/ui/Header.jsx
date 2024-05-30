import SumHeaderMsg from "./SumHeaderMsg";
import logo from "../img/crypto-logo.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaFlag } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { FaFileInvoice } from "react-icons/fa";
import electrum from "../img/crypto-electrum.png";
import metamask from "../img/crypto-metamask.png";
import multibit from "../img/crypto-multibit.png";
import blockchain from "../img/crypto-blockchain.png";
import bitcoin from "../img/crypto-bitcoin.png";

import { motion } from "framer-motion";

function Header() {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }
  function toggleResources() {
    setOpenResources(!openResources);
  }
  function toggleWallet() {
    setOpenWallet(!openWallet);
    setOpenResources(false);
  }

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className={`flex justify-between items-center lg:px-32 pt-5 px-6 h-auto flex-wrap ${
          openMenu ? " text-left pb-14" : ""
        }`}
      >
        <div className="w-[10rem]">
          <Link onClick={() => setOpenMenu(false)} to="/home">
            <img className="w-full" src={logo} alt="" />
          </Link>
        </div>
        <div className="sm:hidden ms-auto" onClick={toggleMenu}>
          {openMenu ? (
            <RxCross1 className="font-bold text-3xl text-black" />
          ) : (
            <CiMenuBurger className="font-bold text-3xl text-black" />
          )}
        </div>
        <nav
          className={`sm:flex justify-center items-center lg:gap-x-12 gap-x-5 text-gray-800 tracking-wide font-semibold text-lg ${
            openMenu
              ? " flex-col flex gap-y-3 w-full py-8  justify-start text-left mr-auto  "
              : "hidden"
          }`}
        >
          <Link
            className="mr-auto"
            onClick={() => setOpenMenu(false)}
            to="/home"
          >
            {" "}
            <p className=" mr-auto">Home</p>
          </Link>
          <p
            onClick={toggleResources}
            onMouseEnter={() => setOpenResources(true)}
            className={`flex flex-nowrap gap-x-1 justify-center items-center relative mr-auto ${
              openResources ? "w-full" : ""
            }`}
          >
            Resources{" "}
            {openResources ? (
              <IoIosArrowUp className="mt-1 font-bold text-2xl" />
            ) : (
              <IoIosArrowDown className="mt-1 font-bold text-2xl" />
            )}
            {openResources && (
              <div
                onMouseLeave={() => setOpenResources(false)}
                className={`px-2 absolute left-0 right-0 shadow-md shadow-gray-600/20 flex py-4  flex-col gap-x-2  items-center justify-center z-50 top-8  text-center ${
                  openResources ? "h-auto gap-y-5 bg-white z-50 top-10" : ""
                }`}
              >
                <Link onClick={() => setOpenMenu(false)} to="/about">
                  <div className="flex flex-none items-center justify-center gap-x-5">
                    <span className="p-3 sm:p-2 rounded-full flex justify-center items-center bg-[#8bb4e9] sm:hidden">
                      <FaFlag className="text-[#026ffa] sm:text-lg text-2xl font-semibold  " />
                    </span>
                    <span className="text-left">
                      <h3 className="text-sm">About us</h3>
                      <p className="sm:hidden text-sm font-normal">
                        learn about our story and our mission statement.
                      </p>
                    </span>
                  </div>
                </Link>
                <Link onClick={() => setOpenMenu(false)} to="/press">
                  <div className="flex flex-none items-center justify-center gap-x-5">
                    <span className="p-3 sm:p-2 rounded-full flex justify-center items-center bg-[#8bb4e9] sm:hidden">
                      <FiMessageCircle className="text-[#026ffa] sm:text-lg text-2xl font-semibold  " />
                    </span>
                    <span className="text-left">
                      <h3 className="text-sm">Press</h3>
                      <p className="sm:hidden text-sm font-normal">
                        news and writings, press releases and resources.
                      </p>
                    </span>
                  </div>
                </Link>
                <Link onClick={() => setOpenMenu(false)} to="testimonial">
                  <div className="flex flex-none items-center justify-center gap-x-5">
                    <span className="p-3 sm:p-2 rounded-full flex justify-center items-center bg-[#8bb4e9] sm:hidden">
                      <IoIosContacts className="text-[#026ffa] sm:text-lg text-2xl font-semibold  " />
                    </span>
                    <span className="text-left">
                      <h3 className="text-sm">Testimonials</h3>
                      <p className="sm:hidden text-sm font-normal">
                        Read reviews from some of our former clients.
                      </p>
                    </span>
                  </div>
                </Link>
                <Link onClick={() => setOpenMenu(false)} to="knowledge-center">
                  <div className="flex flex-none items-center justify-center gap-x-5">
                    <span className="p-3 sm:p-2 rounded-full flex justify-center items-center bg-[#8bb4e9] sm:hidden">
                      <FaFileInvoice className="text-[#026ffa] sm:text-lg text-2xl font-semibold  " />
                    </span>
                    <span className="text-left">
                      <h3 className="text-sm">Knowledge center</h3>
                      <p className="sm:hidden text-sm font-normal">
                        Your go to place to learn more about wallet recovery.
                      </p>
                    </span>
                  </div>
                </Link>
                <Link onClick={() => setOpenMenu(false)} to="/contact">
                  <button className=" w-full py-1  px-2 text-center bg-[#eff1fa] rounded-lg text-[#0e34b2] font-semibold tracking-wide cursor-pointer text-sm">
                    Recover your wallet
                  </button>
                </Link>
              </div>
            )}
          </p>
          <p
            onClick={toggleWallet}
            onMouseEnter={() => setOpenWallet(true)}
            className={`flex flex-nowrap gap-x-1 justify-center items-center relative mr-auto ${
              openWallet ? "w-full" : ""
            }`}
          >
            Wallets{" "}
            {openSubMenu ? (
              <IoIosArrowUp className="mt-1 font-bold text-2xl" />
            ) : (
              <IoIosArrowDown className="mt-1 font-bold text-2xl" />
            )}
            {openWallet && (
              <div
                onMouseLeave={() => setOpenWallet(false)}
                className={`px-2 absolute left-0 right-0 shadow-md shadow-gray-600/20 flex py-4  flex-col gap-x-2  items-center justify-center z-50 top-8  text-center ${
                  openWallet ? "h-auto gap-y-5 bg-white z-50 top-10" : ""
                }`}
              >
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="/wallets/blockchain-com"
                >
                  <div className="flex flex-none items-center justify-center gap-x-5">
                    <div className="p-3 sm:p-2 rounded-full flex justify-center items-center sm:hidden">
                      <img src={blockchain} alt="" />
                    </div>
                    <span className="text-left">
                      <h3 className="text-sm">Blockchain.com</h3>
                      <p className="sm:hidden text-sm font-normal">
                        learn about our Blockchain wallet.
                      </p>
                    </span>
                  </div>
                </Link>

                <Link
                  onClick={() => setOpenMenu(false)}
                  to="/wallets/bitcoin-core"
                >
                  <div className="flex flex-none items-center justify-center gap-x-5">
                    <div className="p-3 sm:p-2 rounded-full flex justify-center items-center sm:hidden">
                      <img src={bitcoin} alt="" />
                    </div>
                    <span className="text-left">
                      <h3 className="text-sm">Bitcoin core</h3>
                      <p className="sm:hidden text-sm font-normal">
                        learn about our Bitcoin core wallet.
                      </p>
                    </span>
                  </div>
                </Link>
                <Link onClick={() => setOpenMenu(false)} to="/wallets/multibit">
                  <div className="flex  items-center justify-center gap-x-5">
                    <div className="p-3 sm:p-2 rounded-full flex justify-center items-center sm:hidden">
                      <img src={multibit} alt="" />
                    </div>
                    <span className="text-left">
                      <h3 className="text-sm">Multibit wallet</h3>
                      <p className="sm:hidden text-sm font-normal">
                        learn about our multibit wallet.
                      </p>
                    </span>
                  </div>
                </Link>
                <Link onClick={() => setOpenMenu(false)} to="/wallets/metamask">
                  <div className="flex flex-none items-center justify-center gap-x-5">
                    <div className="p-3 sm:p-2 rounded-full flex justify-center items-center sm:hidden">
                      <img src={metamask} alt="" />
                    </div>
                    <span className="text-left">
                      <h3 className="text-sm">Metamask Wallet</h3>
                      <p className="sm:hidden text-sm font-normal">
                        learn about our Metamask wallet.
                      </p>
                    </span>
                  </div>
                </Link>
                <Link onClick={() => setOpenMenu(false)} to="/wallets/electrum">
                  <div className="flex flex-none items-center justify-center gap-x-5">
                    <div className="p-3 sm:p-2 rounded-full flex justify-center items-center sm:hidden">
                      <img src={electrum} alt="" />
                    </div>
                    <span className="text-left">
                      <h3 className="text-sm">Electrum</h3>
                      <p className="sm:hidden text-sm font-normal">
                        learn about our Electrum wallet.
                      </p>
                    </span>
                  </div>
                </Link>
                <Link onClick={() => setOpenMenu(false)} to="/contact">
                  <button className=" w-full py-1  px-2 text-center bg-[#eff1fa] rounded-lg text-[#0e34b2] font-semibold tracking-wide cursor-pointer text-sm">
                    Recover your wallet
                  </button>
                </Link>
              </div>
            )}
          </p>
          <Link
            className="mr-auto"
            onClick={() => setOpenMenu(false)}
            to="/pricing"
          >
            {" "}
            <p className="mr-auto">Pricing</p>
          </Link>
          <Link
            className="mr-auto"
            onClick={() => setOpenMenu(false)}
            to="/scam-trace"
          >
            <p className="mr-auto">Scam Tracing</p>
          </Link>
        </nav>
        {openMenu && (
          <Link onClick={() => setOpenMenu(false)} to="/contact">
            <button
              className={`bg-white rounded-lg font-semibold border-2 border-gray-600 tracking-wide text-gray-600 mb-5 py-2 px-5 text-lg sm:flex  ${
                openMenu ? "flex w-full justify-center" : "hidden"
              }`}
            >
              Login
            </button>
          </Link>
        )}
        <Link onClick={() => setOpenMenu(false)} to="/contact">
          <button
            className={`bg-[#026ffa] hover:bg-[#0e34b2] rounded-lg font-semibold tracking-wide text-white py-2 px-5 text-lg sm:flex  ${
              openMenu ? "flex w-full justify-center" : "hidden"
            }`}
          >
            {" "}
            Contact us
          </button>
        </Link>
      </motion.div>
    </>
  );
}

export default Header;
