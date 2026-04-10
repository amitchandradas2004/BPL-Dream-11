import React from "react";

const Newsletter = () => {
  return (
    <div className="py-10 px-3 rounded-2xl w-full md:w-[80%] mx-auto mt-10  bg-linear-to-r from-[#a9c7d6] via-[#e6e6e6] to-[#e8c7a5]">
      <div className="text-center items-center space-y-3">
        <h3 className="text-3xl font-bold">Subscribe to our Newsletter</h3>
        <p>Get the latest updates and news right in your inbox!</p>

        <form action="" className="flex gap-3 items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none rounded-xl pl-3 border-gray-200 border py-2 w-65 bg-gray-100"
          />
          <button className="btn btn-primary rounded-xl">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
