import WalletUi from "../ui/WalletUi";

function ElectrumWallet() {
  return (
    <div>
      <div className="my-16 mx-6 lg:mx-32">
        <div className="px-6 py-10 flex flex-wrap items-center lg:justify-between justify-start gap-5 my-16 bg-[#f9fafb] rounded-lg lg:flex-nowrap gap-y-5">
          <div>
            <h2 className="font-semibold text-gray-800 text-2xl tracking-wide">
              Electrum Wallet Recovery
            </h2>
            <p className="text-gray-600 mt-3">
              Learn about the recovery process of for Electrum wallets and about
              what your options are.
            </p>
          </div>
          <div className="flex gap-x-5 flex-wrap gap-y-5">
            <button className="bg-[#026ffa] hover:bg-[#0e34b2] rounded-lg font-semibold tracking-wide text-white py-2 px-5 text-lg ">
              contact an expert
            </button>
            <button className="bg-transparent border border-gray-600 rounded-lg font-semibold tracking-wide py-2 px-5 text-lg text-gray-600 ">
              Tell me more
            </button>
          </div>
        </div>
      </div>

      <WalletUi />
    </div>
  );
}

export default ElectrumWallet;
