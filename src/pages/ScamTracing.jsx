import ActionSection from "../ui/ActionSection";

import { Link } from "react-router-dom";

function ScamTracing() {
  return (
    <>
      <div className="lg:px-32 px-6 py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">
              Track down your scammed crypto
            </h1>
            <div className="mt-2 max-w-md">
              <p className="text-xl text-gray-700">
                Our experts will track your stolen crypto and attempt to link
                the scammer to a real world entity.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/contact">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700">
                  Begin your free consultation
                </button>
              </Link>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <svg
                  viewBox="0 -3 32 32"
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#026FFA"
                    d="M548.783,1040.2 C547.188,1038.57 544.603,1038.57 543.008,1040.2 L528.569,1054.92 L524.96,1051.24 C523.365,1049.62 520.779,1049.62 519.185,1051.24 C517.59,1052.87 517.59,1055.51 519.185,1057.13 L525.682,1063.76 C527.277,1065.39 529.862,1065.39 531.457,1063.76 L548.783,1046.09 C550.378,1044.46 550.378,1041.82 548.783,1040.2"
                  />
                </svg>
                <span className="text-gray-700">
                  24 hr support response time
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  viewBox="0 -3 32 32"
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#026FFA"
                    d="M548.783,1040.2 C547.188,1038.57 544.603,1038.57 543.008,1040.2 L528.569,1054.92 L524.96,1051.24 C523.365,1049.62 520.779,1049.62 519.185,1051.24 C517.59,1052.87 517.59,1055.51 519.185,1057.13 L525.682,1063.76 C527.277,1065.39 529.862,1065.39 531.457,1063.76 L548.783,1046.09 C550.378,1044.46 550.378,1041.82 548.783,1040.2"
                  />
                </svg>
                <span className="text-gray-700">
                  Personalized guidance on next recovery steps
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  viewBox="0 -3 32 32"
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#026FFA"
                    d="M548.783,1040.2 C547.188,1038.57 544.603,1038.57 543.008,1040.2 L528.569,1054.92 L524.96,1051.24 C523.365,1049.62 520.779,1049.62 519.185,1051.24 C517.59,1052.87 517.59,1055.51 519.185,1057.13 L525.682,1063.76 C527.277,1065.39 529.862,1065.39 531.457,1063.76 L548.783,1046.09 C550.378,1044.46 550.378,1041.82 548.783,1040.2"
                  />
                </svg>
                <span className="text-gray-700">Free consultation</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b195c8067cf5ebe170a6f3_hero-img.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 86vw, (max-width: 991px) 84vw, 44vw"
              srcSet="https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b195c8067cf5ebe170a6f3_hero-img-p-500.png 500w, https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b195c8067cf5ebe170a6f3_hero-img-p-800.png 800w, https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b195c8067cf5ebe170a6f3_hero-img-p-1080.png 1080w, https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b195c8067cf5ebe170a6f3_hero-img-p-1600.png 1600w, https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b195c8067cf5ebe170a6f3_hero-img.png 2000w"
              alt="Header image"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <a
              href="#"
              className="w-inline-block"
              aria-label="open lightbox"
              aria-haspopup="dialog"
            >
              <img
                src="https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b031bec9e5953811539e88_cop-scam-trace.png"
                loading="lazy"
                width="1440"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 40vw, 39vw"
                alt="Dashboard mockup"
                srcSet="https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b031bec9e5953811539e88_cop-scam-trace-p-500.png 500w, https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b031bec9e5953811539e88_cop-scam-trace-p-800.png 800w, https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b031bec9e5953811539e88_cop-scam-trace-p-1080.png 1080w, https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b031bec9e5953811539e88_cop-scam-trace-p-1600.png 1600w, https://assets-global.website-files.com/6410de4b1ee56e7333393b23/64b031bec9e5953811539e88_cop-scam-trace.png 2000w"
                className="shadow-xl"
              />
            </a>
            <div>
              <div className="text-lg text-gray-600">Our mission</div>
              <h2 className="text-3xl font-semibold">
                Combatting sophisticated scammers
              </h2>
              <p className="text-lg text-gray-800">
                <strong>
                  Ransomware and crypto scams are becoming more common
                </strong>
                , and bad actors are using innovative techniques to obfuscate
                their trail and to hide from law enforcement. The ever
                increasing sophistication of scammers is a challenge for local
                law enforcement who do not have the training or funding to
                properly investigate crimes on the blockchain.
              </p>
              <p className="text-base text-gray-800">
                <strong>
                  Law enforcement are likely to never pursue the case
                </strong>
                without a clear understanding of what took place and a
                real-world entity to pursue.
              </p>
              <p className="text-base text-gray-800">
                <strong>Tracing the scammer</strong> can be done by our team of
                investigators who will work to link the scammer with a
                real-world entity and formulate reports to assist law
                enforcement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ActionSection />
    </>
  );
}

export default ScamTracing;
