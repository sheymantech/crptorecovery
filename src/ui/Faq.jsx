import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const faqs = [
  {
    question: "How does it work?",
    answer:
      "The techniques we use to recover our clients’ accounts vary widely from case to case. In the event of a password recovery we will walk our clients through extracting an encrypted private key backup and building a comprehensive list of possible password guesses. We then transfer our client’s data to secure password cracking servers that use the data collected from the client to try billions or trillions of possible password combinations until the correct password is found.",
  },
  {
    question: "Can i trust you?",
    answer:
      "We understand the issue of trust and authority is one that must be addressed before our clients feel comfortable sharing sensitive financial information with us. We are the only crypto asset recovery company with public founders who have been featured in multiple global media outlets such as the BBC, Business Insider, and VICE (read more about our founders Chris and Charles).Furthermore, CryptoAssetRecovery.com is a registered LLC in good standing in the state of New Hampshire with a public business address.",
  },
  {
    question: "Do i need to tell you all my password?",
    answer:
      "No. We will never ask our clients to divulge more information than they are comfortable sharing with us.",
  },
  {
    question: "Are you legit?",
    answer:
      "We would never steal a client’s funds for any reason. We are a business based out of New Hampshire with public founders and a public business address, so if we were to steal from, or attempt to defraud our clients, it would be a simple process to report us which would quickly lead to our arrest and eventual jail time!Furthermore, since 2021 we have received countless 5-star reviews on our third party and unbiased review platform TrustPilot which we encourage you to read on Trustpilot.",
  },
  {
    question: "i have zero wallet information - can you help me?",
    answer:
      "If you have completely deleted your seed phrase or have thrown away a computer or phone with a private key backup on it, there is little to nothing we can do to assist you.In certain cases (such as with Blockchain.com) we can retrieve the backup file for you and occasionally we can recover deleted files off of an old hard drive.However, if you have lost access to a seed phrase and do not have a partial, or incorrect seed phrase recorded, there is nothing we or any other recovery company can do to assist you.",
  },
  {
    question: "can you recover scammed or stolen asset?",
    answer: `Unfortunately, no. When you have lost funds to a crypto scam, the odds of recovering those funds are very small to none. What we do offer, however, are scam tracing services.

    Scam tracing is for anyone who has been scammed and wishes to explore every option possible for recovery. Our investigations specialists will create a case detailing and visualizing the path your funds took and any connections we are able to make to real-world entities. Once you have that information on hand we will explain the recommended recovery path through law enforcement and any relevant exchanges to give you the best chance at recovery possible.
    
    We published an article on best practices when you have been the victim of a scam.`,
  },
  {
    question: "How long does the recovery process take?",
    answer:
      "The process of recovering lost crypto can vary in time from as short as 1 hour, to as long as 6+ months. While this may sound lengthy, this is because we typically exhaust our initial search within a week after initially onboarding a client. After this initial search has been exhausted, we hold on to the private key backup and password guesses to continue retesting as we discover new recovery vectors and expand our hardware capabilities (unless otherwise requested to delete client information)..",
  },

  {
    question: "What types of crypto can you recover?",
    answer:
      "The types of crypto that we support are expanding every day. At the moment we support seed phrase recovery for any type of bip-39 or erc-20 token including legacy mnemonics, 13th and 25th words.For password recoveries, our list of currently supported accounts is: Blockchain.com, Bitcoin Core, Multibit, Electrum, MetaMask, MyEtherWallet, Mist Ethereum Wallet, Dogechain Core, and Dogechain.info.",
  },
  {
    question: "How much do you charge?",
    answer:
      "We work on a service based fee of 20% of any funds recovered. This means that if your account ends up being empty, there is no charge to you.",
  },
  {
    question: "i thought bitcoin could not be hacked? What gives!",
    answer:
      "Correct. It is mathematically impossible to directly hack the Bitcoin Blockchain.However, our approach involves using the Bitcoin owner’s password guesses to “crack” their password. In combination with a private key backup (essentially an encrypted private key) this allows our clients to regain control of their funds.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="my-10 lg:px-32 px-6 py-10 ">
      <p className="text-[#0e34b2] mb-5 text-lg text-center font-semibold mt-10">
        Support
      </p>
      <h3 className="font-semibold tracking-wide text-center sm:text-3xl text-2xl text-gray-900">
        Frequently asked questions.
      </h3>
      <p className="text-gray-600 text-center w-full my-8">
        Everything you need to know about the product and billing.
      </p>
      <div className="w-full flex flex-col gap-y-5">
        {faqs.map((faq, index) => {
          return (
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-center items-center border-b-2 border-gray-500 py-3 flex-wrap "
              key={index}
            >
              <div className="flex justify-between items-center w-full text-gray-600 font-semibold text-2xl">
                <h2 className="text-gray-600 font-semibold text-lg">
                  {faq.question}
                </h2>
                {activeIndex === index ? (
                  <CiCircleMinus className="font-bold text-3xl cursor-pointer" />
                ) : (
                  <CiCirclePlus className="font-bold text-3xl cursor-pointer" />
                )}
              </div>
              {activeIndex === index && (
                <div>
                  <p className="text-gray-600 w-full py-5">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
