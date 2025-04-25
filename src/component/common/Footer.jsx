import React, { useState } from "react";
import footer_logo from "../../assets/PNG/footer_logo.png"
import insta_img from "../../assets/PNG/insta_img.png"
import facebook_img from "../../assets/PNG/facebook_img.png"
import Linkdin_img from "../../assets/PNG/Linkdin_img.png"
import footer_absolute from "../../assets/PNG/footer_absolute.png"
import footer_ellips from "../../assets/PNG/footer_ellips.png"
import footer_left_ellips from "../../assets/PNG/footer_left_ellips.png"

const Footer = () => {
    return <>
        <div className="relative">
            <img className="absolute bottom-0 right-[0px] hidden lg:block" src={footer_absolute} alt="img" />
            <img className="absolute right-0 bottom-[-21px] hidden lg:block -z-30" src={footer_ellips} alt="ellips" />
            <img className="absolute left-0 bottom-[-21px] hidden lg:block -z-30" src={footer_left_ellips} alt="ellips" />
            <div className="max-w-[1140px] px-3 mx-auto lg:mt-[180px] sm:mt-[80px] mt-[60px]">
                <div className="flex flex-row flex-wrap justify-betw een justify-center">
                    <div className="md:w-3/12 sm:w-4/12  w-12/12 px-3 text-center sm:text-start">
                        <img className="mx-auto sm:mx-0" src={footer_logo} alt="logo img" />
                        <p className="font_poppins font-normal text-[14px] lg:leading-22px text-white opacity-70 sm:mt-[20px] mt-[8px]">
                            Duis vel lacus nulla dapibus auctor arcu viverra eget sed.
                        </p>
                        <div className="flex gap-2.5 md:mt-[30px] sm:mt-[25px] mt-[19px] justify-center sm:justify-start">
                            {/* <a target="_blank" href="https://www.instagram.com/">
                                <img className="cursor-pointer" src={insta_img} alt="insta_img" />
                            </a> */}

                            <a
                                target="_blank" href="https://www.instagram.com/">
                                <img className="cursor-pointer  rounded-[50%] duration-300 active:brightness-125 active:bg-gradient-to-r active:from-[#F2CD75] active:to-[#A97424]"
                                    src={insta_img} alt="insta_img"
                                />
                            </a>

                            <a target="_blank" href="https://www.facebook.com/">
                                <img className="cursor-pointer  rounded-[50%] duration-300 active:brightness-125 active:bg-gradient-to-r active:from-[#F2CD75] active:to-[#A97424]" src={facebook_img} alt="facebook img" />

                            </a>
                            <a target="_blank" href="https://www.linkedin.com/feed/">
                                <img className="cursor-pointer  rounded-[50%] duration-300 active:brightness-125 active:bg-gradient-to-r active:from-[#F2CD75] active:to-[#A97424]" src={Linkdin_img} alt="linkdin img" />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-2/12 sm:w-3/12 w-5/12 px-3 sm:mx-auto  text-center sm:text-start mt-[30px] sm:mt-0">
                        <h1 className="font_poppins  font-medium text-[14px] leading-[22px] text-[white] ">
                            Home
                        </h1>
                        <p className="font_poppins font-normal whitespace-nowrap text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Watch videos
                        </p>
                        <p className="font_poppins font-normal whitespace-nowrap text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Fan favorites
                        </p>
                        <p className="font_poppins font-normal whitespace-nowrap text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Most rated movies
                        </p>
                        <p className="font_poppins font-normal  text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Featured
                        </p>
                        <p className="font_poppins font-normal whitespace-nowrap text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Reviews & Rating
                        </p>
                        <p className="font_poppins font-normal text-[14px] whitespace-nowrap leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Recently Viewed
                        </p>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Faqs
                        </p>
                    </div>
                    <div className="md:w-1/12 sm:w-3/12 w-5/12 px-3 mx-auto text-center sm:text-start mt-[30px] sm:mt-0">
                        <h1 className="font_poppins  font-medium text-[14px] leading-[22px] text-[white] ">
                            Category
                        </h1>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                    </div>
                    <div className="md:w-1/12 sm:w-3/12 w-5/12 px-3 mx-auto  text-center sm:text-start mt-[30px] md:mt-0">
                        <h1 className="font_poppins  font-medium text-[14px] leading-[22px] text-[white] ">
                            Item
                        </h1>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                    </div>
                    <div className="md:w-1/12 sm:w-3/12 w-5/12 px-3 mx-auto  text-center sm:text-start mt-[30px] md:mt-0">
                        <h1 className="font_poppins whitespace-nowrap  font-medium text-[14px] leading-[22px] text-[white] ">
                            My account
                        </h1>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                        <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-[70%] mt-[12px] hover:translate-x-[8px] duration-500 cursor-pointer">
                            Links
                        </p>
                    </div>
                </div>
                <p className="font_inter font-normal sm:text-[16px] text-[13px] leading-[24px] text-[white] opacity-[70%] md:mt-[67px] mt-[30px] text-center mb-[20px]">
                    © {new Date().getFullYear()} RMS. All rights reserved.
                </p>
            </div>
        </div>


    </>;
};

export default Footer;
