import React from "react";
import CricketImg from "../../assets/logo.png";
import DollarIcon from "../../assets/dollar.png";
const Navbar = ({ coin }) => {
  return (
    <nav className=" shadow-md py-1">
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <img src={CricketImg} className="w-12" />
        </div>
        <div className="flex justify-between  items-center gap-4">
          <div className="gap-4 font-medium flex hidden md:inline-flex">
            <span>Home</span>
            <span>Fixture</span>
            <span>Teams</span>
            <span>Schedules</span>
          </div>
          <div>
            <button className="flex btn gap-2 rounded-full">
              {coin} Coin <img src={DollarIcon} />
            </button>
          </div>
          {/* SideBar */}
          <div>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="  w-full">
                <div className="flex-none md:hidden">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 min-h-full w-50 p-4">
                {/* Sidebar content here */}
                <li className="gap-2">
                  <a className="btn  rounded-full">Home</a>
                  <a className="btn rounded-full">Fixture</a>
                  <a className="btn rounded-full">Teams</a>
                  <a className="btn rounded-full">Schedules</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
