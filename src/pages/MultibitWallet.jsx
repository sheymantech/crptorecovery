import { Link } from "react-router-dom";
import WalletUi from "../ui/WalletUi";

function MultibitWallet() {
  return (
    <div>
      <div className="my-16 mx-6 lg:mx-32">
        <div className="px-6 py-10 flex flex-wrap items-center lg:justify-between justify-start gap-5 my-16 bg-[#f9fafb] rounded-lg lg:flex-nowrap gap-y-5">
          <div>
            <h2 className="font-semibold text-gray-800 text-2xl tracking-wide">
              Multibit Wallet Recovery
            </h2>
            <p className="text-gray-600 mt-3">
              Learn about the recovery process of for Multibit wallets and about
              what your options are..
            </p>
          </div>
          <div className="flex gap-x-5 flex-wrap gap-y-5">
            <Link to="/contact">
              <button className="bg-[#026ffa] hover:bg-[#0e34b2] rounded-lg font-semibold tracking-wide text-white py-2 px-5 text-lg ">
                contact an expert
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border border-gray-600 rounded-lg font-semibold tracking-wide py-2 px-5 text-lg text-gray-600 ">
                Tell me more
              </button>
            </Link>
          </div>
        </div>
      </div>

      <WalletUi />
    </div>
  );
}

export default MultibitWallet;
