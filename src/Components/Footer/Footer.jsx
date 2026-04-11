import React from "react";
import FooterImage from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-2 md:px-0">
      <div>
        <img src={FooterImage} className="mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 container mx-auto gap-5 text-center">
        <div className="space-y-3">
          <h3 className="font-bold text-xl">About Us</h3>
          <p className="opacity-70">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Quick Links</h3>
          <ul className="py-3 opacity-80">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl">Subscribe</h3>
          <p className="py-3 opacity-80">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form action="submit" className="flex  items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none rounded-xl rounded-r-none pl-2 border-gray-200 border h-10 pr-3 w-50 text-xs   bg-gray-100 text-black"
            />
            <button className="btn btn-primary rounded-xl rounded-l-none">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
