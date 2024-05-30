function About() {
  return (
    <div>
      <div className="text-center text-gray-600">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-blue-600 text-lg mb-4 font-bold">About Us</div>
          <h2 className="text-3xl font-bold mb-4">Meet our team</h2>
          <div className="mb-2"></div>
          <div className="text-xl">
            Our philosophy is simple — hire a small team of passionate people
            motivated to add value and foster a culture that empowers the crypto
            community.
          </div>
        </div>

        <div className="flex flex-col items-center mt-12">
          <div className="w-32 h-32 mb-4">
            <img
              src="https://assets-global.website-files.com/6410de4b1ee56e7333393b23/641139f96a7d954fb09f3cd3_charlie.png"
              loading="lazy"
              alt="Charlie Brooks Headshot"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="text-lg font-semibold">Charles Brooks</div>
          <div className="text-base text-blue-700 my-1">
            Chief Technology Officer
          </div>
          <div className="text-base text-center my-1">
            Lead of technology and growth at CAR, UVM&nbsp;Comp Sci.
          </div>
        </div>

        <div className="flex flex-col my-12 items-center">
          <div className="w-32 h-32 mb-4">
            <img
              src="https://assets-global.website-files.com/6410de4b1ee56e7333393b23/641139ac6a7d9537a79f3303_chris.png"
              loading="lazy"
              alt="Chris Brooks Headshot"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="text-lg font-semibold">Chris Brooks</div>
          <div className="text-base text-blue-700 my-1">
            Chief Executive Officer
          </div>
          <div className="text-base text-center my-1">
            Founder and CEO of CAR, VP Technology Carescout.
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className="container mx-auto p-4 text-center text-gray-600">
        <div className="text-blue-600 text-lg mb-4 font-bold">About Us</div>
        <h1 className="text-3xl font-bold mb-4">
          Making Sure Your Crypto is Always Yours
        </h1>
        <p className="text-base my-2 text-left">
          At Crypto Asset Recovery, we understand the importance of keeping your
          cryptocurrency safe and secure. That’s why we’re dedicated to
          recovering the passwords to your forgotten wallets, ensuring that your
          digital assets remain in your possession.
          <br />
          <br />
          Picture this: you’ve got a digital fortune locked away in a crypto
          wallet, but the password is nowhere to be found. It’s like a treasure
          chest with a missing key – frustrating, right? But don’t lose hope
          just yet. Our team of experts use cutting-edge, air-gapped servers to
          crack the code and give you back control of your assets.
          <br />
          <br />
          Don’t let a forgotten password keep you from your digital riches.
          Trust us to be your crypto sheriffs, on a mission to recover your lost
          assets.
        </p>
      </div>

      {/* section 3 */}
      <div className="container mx-auto p-4 text-center text-gray-600">
        <div className="text-blue-600 font-bold text-lg mb-4">About Us</div>
        <h1 className="text-3xl font-bold mb-4">About Our Founders</h1>
        <div className="mb-2"></div>
        <p className="text-base text-left mx-auto">
          CryptoAssetRecovery.com was created to empower cryptocurrency owners
          to keep their assets safe. The company was founded in 2017 by Chris
          Brooks, a seasoned professional with a background in technology and a
          wealth of experience in the industry. He was previously the VP of
          Technology at Carescout and a programmer at Fidelity Investments.
          <br />
          <br />
          In 2021, the company evolved into a family business when Chris’s son
          Charles joined the team. Charles is a computer science student at the
          University of Vermont, who brings a fresh perspective and a wealth of
          technical knowledge to the table.
          <br />
          <br />
          Together, Chris and Charles are leading the way in the crypto asset
          recovery space, helping to bring large-scale adoption of
          cryptocurrency to the world. Today, we’re proud to be at the forefront
          of this exciting and rapidly-evolving industry. Don’t let a forgotten
          password keep you from your digital riches. Trust us to be your crypto
          sheriffs, on a mission to recover your lost assets.
        </p>
      </div>
    </div>
  );
}

export default About;
