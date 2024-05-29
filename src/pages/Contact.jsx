import { FiMessageCircle } from "react-icons/fi";
import { IoIosContacts } from "react-icons/io";
import { FaFileInvoice } from "react-icons/fa";

function Contact() {
  return (
    <div className="lg:px-32 px-6 my-10">
      <p className="text-[#0e34b2] mb-5 text-lg text-center font-semibold mt-10">
        Contact us
      </p>
      <h3 className="font-semibold tracking-wide text-center sm:text-3xl text-2xl text-gray-900">
        Talk to our support team.
      </h3>
      <p className="text-gray-600 text-center w-full my-8">
        Contact us to recover the password or seed phrase to your locked crypto
        wallet. Our friendly team would love to hear from you.
      </p>
      <div className=" flex flex-wrap justify-center items-center gap-5 w-full ">
        <div className=" lg:w-[30%] flex flex-col gap-x-2 py-3 items-center justify-start text-center h-auto gap-y-5 text-gray-600 bg-white sm:w-[50%]  ">
          <div className="flex  items-center justify-center gap-x-5">
            <span className="p-3 sm:p-2 rounded-full flex justify-center items-center bg-[#8bb4e9] ">
              <FiMessageCircle className="text-[#026ffa]  text-2xl font-semibold  " />
            </span>
            <span className="text-left">
              <h3 className="text-xl font-semibold">Trusted wallet recovery</h3>
              <p className=" text-sm font-semibold">
                The most trusted name in digital asset recovery since 2017.
              </p>
            </span>
          </div>
          <div className="flex  items-center justify-center gap-x-5">
            <span className="p-3 sm:p-2 rounded-full flex justify-center items-center bg-[#8bb4e9] ">
              <FaFileInvoice className="text-[#026ffa]  text-2xl font-semibold  " />
            </span>
            <span className="text-left">
              <h3 className="text-xl font-semibold">
                Secure Air-Gapped Storage
              </h3>
              <p className=" text-sm font-semibold">
                All wallet and password data is encrypted and stored on offline,
                air-gapped servers
              </p>
            </span>
          </div>
          <div className="flex  items-center justify-center gap-x-5">
            <span className="p-3 sm:p-2 rounded-full flex justify-center items-center bg-[#8bb4e9] ">
              <IoIosContacts className="text-[#026ffa]  text-2xl font-semibold  " />
            </span>
            <span className="text-left">
              <h3 className="text-xl font-semibold">Start for Free</h3>
              <p className=" text-sm font-semibold">
                A no-risk guarantee that you will not pay us a dime if we can
                not recover your password.
              </p>
            </span>
          </div>
        </div>
        <form></form>
      </div>
    </div>
  );
}

export default Contact;
