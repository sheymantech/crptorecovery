import { Link } from "react-router-dom";
import ActionSection from "../ui/ActionSection";

const features = [
  "Dedicated support agent",
  "Fully doxxed team",
  "24hr Response Time",
  "No cost out of pocket",
  "Unlimited attacks",
  "Air-gapped servers",
  "Optional Zoom consultation",
  "Attack reporting",
  "White-glove support",
  "Custom development",
];

function Pricing() {
  return (
    <div>
      <div className="lg-px-32 px-10 text-gray-600 my-16">
        <p className="font-bold text-center text-[#0e34b2] mb-4 ">Pricing</p>
        <h2 className="text-center font-bold text-2xl tracking-wide mb-5">
          Locked Wallet Recovery and Scam Tracing
        </h2>
        <p className="text-center text-gray-600 mb-5">
          Simple, transparent pricing. Explore our pricing for wallet recoveries
          and scam investigations below. Contact us now for a free consultation.
        </p>

        <p className="font-bold text-center text-[#0e34b2] mb-4 mt-16 ">
          Pricing
        </p>
        <h2 className="text-center font-bold text-2xl tracking-wide mb-5">
          Understanding our pricing
        </h2>
        <p className="text-center text-gray-600 mb-5 tracking-wide">
          {`
        We understand that entrusting us with your assets is a big deal. That’s why we take our job of recovering your lost assets very seriously. Our expertise and knowledge in the field of crypto asset recovery is what sets us apart, and it’s what allows us to crack wallet passwords so that you can retrieve your assets.

We also know that the process of crypto asset recovery often involves sensitive personal and financial information, that’s why we handle every case with the highest level of security and confidentiality.

For password recoveries, we charge a fee of 20% of tokens recovered, which is a reflection of the value we bring to the table through our expertise and secure handling of each case.

And here’s the best part: our service is risk-free! That means you only pay us if we successfully recover your assets. If we can’t crack the wallet, you don’t pay a dime. We believe in putting our money where our mouth is, and that’s why we are confident in our abilities to recover your assets.`}
        </p>

        <div className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Password Recovery</h2>
                  <p>
                    We structure our pricing to prioritize our clients security.
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t pt-6">
                <h3 className="text-xl font-semibold">FEATURES</h3>
                <ul className="mt-4 space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-center">
                <Link
                  to="/contact"
                  className="bg-[#0e34b2] text-white py-2 px-4 rounded-lg"
                >
                  {" "}
                  i am interested
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ActionSection />
      </div>
    </div>
  );
}

export default Pricing;
