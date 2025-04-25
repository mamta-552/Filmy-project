import React from "react";
import RMS_Cinema_profile from "../assets/PNG/RMS_Cinema_profile/My account/Ellipse 9.png"
import { Account_icon, Batch_icon, Book_icon, History_icon, Home_icon, LIke_icon, Playlist_icon, Reviews_icon, Search_icon, SignOut_icon, Subscription_icon, Trending_icon } from "../component/common/Icons";
import { LikeVideos_cards, Playlists2_cards, Playlists_cards } from "../component/common/Helper";
import { DashboardSlider } from "../component/SliderReact";
// import { DashboardSlider } from "../component/SliderReact";
// import { Dashboard_data } from "../component/common/Helper";

const Subscription = () => {
  return <div>
    <div className="max-w-[1140px] px-3 mx-auto">
      <div className="w-[100%] lg:flex  justify-between">
        <div className="lg:w-[20%] lg:overflow-y-scroll scroll_hide lg:h-screen bg-[#ffffff19] p-[20px]">
          <div className="text-center pt-[20px]">
            <div className="sm:flex lg:flex-col justify-between lg:justify-normal">
              <div>
                <img className="mx-auto" src={RMS_Cinema_profile} alt="profile img" />
                <p className="font_poppins font-normal whitespace-nowrap text-[18px] leading-[25px] text-white mt-[10px]">
                  Floyd Miles
                </p>
              </div>

              <div className="px-[10px] sm:w-[60%] w-full lg:w-full">
                <div className="flex justify-between border-b border-b-amber-50/60 pb-[10px] mt-[20px]">
                  <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                    Subscriptions
                  </p>
                  <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                    100k
                  </p>
                </div>
                <div className="flex justify-between border-b border-b-amber-50/60 pb-[10px] mt-[10px]">
                  <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                    Uploads
                  </p>
                  <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                    2.5k
                  </p>
                </div>
                <div className="flex justify-between border-b border-b-amber-50/60 pb-[10px] mt-[10px]">
                  <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                    Likes
                  </p>
                  <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                    1.2M
                  </p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col w-full items-center lg:items-start overflow-x-scroll scroll_hide sm:mt-[30px] mt-[20px]">
              <div className="bg_hover py-[10px] px-[16px] mt-[10px]">
                <div className="flex  items-center ">
                  <Home_icon />
                  <p className="font-normal ms-[8px] font_poppins text-[16px] leading-[22px] text-[white] opacity-70">
                    Home
                  </p>
                </div>
              </div>

              <div className="bg_hover py-[10px] px-[16px] mt-[10px]">
                <div className="flex  items-center">
                  <Book_icon />
                  <p className="font-normal ms-[8px] font_poppins text-[16px] leading-[22px] text-[white] opacity-70 ">
                    Library
                  </p>
                </div>
              </div>

              <div className="bg_hover py-[10px] px-[16px] mt-[10px]">
                <div className="flex  items-center">
                  <Reviews_icon />
                  <p className="font-normal whitespace-nowrap ms-[8px] font_poppins text-[16px] leading-[22px] text-[white] opacity-70 ">
                    My reviews
                  </p>
                </div>
              </div>

              <div className="bg_hover py-[10px] px-[16px] mt-[10px]">
                <div className="flex  items-center">
                  <History_icon />
                  <p className="font-normal ms-[8px] font_poppins text-[16px] leading-[22px] text-[white] opacity-70 ">
                    History
                  </p>
                </div>
              </div>

              <div className="bg_hover py-[10px] px-[16px] mt-[10px]">
                <div className="flex  items-center">
                  <Subscription_icon />
                  <p className="font-normal ms-[8px] font_poppins text-[16px] leading-[22px] text-[white] opacity-70 ">
                    Subscription
                  </p>
                </div>
              </div>

              <div className="bg_hover py-[10px] px-[16px] mt-[10px]">
                <div className="flex  items-center">
                  <Trending_icon />
                  <p className="font-normal ms-[8px] font_poppins text-[16px] leading-[22px] text-[white] opacity-70 ">
                    Trending
                  </p>
                </div>
              </div>

              <div className="bg_hover py-[10px] px-[16px] mt-[10px]">
                <div className="flex  items-center">
                  <Account_icon />
                  <p className="font-normal whitespace-nowrap ms-[8px] font_poppins text-[16px] leading-[22px] text-[white] opacity-70 ">
                    My account,
                  </p>
                </div>
              </div>

              <div className="bg_hover py-[10px] px-[16px] mt-[10px]">
                <div className="flex  items-center">
                  <SignOut_icon />
                  <p className="font-normal whitespace-nowrap ms-[8px] font_poppins text-[16px] leading-[22px] text-[white] opacity-70 ">
                    Sign out
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[79%] lg:overflow-y-scroll scroll_hide lg:h-screen mt-[30px] lg:mt-0">
          <div className="md:flex items-center justify-between lg:justify-normal">
            <div className="flex items-center justify-center  md:justify-normal mt-[30px] md:mt-0">
              <Batch_icon />
              <p className="font_poppins ms-[11px] whitespace-nowrap font-medium sm:text-[20px] text-[16px] leading-[28px] text-white">
                Most ranked/Suggested videos
              </p>
            </div>

            <div className="flex md:mx-[27px] xl:w-[360px] md:w-[400px] w-[100%] mt-[20px] md:mt-0 justify-between items-center input_seacrh_border rounded-[127px]">
              <input
                className="ms-[20px] me-[30px] w-full font-normal text-[12px] leading-[17px] font_poppins text-white outline-0 placeholder-white"
                type="text"
                placeholder="Search"
              />
              <span>
                <Search_icon />
              </span>
            </div>
          </div>
          <DashboardSlider ProfileDashboard={Playlists_cards} />

          {/***************************** Playlists **********************************/}
          <div className="mt-[50px]">
            <div className="flex items-center">
              <Playlist_icon />
              <p className="font-medium ms-[10px] text-[22px] leading-[31px] text-[white] font_poppins">
                Playlist_icon
              </p>
            </div>
            <DashboardSlider ProfileDashboard={Playlists2_cards} />
          </div>

          {/***************************** Liked Videos **********************************/}
          <div className="mt-[50px]">
            <div className="flex items-center">
              <LIke_icon />
              <p className="font-medium ms-[10px] text-[22px] leading-[31px] text-[white] font_poppins">
                Liked Videos
              </p>
            </div>
            <DashboardSlider ProfileDashboard={LikeVideos_cards} />
          </div>
        </div>
      </div>

    </div>
  </div>;
};

export default Subscription;
