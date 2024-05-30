import { FiMessageCircle } from "react-icons/fi";
import { IoIosContacts } from "react-icons/io";
import { FaFileInvoice } from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const highlights = [
    {
      id: "1",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Trusted wallet recovery",
      description:
        "The most trusted name in digital asset recovery since 2017.",
    },
    {
      id: "2",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 17.5H3.5M6.5 12H2M9 6.5H4M17 3L10.4036 12.235C10.1116 12.6438 9.96562 12.8481 9.97194 13.0185C9.97744 13.1669 10.0486 13.3051 10.1661 13.3958C10.3011 13.5 10.5522 13.5 11.0546 13.5H16L15 21L21.5964 11.765C21.8884 11.3562 22.0344 11.1519 22.0281 10.9815C22.0226 10.8331 21.9514 10.6949 21.8339 10.6042C21.6989 10.5 21.4478 10.5 20.9454 10.5H16L17 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Secure Air-Gapped Storage",
      description:
        "All wallet and password data is encrypted and stored on offline, air-gapped servers.",
    },
    {
      id: "3",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V13M12 8H16V12M15.5 3.5V2M19.4393 4.56066L20.5 3.5M20.5103 8.5H22.0103M3 13.3471C3.65194 13.4478 4.31987 13.5 5 13.5C9.38636 13.5 13.2653 11.3276 15.6197 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Start for Free",
      description:
        "A no-risk guarantee that you won't pay us a dime if we can't recover your password.",
    },
  ];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kkc4z3j", "template_6if4tef", form.current, {
        publicKey: "gjPUW-w4FxG3tjdX8",
      })
      .then(
        () => {
          alert("Form submitted successfully");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="mx-auto max-w-4xl p-4 text-center text-gray-600">
        <div className="mb-4 text-lg text-blue-600">Contact Us</div>
        <h2 className="mb-4 text-3xl font-bold">Talk to our support team</h2>
        <div className="mb-4"></div>
        <p className="text-xl">
          Contact us to recover the password or seed phrase to your locked
          crypto wallet. Our friendly team would love to hear from you.
        </p>
      </div>

      <div className="block gap-4 md:flex">
        <div className="w-layout-grid uui-layout18_item-list text-gray-600">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="p-4">
              <div className="flex gap-4">
                <div className="  flex items-center justify-center p-4 rounded-full border bg-[#026ffa] text-[#ebf2f] ">
                  <div className=" text-white">{highlight.icon}</div>
                </div>
                <div className="uui-layout18_item-text-wrapper">
                  <h3 className="uui-heading-xsmall-3">{highlight.title}</h3>
                  <div className="uui-space-xxsmall-5"></div>
                  <div className="md:w-96">{highlight.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form className="text-gray-600 ms-5" ref={form} onSubmit={sendEmail}>
          <div className="my-3 flex">
            <p>
              <label htmlFor="firstname" className="font-bold">
                {" "}
                First name
              </label>
              <br />
              <input
                type="text"
                className="w-[80%] rounded-xl border border-blue-200 px-2 transition-all duration-300 focus:w-[85%]"
                placeholder="first name"
              />
            </p>
            <p>
              <label htmlFor="lasttname" className="font-bold">
                {" "}
                Last name
              </label>
              <br />
              <input
                type="text"
                placeholder="last name"
                className="w-[80%] rounded-xl border border-blue-200 px-2 transition-all duration-300 focus:w-[85%]"
              />
            </p>
          </div>

          <div className="my-3">
            <p className="font-bold">Select your country</p>
            <select
              name="country"
              className="w-[85%] rounded-xl border border-blue-200 px-2 transition-all duration-300 focus:w-[90%]"
              id=""
            >
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="Cuba">Cuba</option>
              <option value="Crimea">Crimea</option>
              <option value="China">China</option>
              <option value="Ukraine">Ukraine</option>
              <option value="India">India</option>
              <option value="Syria">Syria</option>
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>

          <div className="my-3 flex">
            <p>
              <label htmlFor="Email" className="font-bold">
                {" "}
                Email{" "}
              </label>
              <br />
              <input
                type="email"
                placeholder="Your@company.com"
                className="w-[85%] rounded-xl border border-blue-200 px-2 transition-all duration-300 focus:w-[90%]"
              />
            </p>
            <p>
              <label htmlFor="phone" className="font-bold">
                {" "}
                Phone number
              </label>
              <br />
              <input
                type="text"
                placeholder="+1 (555) 000-0000"
                className="w-[80%] rounded-xl border border-blue-200 px-2 transition-all duration-300 focus:w-[85%]"
              />
            </p>
          </div>

          <div className="my-3">
            <p className="pb-3 font-bold">Choose your type of recovery</p>
            <select
              name="country"
              className="w-[85%] rounded-xl border border-blue-200 px-2 transition-all duration-300 focus:w-[90%]"
              id=""
            >
              <option value="Password">Password Recovery</option>
              <option value="Scam Tracing">Scam Tracing</option>
              <option value="Hard drive">Hard drive recovery</option>
              <option value="chain">Cross chain transaction</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="my-3 flex">
            <p>
              <label htmlFor="wallet" className="font-bold">
                {" "}
                Choose your wallet type
              </label>
              <br />
              <select
                name="country"
                className="w-[85%] rounded-xl border border-blue-200 px-2 transition-all duration-300 focus:w-[90%]"
                id=""
              >
                <option value="Metamask">Metamask</option>
                <option value="Electrum">Scam Tracing</option>
                <option value="Multibit">Multibit recovery</option>
                <option value="Blockchain"> Blockchain.com</option>
                <option value="Bitcoin">Bitcoin core</option>
              </select>
            </p>
            <p>
              <label htmlFor="lasttname" className="font-bold">
                {" "}
                Wallet value
              </label>
              <br />
              <input
                type="number"
                placeholder="1111"
                className="w-[80%] rounded-xl border border-blue-200 px-2 transition-all duration-300 focus:w-[85%]"
              />
            </p>
          </div>

          <button
            type="submit"
            className={`mx-auto block w-[70%]  ${"cursor-pointer"} rounded-lg bg-blue-500 py-2 text-center text-white md:px-4 md:pt-3 `}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
