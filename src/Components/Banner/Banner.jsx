import React from "react";
import bgImage from "../../assets/banner-main.png";
const Banner = () => {
  return (
    <div
      className="container mx-auto px-2 md:px-0 items-center rounded-2xl h-100vh text-white my-5"
      style={{
        background: `
      radial-gradient(circle at top left, rgba(96,165,250,0.4), transparent 50%),
      radial-gradient(circle at top right, rgba(251,191,183,0.4), transparent 50%),
      linear-gradient(to right, #000, #1a1a1a)
    `,
      }}
    >
      <div className="text-center items-center space-y-5 md:space-y-2 py-20 md:py-10">
        <span>
          <img src={bgImage} className="w-40 mx-auto" />
        </span>
        <h2 className="text-5xl font-bold py-5">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="opacity-80">Beyond Boundaries Beyond Limits</p>

        <button className="btn bg-[#E7FE29] border-none rounded-full text-black my-2">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
