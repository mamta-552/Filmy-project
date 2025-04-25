import React from "react";
import CommonBtn from "./CommonBtn";

const WatchListCard = ({ card }) => {
    return <>
        <div className="px-2 relative mt-[50px] ">
            <div className=" px-2 border border-amber-50/25   rounded-[12px] pt-[8px]">
                <div className="overflow-hidden rounded-[12px]">
                    <img className="duration-700 w-full hover:scale-110 cursor-pointer " src={card.img} alt="movie_img" /></div>
                <div className="absolute bottom-[10px]">
                    <h1 className="text-[white] font_poppins leading-[25px] font-semibold  text-[16px]">{card.heading}</h1>
                    <div className={` lg:flex items-center lg:mt-[8px] mt-[4px] ${card.cardStyling}`}>
                        <p className="text-[white] font-normal leading-[22px] opacity-[70%]  text-[14px] font_poppins ">{card.peragraph}</p>
                        <img className={` xl:ms-[13px] lg:ms-[8px] lg:w-[45%] lg:mt-0 mt-[10px]`} src={card.img2} alt="star img" />
                    </div>
                    <div className={`flex items-center   lg:mt-[20px] mt-[10px] ${card.cardStyling}`}>
                        <span >
                            <CommonBtn btnName={' Watchlist'} btnStyling="bg-gradient-to-r from-[#F2CD75] to-[#A97424]  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424] lg:px-[26px] sm:px-[15px] px-[15px] py-[10px] me-[16px] lg:text-[12px] text-[16px] xl:text-[16px] " />
                        </span>
                        <span >
                            <CommonBtn btnName={'Trailer'} btnStyling="  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424] lg:px-[23px] sm:px-[15px] px-[15px] py-[10px]  text-[16px] " />
                        </span>
                    </div>
                </div>
            </div>
        </div >
    </>;
};

export default WatchListCard;

export const MovieCards = ({ card }) => {
    return <>
        <div className=" mx-2 border border-amber-50/25 mt-[60px]  rounded-[12px] px-[10px] pt-[10px] pb-[18px]">
            <div className="overflow-hidden rounded-[12px]">
                <img className="duration-500 w-full hover:scale-110 " src={card.img} alt="movie_img" />
            </div>
            <div className="px-[9px]">
                <p className="font_poppins whitespace-nowrap font-semibold lg:text-[20px] md:text-[15px] text-[18px] leading-[32px] text-white mt-[16px]">
                    {card.heading}
                </p>
                <p className="font_poppins font-normal leading-[25px] text-[16px] text-white  opacity-[70%] mt-[4px]">
                    {card.date}
                </p>
                <img className="mt-[8px]" src={card.img2} alt="star img" />
            </div>
        </div>
    </>
}
export const DashboardCards = ({ card }) => {
    return <>
        <div className=" mx-1 border border-amber-50/25 rounded-[12px] px-[7px] pt-[7px] pb-[16px] mt-[30px]">
            <div className="overflow-hidden rounded-[12px]">
                <img className="duration-500 w-full hover:scale-110 " src={card.img} alt="movie_img" />
            </div>

            <p className="font_poppins font-medium text-[13px] leading-[21px] text-white mt-[9px]">
                {card.heading}
            </p>

            <div className="flex items-center mt-[4px]">
                <p className="font_poppins font-normal text-[12px] leading-[19px] text-white opacity-70">
                    {card.Views}
                </p>
                <p className="font_poppins ms-[13px] font-normal  text-[12px] leading-[19px] text-white opacity-70">
                    {card.Month}
                </p>
            </div>
            <img className="mt-[16px]" src={card.img2} alt="star img" />
        </div>
    </>
}



