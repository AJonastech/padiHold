"use client";

const CTA = () => {
  return (
    <section className="w-full bg-[#c8f052]  pb-32 px-0">
      {/* Black background section with phone mockup */}
      <div className="w-full bg-black min-h-[80vh] flex items-center justify-center relative p-0 m-0">
        <img
          src="/three-phones-mockup.png"
          alt="Three Phones Mockup"
          className="mx-auto translate-y-[20rem] lg:translate-y-[12rem] md:translate-y-[13rem]"
          style={{ maxHeight: "70vh" }}
        />
      </div>
      <div className="max-w-4xl mx-auto text-center mt-12 px-4 pt-[10rem] sm:pt-[15rem] md:pt-[10rem]">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Start using padiHold today
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Secure your transactions with trusted escrow services and AI-powered
          dispute resolution
        </p>

        {/* Trustpilot Rating */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center flex-col space-x-2">
            {/* Five green stars */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-green-600 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-black font-medium text-lg">Trustpilot</span>
          </div>
        </div>

        {/* QR Code */}
        <div className="mb-12 flex justify-center">
          <img
            src="/qr-demo.png"
            alt="QR Code"
            className="w-[18rem] h-[20rem] bg-white p-4 rounded-lg"
          />
        </div>

        {/* CTA Button */}
        <button className="bg-black hover:bg-gray-800 text-white/90 px-6 py-4 text-base font-medium rounded-full transition-colors duration-200 w-full lg:w-[20rem]">
          Sign up now
        </button>
      </div>
    </section>
  );
};

export default CTA;
