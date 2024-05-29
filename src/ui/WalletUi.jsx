import { FiMessageCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { SiBnbchain } from "react-icons/si";
import ActionSection from "./ActionSection";

function WalletUi() {
  return (
    <>
      <div className="my-10 lg:px-32 px-6 py-10 ">
        <p className="text-[#0e34b2] mb-5 text-lg text-left font-semibold mt-10">
          About us
        </p>
        <h3 className="font-semibold tracking-wide text-left sm:text-3xl text-2xl text-gray-900">
          How does our Service Work?
        </h3>
        <p className="text-gray-600 text-left w-full mt-8 mb-16">
          You provide us with a copy of your wallet backup - wallet.dat - and
          your guesses as to what your password is. We will use your password
          guesses to “brute force” your password or recover your partial seed.
        </p>
        <div className="w-full flex flex-wrap gap-12 justify-center items-center text-center">
          <div className="flex flex-col gap-y-5 justify-center items-center tex-center sm:w-1/3">
            <span className="p-3  rounded-full flex justify-center items-center bg-[#8bb4e9] ">
              <FiMessageCircle className="text-[#026ffa] sm:text-lg text-2xl font-semibold  " />
            </span>
            <h2 className="text-gray-800 font-semibold tracking-wide text-2xl">
              Secure, air-gapped servers
            </h2>
            <p className="text-gray-600 text-center">
              Any and all secure client data is stored and processed on secure,
              air-gapped servers to protect your data.
            </p>
            <button className="text-[#026ffa]  font-semibold text-lg flex justify-center items-center cursor-pointer">
              Recover my password <FaArrowRight className="text-2xl ps-2" />
            </button>
          </div>
          <div className="flex flex-col gap-y-5 justify-center items-center tex-center sm:w-1/3">
            <span className="p-3  rounded-full flex justify-center items-center bg-[#8bb4e9] ">
              <BsLightningCharge className="text-[#026ffa] sm:text-lg text-2xl font-semibold  " />
            </span>
            <h2 className="text-gray-800 font-semibold tracking-wide text-2xl">
              Industry leading attacks
            </h2>
            <p className="text-gray-600 text-center">
              We use cutting edge, industry leading attack vectors to achieve a
              best in class success rate in recovering passwords.
            </p>
          </div>
        </div>
      </div>
      <ActionSection />
    </>
  );
}

export default WalletUi;
