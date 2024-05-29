import testimonial2 from "../img/crypto-testimonial2.png";
import testimonial3 from "../img/crypto-testimonial3.png";

function Testimonial() {
  return (
    <>
      <div className="p-20 text-gray-600">
        <div className=" mx-auto">
          <div className="py-16 text-center">
            <div className=" mx-auto">
              <div className="text-xl font-semibold text-[#0e34b2] ">
                About Us
              </div>
              <h2 className="text-3xl font-medium mt-2">
                Read our testimonials
              </h2>
              <div className="h-4"></div>
            </div>
            <div className="max-w-3xl mx-auto mt-10">
              <div className="bg-white shadow-md p-8 rounded-lg">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://assets-global.website-files.com/6410de4b1ee56e7333393b23/641107d0522d5350c7363ab1_currency.png"
                    alt="Testimonial logo"
                    width="200"
                    className="w-50"
                  />
                </div>
                <h3 className="text-2xl font-medium mb-4">
                  the password to your wallet can cost you millions, but options
                  for recovery exist
                </h3>
                <div className="flex justify-center mb-4">
                  <img
                    src="https://assets-global.website-files.com/6410de4b1ee56e7333393b23/6411087ceda8c448366799cd_Farrington.png"
                    alt="William Farrington, reporter with currency.com"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <div className="text-lg font-semibold">William Farrington</div>
                <div className="text-base">Journalist, Currency.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg-px-32 px-10 text-gray-600">
        <h2 className="text-center font-bold text-2xl tracking-wide mb-5">
          Do not just take our word for it
        </h2>
        <p className="text-center text-gray-600 mb-5">
          Hear from some of our amazing customers who have been reunited with
          their funds
        </p>
        <div className=" mx-auto lg:w-[30rem] sm:w-[30rem] bg-[#f9fafb] rounded-lg px-5 py-8 text-gray-600 flex flex-col justify-start gap-y-4 mb-16 mt-10">
          <h2 className="font-bold text-2xl">
            {`  "chris recovering my password after a good few months was too good
            to be true. He was patient and understanding..."`}
          </h2>

          <div className=" mt-5 flex gap-x-5 justify-center items-center w-[75%]">
            <img src={testimonial2} className="rounded-full w-[3rem]" alt="" />
            <span className="flex flex-col gap-y-1 text-gray-600">
              <h2 className="font-bold text-xl">olivia</h2>
              <p>feb 21, 2023</p>
            </span>
          </div>
        </div>
        <div className=" mx-auto lg:w-[30rem] sm:w-[30rem] bg-[#f9fafb] rounded-lg px-5 py-8 text-gray-600 flex flex-col justify-start gap-y-4 mb-16 mt-10">
          <h2 className="font-bold text-2xl">
            {`  "Great service, immediate reactions and I’ve got my password back (in 2 days!)."`}
          </h2>

          <div className=" mt-5 flex gap-x-5 justify-center items-center w-[75%]">
            <img src={testimonial3} className="rounded-full w-[3rem]" alt="" />
            <span className="flex flex-col gap-y-1 text-gray-600">
              <h2 className="font-bold text-xl">Anouk Mommers</h2>
              <p>jan 31, 2023</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
