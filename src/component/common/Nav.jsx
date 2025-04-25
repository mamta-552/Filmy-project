import { NavLink } from "react-router-dom";
// import RMS_LOGO_img from "../../../src/assets/Png/RMS_LOGO_img.png";
import RMS_LOGO_img from "../../assets/PNG/RMS_LOGO_img.png";
import { useState } from "react";
import { Nav_bell_icon, Nav_icon } from "./Icons";
import CommonBtn from "./CommonBtn";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav((prev) => {
      document.body.style.overflow = prev ? "auto" : "hidden";
      return !prev;
    });
  };

  return (


    <div>
      {toggleNav && (
        <div className="fixed inset-0 bg-black opacity-60 backdrop-blur-3xl z-10"></div>
      )}
      <div className="max-w-[1140px] px-3 mx-auto pt-[10px] pb-[18px] bg-[black] relative z-20">
        <div className=' bg -white shadow-[0px_4px_20px_0px_#0000001A]  rounded-[20px] mt-[20px]'>
          <div className="flex justify-between items-center">
            <img className="cursor-pointer" src={RMS_LOGO_img} alt="logo img" />

            {/* Navigation Menu */}
            <div className={`max-lg:fixed max-lg:h-screen max-lg:w-[50%] max-md:w-[100%] top-0  max-lg:flex items-center justify-center max-lg:flex-col z-10 bg-white lg:bg-transparent duration-700  ${!toggleNav ? "-left-full" : "left-0"}`}>
              <div className="lg:flex flex flex-col lg:flex-row  items-center">
                <div className="w-[438px] lg:flex flex flex-col lg:flex-row justify-between items-center me-[30px]">
                  <NavLink className="lg:text-white font_poppins lg:text-[14px] text-[18px] font-medium lg:font-normal mb-[30px] lg:mb-0 opacity-70" to="/">
                    Library
                  </NavLink>
                  <NavLink className="lg:text-white font_poppins lg:text-[14px] text-[18px] font-medium lg:font-normal mb-[30px] lg:mb-0 opacity-70" to="/My_reviews">
                    My Reviews
                  </NavLink>
                  <NavLink className="lg:text-white font_poppins lg:text-[14px] text-[18px] font-medium lg:font-normal mb-[30px] lg:mb-0 opacity-70" to="/History">
                    History
                  </NavLink>
                  <NavLink className="lg:text-white font_poppins lg:text-[14px] text-[18px] font-medium lg:font-normal mb-[30px] lg:mb-0 opacity-70" to="/Subscription">
                    Subscription
                  </NavLink>
                  <NavLink className="lg:text-white font_poppins lg:text-[14px] text-[18px] font-medium lg:font-normal mb-[30px] lg:mb-0 opacity-70" to="/Trending">
                    Trending
                  </NavLink>
                </div>

                <span >
                  <CommonBtn btnName={' Sign out'} btnStyling=" text-transparent bg-clip-text bg-gradient-to-r from-[#F2CD75] to-[#A97424] px-[14px] py-[10px] lg:text-white me-[16px] lg:text-[12px] text-[16px] xl:text-[16px] " />
                </span>
                <span >
                  <CommonBtn btnName={'My account'} btnStyling="bg-gradient-to-r from-[#F2CD75] to-[#A97424]  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424] px-[14px] py-[10px] me-[16px] lg:text-[12px] text-[16px] xl:text-[16px] mt-[30px] lg:mt-0" />
                </span>
                <span className="cursor-pointer me-[20px]">
                  <Nav_bell_icon />
                </span>
                <span className="cursor-pointer">
                  <Nav_icon />
                </span>
              </div>

            </div>

            <div onClick={handleToggleNav} class="flex justify-end  lg:hidden z-10 cursor-pointer">
              <div style={{ transform: toggleNav ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                <span style={{
                  transform: toggleNav ? "rotate(-5deg) translate(10px, 5px)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }} className="block w-8 h-[3px]  bg-gradient-to-r from-[#F2CD75] to-[#A97424] mb-[6px]"></span>
                <span style={{
                  opacity: toggleNav ? 0 : 1,
                  transition: "opacity 0.3s",
                }} className="block w-8 h-[3px]  bg-gradient-to-r from-[#F2CD75] to-[#A97424] mb-[6px]"></span>
                <span style={{
                  transform: toggleNav ? "rotate(-80deg) translate(14px, 8px)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }} className="block w-8 h-[3px]  bg-gradient-to-r from-[#F2CD75] to-[#A97424]"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Nav;
