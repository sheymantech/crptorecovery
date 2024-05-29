import { FiMessageCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { SiBnbchain } from "react-icons/si";

function Support() {
  return (
    <div className="my-10 lg:px-32 px-6 py-10 ">
      <p className="text-[#0e34b2] mb-5 text-lg text-center font-semibold mt-10">
        Support
      </p>
      <h3 className="font-semibold tracking-wide text-center sm:text-3xl text-2xl text-gray-900">
        When will can help.
      </h3>
      <p className="text-gray-600 text-center w-full my-8">
        While not every lost wallet is recoverable, many of the most common
        issues are recoverable.
      </p>
      <div className="w-full flex flex-wrap gap-12 justify-center items-center text-center">
        <div className="flex flex-col gap-y-5 justify-center items-center tex-center sm:w-1/3">
          <span className="p-3  rounded-full flex justify-center items-center bg-[#8bb4e9] ">
            <FiMessageCircle className="text-[#026ffa] sm:text-lg text-2xl font-semibold  " />
          </span>
          <h2 className="text-gray-800 font-semibold tracking-wide text-2xl">
            Password does not work
          </h2>
          <p className="text-gray-600 text-center">
            You thought you knew your password, but now it will not unlock your
            wallet. Perhaps it involves different numbers or different
            capitalization than you remember.
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
            Partial seed phrase recovery
          </h2>
          <p className="text-gray-600 text-center">
            You wrote down a list of words, and the passphrase is some
            combination of those words.
          </p>
          <button className="text-[#026ffa]  font-semibold text-lg flex justify-center items-center cursor-pointer">
            Recover my seed <FaArrowRight className="text-2xl ps-2" />
          </button>
        </div>
        <div className="flex flex-col gap-y-5 justify-center items-center tex-center sm:w-1/3">
          <span className="p-3  rounded-full flex justify-center items-center bg-[#8bb4e9] ">
            <SiBnbchain className="text-[#026ffa] sm:text-lg text-2xl font-semibold  " />
          </span>
          <h2 className="text-gray-800 font-semibold tracking-wide text-2xl">
            Lost access to a major chain wallet
          </h2>
          <p className="text-gray-600 text-center">
            You have lost access to a common crypto asset, such as Bitcoin,
            Ethereum, Litecoin, Dogecoin, an NFT or dozens of other alt coins
          </p>
          <button className="text-[#026ffa]  font-semibold text-lg flex justify-center items-center cursor-pointer">
            Recover my wallet <FaArrowRight className="text-2xl ps-2" />
          </button>
        </div>
        <div className="flex flex-col gap-y-5 justify-center items-center tex-center sm:w-1/3">
          <span className="p-3  rounded-full flex justify-center items-center bg-[#8bb4e9] ">
            <FiMessageCircle className="text-[#026ffa] sm:text-lg text-2xl font-semibold  " />
          </span>
          <h2 className="text-gray-800 font-semibold tracking-wide text-2xl">
            You have been scammed
          </h2>
          <p className="text-gray-600 text-center">
            We offer a Tracing service not a recovery service for those looking
            to build their case and hopefully uncover the real-world identity of
            their scammer.
          </p>
          <button className="text-[#026ffa]  font-semibold text-lg flex justify-center items-center cursor-pointer">
            Recover my wallet <FaArrowRight className="text-2xl ps-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Support;
