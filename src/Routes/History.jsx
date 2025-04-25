import { useState } from "react";
import women_img from "../assets/PNG/women_img.png"
import p_logo_img from "../assets/PNG/p_logo_img.png"
import { Bell_icon, Clock_icon, Download_icon, Message_icon, Share_icon, Three_dot_icon, Thumsup_icon, ThumsupDown_icon } from "../component/common/Icons";
import profile_image from "../assets/PNG/profile_image.png"
import { HistoryData, Related_button_data, Related_Comedy_button_data, Related_history_all_data, Related_Trailer_button_data } from "../component/common/Helper";
import CommonBtn from "../component/common/CommonBtn";
import tack_img from "../assets/PNG/tack_img.png"
import history_ellips from "../assets/PNG/history_ellips.png"



const History = () => {
  const [showPopup, setShowPopup] = useState(false);
  // const [showAllData, setshowAllData] = useState(false);
  // const [showTrailerData, setshowTrailerData] = useState(false);
  // const [showComedyData, setshowComedyData] = useState(false);
  // const [showRelatedData, setshowRelatedData] = useState(false);
  const [activeButton, setActiveButton] = useState("All");
  const dataMapping = {
    All: Related_history_all_data,
    Trailer: Related_Trailer_button_data,
    Comedy: Related_Comedy_button_data,
    Related: Related_button_data,
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  return <>

    <div className=" relative">
      <img className="absolute top-0 left-0 xl:block hidden" src={tack_img} alt="img" />
      <img className="absolute bottom-[24%] left-[20px] xl:block hidden" src={tack_img} alt="img" />
      <img className="absolute top-[30%] right-[0px] xl:block hidden" src={history_ellips} alt="img" />
      <div className="max-w-[1140px] px-3 mx-auto mt-[30px]">
        <div className="w-full lg:flex justify-between gap-6">
          <div className="lg:w-[78%] ">
            <div><img className="w-full" src={women_img} alt="img" /></div>
            <p className="font_poppins font-semibold sm:text-[20px] text-[18px] lg:leading-[32px] text-[white] mt-[16px]">
              Quis potenti tortor arcu egestas acortor non
            </p>
            <div className="flex  items-center justify-between mt-[11px]">
              <div className="md:flex w-full justify-between ">
                <div className="flex justify-between ">
                  <div className="flex items-center  me-[40px]">
                    <img src={p_logo_img} alt="img" />
                    <div className="ms-[8px]">
                      <p className="font_poppins font-medium text-[14px] whitespace-nowrap leading-[21px] text-[white]">
                        TV Movies
                      </p>
                      <p className="font_poppins font-normal text-[12px] whitespace-nowrap leading-[21px] text-white opacity-70">
                        929K Subscribers
                      </p>
                    </div>
                  </div>
                  <button className="border me-[10px] border-amber-400 flex cursor-pointer  px-[14px] py-[10px] rounded-[4px] bg-gradient-to-r from-[#F2CD75] to-[#A97424] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424] duration-700">
                    <span className="bell_hover">
                      <Bell_icon />
                    </span>
                    <p className="ms-[10px] font_inter font-semibold lg:text-[12px] sm:text-[16px] text-[14px] xl:text-[16px] leading-[22.72px] text-[#FFFFFF] ">
                      Subscribe
                    </p>
                  </button>
                </div>
                <div className="flex items-center gap-2.5 justify-center md:justify-between mt-[30px] md:mt-0">
                  <div className="flex bg-[#ffffff2a] w-[65px] sm:p-[10px] p-[8px] rounded-[6px] opacity-70">
                    <span>
                      <Thumsup_icon />
                    </span>
                    <p className="ms-[4px] font-medium font_inter text-[14px] leading-[19px] text-white">
                      129
                    </p>
                  </div>
                  <div className="flex bg-[#ffffff2a] xl:w-[65px] w-[55px] sm:p-[10px] p-[8px]  rounded-[6px] opacity-70">
                    <span>
                      <ThumsupDown_icon />
                    </span>
                    <p className="ms-[4px] font-medium font_inter text-[14px] leading-[19px] text-white">
                      13
                    </p>
                  </div>
                  <div className="flex bg-[#ffffff2a] w-[74px] sm:p-[10px] p-[8px] rounded-[6px] opacity-70">
                    <span>
                      <Share_icon />
                    </span>
                    <p className="ms-[4px] font-medium font_inter text-[12px] leading-[17px] text-white">
                      Share
                    </p>
                  </div>
                  <div className="flex bg-[#ffffff2a] w-[100px]  sm:p-[10px] p-[8px] rounded-[6px] opacity-70">
                    <span>
                      <Download_icon />
                    </span>
                    <p className="ms-[4px] font-medium font_inter text-[12px] leading-[17px] text-white">
                      Download
                    </p>
                  </div>
                  <div className=" bg-[#ffffff2a] cursor-pointer w-[36px] p-[10px] rounded-[6px] opacity-70 hidden xl:block">
                    <span>
                      < Three_dot_icon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF14] px-[20px] py-[10px] rounded-[6px]  mt-[25px]">
              <p className="font_poppins font-normal sm:text-[14px] text-[12px] sm:leading-[22px] text-[#FFFFFFB2]">
                Elit eu maecenas augue lorem <span className="text-white">malesuada</span> amet mattis risus. Luctus hac at pharetra erat vivamus fusce sit nec. Interdum ornare velit consectetur et purus ultricies egiquet <span className="text-white"> udipiscing </span> volutpat.
              </p>
            </div>
            <div className="flex items-center justify-between   mt-[41px]">
              <div className="sm:flex items-center ">
                <p className="font_poppins me-[20px] font-semibold text-[14px] leading-[22px] text-[white] opacity-[70%]">
                  9,595 Comments
                </p>
                <div className="flex items-center mt-[10px] sm:mt-0">
                  <span>
                    <Clock_icon />
                  </span>
                  <p className="font_poppins ms-[10px] font-semibold text-[14px] leading-[22px] text-[white] opacity-70">
                    Sort by
                  </p>
                </div>
              </div>
              <span className="lg:hidden block" onClick={(e) => {
                e.stopPropagation();
                setShowPopup(!showPopup);
              }}>
                <CommonBtn btnName={'All Comments'} btnStyling="bg-gradient-to-r from-[#F2CD75] to-[#A97424]  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424] lg:px-[26px] sm:px-[15px] px-[15px] py-[10px] ms-[20px]" />
              </span>
            </div>
            <div onClick={handleClickOutside} className="relative">
              {showPopup && (
                <div
                  className="w-full bg-[#000000a0]  rounded-lg"
                >
                  {HistoryData.map((card, i) => (
                    <div key={i} className="bg-[#ffffff11] w-full px-[14px] py-[10px] rounded-[6px] mt-[10px]">
                      <div className="flex items-center">
                        <img src={card.img} alt="img" />
                        <div className="ms-[8px] w-full">
                          <div className="flex items-center justify-between">
                            <p className="font_poppins font-medium sm:text-[14px] text-[12px] text-white">{card.heading}</p>
                            <p className="sm:text-[12px] text-[11px] text-white opacity-70">{card.Date}</p>
                          </div>
                          <p className="sm:text-[12px] text-[10px] text-white opacity-70">{card.peragraph}</p>
                          <div className="flex items-center gap-2.5 mt-2">
                            <div className="opacity-70 flex items-center">
                              {card.Thumsup_icon}
                              <p className="ms-[2px] sm:text-[12px] text-[11px] text-white">{card.Likes}</p>
                            </div>
                            <div className="opacity-70 flex items-center">
                              {card.ThumsupDown_icon}
                              <p className="ms-[2px] sm:text-[12px] text-[11px] text-white">{card.Dislike}</p>
                            </div>
                            <div className="opacity-70 flex items-center">
                              {card.Message_icon}
                              <p className="ms-[3px] sm:text-[12px] text-[11px] text-white">{card.reply}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex w-full justify-between items-center input_seacrh_border rounded-[127px] mt-[30px] mx-auto md:mx-0">
              <span className="ms-[20px]">
                <Message_icon />
              </span>
              <input
                className=" me-[30px] ms-[8px] w-full font-normal text-[14px] leading-[19.88px] opacity-70 font_poppins text-white outline-0 placeholder-white"
                type="text"
                placeholder="Add a comment"
              />
              <img src={profile_image} alt="img" />
            </div>
            <div className=" hidden lg:block">
              {HistoryData.map((card, i) => (
                <div key={i} >
                  <div className="bg-[#ffffff14] px-[14px] py-[10px] rounded-[6px] w-[100%] mt-[23px]">
                    <div className="flex  w-full">
                      <div>
                        <img src={card.img} alt="img" />
                      </div>
                      <div className="ms-[8px] w-full">
                        <div className="flex items-center justify-between">
                          <p className="font_poppins font-medium text-[14px] leading-[21px] text-[white]">
                            {card.heading}
                          </p>
                          <p className="font-normal font_poppins leading-[19px] text-[white] text-[12px] opacity-[70%]">
                            {card.Date}
                          </p>
                        </div>
                        <p className="font_poppins font-normal text-[12px] leading-[19px] text-white opacity-70">
                          {card.peragraph}
                        </p>
                        <div className="flex items-center gap-2.5 mt-[6px]">
                          <div className="opacity-70 flex items-center">
                            {card.Thumsup_icon}
                            <p className="font_inter ms-[2px] font-normal text-[12px] leading-[17px] text-white ">
                              {card.Likes}
                            </p>
                          </div>
                          <div className="opacity-70 flex items-center">
                            {card.ThumsupDown_icon}
                            <p className="font_inter ms-[2px] font-normal text-[12px] leading-[17px] text-white ">
                              {card.Dislike}
                            </p>
                          </div>
                          <div className="opacity-70 flex items-center">
                            {card.Message_icon}
                            <p className="font_inter ms-[3px] font-normal text-[12px] leading-[17px] text-white ">
                              {card.reply}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              ))}
            </div>
          </div>
          <div className="lg:w-[40%] mt-[60px] lg:mt-0">
            <div className="w-full overflow-hidden">
              {/* <div className="flex  gap-3 pb-[10px] overflow-x-scroll justify-end  scroll_hide">
                <span onClick={() => setshowAllData(true)}>
                  <CommonBtn
                    btnName={"All"}
                    btnStyling="font_inter font-semibold text-[14px] leading-[19px] text-white opacity-70 cursor-pointer border border-amber-400 px-[20px] py-[10px] rounded-[4px] hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424]  hover:text-white"
                  />
                </span>
                <span onClick={() => setshowTrailerData(true)}>
                  <CommonBtn
                    btnName={'Trailer'}
                    btnStyling="font_inter font-semibold text-[14px] leading-[19px] text-white opacity-70 cursor-pointer border border-amber-400 px-[20px] py-[10px] rounded-[4px] hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424]  hover:text-white"
                  />
                </span>
                <span onClick={() => setshowComedyData(true)}>
                  <CommonBtn
                    btnName={'Comedy'}
                    btnStyling="font_inter font-semibold text-[14px] leading-[19px] text-white opacity-70 cursor-pointer border border-amber-400 px-[20px] py-[10px] rounded-[4px]  hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424]  hover:text-white"
                  />
                </span>
                <span onClick={() => { setshowRelatedData(true) }}>
                  <CommonBtn
                    btnName={'Related'}
                    btnStyling="font_inter font-semibold text-[14px] leading-[19px] text-white opacity-70 cursor-pointer border border-amber-400 px-[20px] py-[10px] rounded-[4px] hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424]  hover:text-white"
                  />
                </span>
              </div> */}

              <div className="flex gap-3 pb-[10px] overflow-x-scroll w-[100%]  justif y-end scroll_hide">
                {["All", "Trailer", "Comedy", "Related"].map((name) => (
                  <span key={name} onClick={() => setActiveButton(name)}>
                    <CommonBtn
                      btnName={name}
                      btnStyling={`font_inter font-semibold text-[14px] leading-[19px] cursor-pointer border border-amber-400 px-[20px] py-[10px] rounded-[4px]  ${activeButton === name
                        ? "bg-gradient-to-r from-[#F2CD75] to-[#A97424] text-white"
                        : "text-white opacity-70"
                        }`}
                    />
                  </span>
                ))}
              </div>

            </div>

            {dataMapping[activeButton].map((card, i) => (
              <div key={i} className="mt-[10px]">
                <div className="bg-[#FFFFFF14] border border-amber-50/20 rounded-[6px] p-[6px]">
                  <div className="flex gap-3">
                    <img src={card.img} alt="movie_img" />
                    <div>
                      <p className="font_poppins font-medium sm:text-[14px] text-[12px] sm:leading-[21px] text-white opacity-90 ">
                        {card.peragraph}
                      </p>
                      <p className="font_poppins mt-[2px] font-normal text-[12px] leading-[19px] text-white opacity-[70%]">
                        {card.text}
                      </p>
                      <div className="flex gap-4 mt-[2px]">
                        <p className="font_poppins font-normal text-[12px] leading-[19px] text-[white] opacity-70">
                          {card.views}
                        </p>
                        <p className="font_poppins font-normal text-[12px] leading-[19px] text-white opacity-[70%]">
                          {card.month}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}


            {/* {showAllData &&
              Related_history_all_data.map((card, i) => (
                <div key={i} className="mt-[10px]">
                  <div className="bg-[#FFFFFF14] border border-amber-50/20 rounded-[6px] p-[6px]">
                    <div className="flex gap-3">
                      <img src={card.img} alt="movie_img" />
                      <div>
                        <p className="font_poppins font-medium sm:text-[14px] text-[12px] sm:leading-[21px] text-white opacity-90 ">
                          {card.peragraph}
                        </p>
                        <p className="font_poppins mt-[2px] font-normal text-[12px] leading-[19px] text-white opacity-[70%]">
                          {card.text}
                        </p>
                        <div className="flex gap-4 mt-[2px]">
                          <p className="font_poppins font-normal text-[12px] leading-[19px] text-[white] opacity-70">
                            {card.views}
                          </p>
                          <p className="font_poppins font-normal text-[12px] leading-[19px] text-white opacity-[70%]">
                            {card.month}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {showTrailerData &&
              Related_Trailer_button_data.map((card, i) => (
                <div key={i} className="mt-[10px]">
                  <div className="bg-[#FFFFFF14] border border-amber-50/20 rounded-[6px] p-[6px]">
                    <div className="flex gap-3">
                      <img src={card.img} alt="movie_img" />
                      <div>
                        <p className="font_poppins font-medium sm:text-[14px] text-[12px] sm:leading-[21px] text-white opacity-90 ">
                          {card.peragraph}
                        </p>
                        <p className="font_poppins mt-[2px] font-normal text-[12px] leading-[19px] text-white opacity-[70%]">
                          {card.text}
                        </p>
                        <div className="flex gap-4 mt-[2px]">
                          <p className="font_poppins font-normal text-[12px] leading-[19px] text-[white] opacity-70">
                            {card.views}
                          </p>
                          <p className="font_poppins font-normal text-[12px] leading-[19px] text-white opacity-[70%]">
                            {card.month}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {showComedyData &&
              Related_Comedy_button_data.map((card, i) => (
                <div key={i} className="mt-[10px]">
                  <div className="bg-[#FFFFFF14] border border-amber-50/20 rounded-[6px] p-[6px]">
                    <div className="flex gap-3">
                      <img src={card.img} alt="movie_img" />
                      <div>
                        <p className="font_poppins font-medium sm:text-[14px] text-[12px] sm:leading-[21px] text-white opacity-90 ">
                          {card.peragraph}
                        </p>
                        <p className="font_poppins mt-[2px] font-normal text-[12px] leading-[19px] text-white opacity-[70%]">
                          {card.text}
                        </p>
                        <div className="flex gap-4 mt-[2px]">
                          <p className="font_poppins font-normal text-[12px] leading-[19px] text-[white] opacity-70">
                            {card.views}
                          </p>
                          <p className="font_poppins font-normal text-[12px] leading-[19px] text-white opacity-[70%]">
                            {card.month}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {showRelatedData &&
              Related_button_data.map((card, i) => (
                <div key={i} className="mt-[10px]">
                  <div className="bg-[#FFFFFF14] border border-amber-50/20 rounded-[6px] p-[6px]">
                    <div className="flex gap-3">
                      <img src={card.img} alt="movie_img" />
                      <div>
                        <p className="font_poppins font-medium sm:text-[14px] text-[12px] sm:leading-[21px] text-white opacity-90 ">
                          {card.peragraph}
                        </p>
                        <p className="font_poppins mt-[2px] font-normal text-[12px] leading-[19px] text-white opacity-[70%]">
                          {card.text}
                        </p>
                        <div className="flex gap-4 mt-[2px]">
                          <p className="font_poppins font-normal text-[12px] leading-[19px] text-[white] opacity-70">
                            {card.views}
                          </p>
                          <p className="font_poppins font-normal text-[12px] leading-[19px] text-white opacity-[70%]">
                            {card.month}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default History;
