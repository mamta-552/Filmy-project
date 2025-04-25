import React from "react";
import { Search_icon } from "../component/common/Icons";
import herosection_movie_img from "../assets/PNG/herosection_movie_img.png"
import tv_absolute from "../assets/PNG/tv_absolute.png"
import tack_img from "../assets/PNG/tack_img.png"
import { MovieImageSlider } from "../component/SliderReact";
import { Advanture_cards, Comedies_cards, Populat_movie_cards, Romance_TV_Shows_cards, Tv_shows_cards } from "../component/common/Helper";
// import tv_ellips from "../assets/PNG/tv_ellips.png"
import popular_absolute from "../assets/PNG/popular_absolute.png"
import tv_right_ellips from "../assets/PNG/tv_right_ellips.png"
import ellips from "../assets/PNG/ellips.png"
import advanture_absolute from "../assets/PNG/advanture_absolute.png"
import movie_line from "../assets/PNG/movie_line.png"
import linear_hover from "../assets/PNG/linear_hover.png"
import dotted_line from "../assets/PNG/dotted_line.png"
import robin_hood_img from "../assets/PNG/robin_hood_img.png"
import star_img_fad from "../assets/PNG/star_img_fad.png"
import comedy_absolute from "../assets/PNG/comedy_absolute.png"
import CommonBtn from "../component/common/CommonBtn";


const My_reviews = () => {
  return <>
    {/******************** Herosection *************************/}
    <div className="relative mt-[69px]">
      <img className="absolute bottom-[-10%] right-0 xl:block hidden" src={tv_absolute} alt="movie_img" />
      <img className="absolute top-[-8%] left-[20px] xl:block hidden" src={tack_img} alt="img" />
      {/* <img className="absolute top-[-50%] -z-30 left-0 xl:block hidden" src={tv_ellips} alt="ellips" /> */}
      <div className="max-w-[1140px] px-3 mx-auto">
        <div className="flex flex-row flex-wrap md:justify-between justify-center items-center">
          <div className="md:w-6/12 sm:w-10/12 w-12/12 px-3 text-center md:text-start">
            <p className="font_poppins font-bold lg:text-[55px] md:text-[48px] text-[40px] leading-[78px] text-white">
              TV <span className="clr_linear_yellow">Shows</span>
            </p>
            <p className="font-normal text-[16px] leading-[25px] text-[white] font_poppins opacity-70 md:mt-[14px] mt-[8px]">
              Sit volutpat purus semper metus laoreet amet justo suscipit posuere vestibulum eget erat aliquet quam donec donec suspendisse.
            </p>
            <div className="flex sm:w-[343px] w-[275px] justify-between  mx-auto md:mx-0 items-center input_seacrh_border rounded-[127px] mt-[40px]">
              <input
                className="ms-[20px] me-[15px] w-full font-normal text-[14px] leading-[19.88px] font_poppins text-white outline-0 placeholder-white"
                type="text"
                placeholder="Search"
              />
              <span >
                <Search_icon />
              </span>
            </div>
          </div>
          <div className="md:w-6/12 sm:w-10/12 w-12/12 px-3 ">
            <img className="w-full mt-[30px] md:mt-0" src={herosection_movie_img} alt="movie_img" />
          </div>
        </div>
      </div>
    </div>


    {/******************************* Most Popular ***************************/}
    <div className="relative">
      <img className="absolute top-[-15%] right-0 xl:block hidden" src={popular_absolute} alt="img" />
      <div className="max-w-[1140px] px-3  mx-auto lg:mt-[258px] md:mt-[150px] mt-[70px]">
        <p className="font_poppins font-semibold md:text-[40px] text-center text-[30px] leading-[56px] text-white">
          Most <span className="clr_linear_yellow">Popular</span>
        </p>
        <MovieImageSlider movieData={Populat_movie_cards} />
      </div>
    </div>

    {/*******************************  Indian TV Shows *************************************/}
    <div className="relative">
      <img className="absolute bottom-0 right-[27px] xl:block hidden" src={tack_img} alt="img" />
      <img className="absolute top-[-20%] left xl:block hidden" src={tack_img} alt="img" />
      <img className="absolute top-[-13%] right-0 -z-50 xl:block hidden" src={tv_right_ellips} alt="ellips" />
      <img className="absolute top-[-120%] left-0 -z-50" src={ellips} alt="ellips" />
      <div className="max-w-[1140px] px-3  mx-auto lg:mt-[160px] md:mt-[90px] mt-[70px]">
        <p className="font_poppins font-semibold md:text-[40px] text-center text-[30px] leading-[56px] text-white">
          Indian TV <span className="clr_linear_yellow">Shows</span>
        </p>
        <MovieImageSlider movieData={Tv_shows_cards} />
      </div>
    </div>

    {/************************* TV action & Adventure ********************************/}
    <div className="relative">
      <img className="absolute top-[-10%] left-0 xl:block hidden" src={advanture_absolute} alt="img" />
      <img className="absolute top-[-20%] left-0 xl:block hidden" src={ellips} alt="img" />
      <div className="max-w-[1140px] px-3  mx-auto lg:mt-[160px] md:mt-[90px] mt-[70px]">
        <p className="font_poppins font-semibold md:text-[40px] text-center text-[30px] leading-[56px] text-white">
          Indian TV <span className="clr_linear_yellow">Shows</span>
        </p>
        <MovieImageSlider movieData={Advanture_cards} />
      </div>
    </div>

    {/************************* Roobin Hood *********************************/}
    <div className="relative">
      <img className="absolute right-0 top-[-33%] -z-10 hidden xl:block" src={movie_line} alt="movie_line_img" />
      <div className="max-w-[1140px] px-3 mx-auto  lg:mt-[160px] md:mt-[90px] mt-[70px]">

        <div className="flex md:flex-row flex-col-reverse flex-wrap md:mt-[50px]  mt-[30px] relative items-center bg-[#ffffff13] backdrop-filter: blur(273px) rounded-[12px]  lg:p-[30px] p-[20px]">
          <img className="absolute top-[-60%]  right-[-8%] -z-40 hidden xl:block" src={linear_hover} alt="linear_img" />
          <div className="h-[14px] w-[282px] absolute top-0 hidden xl:block right-[46%] background_linear rounded-tr-[12px] rounded-bl-[12px]"></div>
          <img className="absolute top-[6%] right-[43%] hidden xl:block" src={dotted_line} alt="dotted_line" />
          <div className="h-[14px] w-[282px] absolute hidden xl:block bottom-0 right-[0%] background_linear rounded-br-[12px] rounded-tl-[12px]"></div>
          <img className="absolute bottom-[6%] right-[5%] hidden xl:block" src={dotted_line} alt="dotted_line" />
          <div className="lg:w-3/12 md:w-5/12 sm:w-7/12 w-10/12 px-3 mt-[20px] md:mt-[0px]">
            <img className="w-full" src={robin_hood_img} alt="movie_img" />
          </div>
          <div className="lg:w-9/12 md:w-7/12  w-12/12 sm:px-6 ">
            <div className="flex item-center justify-between">
              <p className="font_poppins font-semibold sm:text-[24px] text-[16px] leading-[38.4px] text-white">
                Robin Hood
              </p>

              <span >
                <CommonBtn btnName={'  Join Now'} btnStyling="bg-gradient-to-r from-[#F2CD75] to-[#A97424]  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424] lg:px-[26px] sm:px-[15px] px-[15px] py-[10px] ms-[20px]" />
              </span>
              
              {/* <button className="font_inter font-semibold lg:text-[12px] sm:text-[16px] text-[12px] xl:text-[16px] leading-[22.72px] text-[#FFFFFF] cursor-pointer border border-amber-400 px-[14px] sm:py-[10px] py-[6px] rounded-[4px] bg-gradient-to-r from-[#F2CD75] to-[#A97424]  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424] duration-700">
                Join Now
              </button> */}
            </div>

            <img className="mt-[16px]" src={star_img_fad} alt="star_img" />
            <p className="font_poppins font-normal sm:text-[16px] text-[13px] lg:leading-[27.2px] text-[white] opacity-80 mt-[20px]">
              Vitae congue aliquam malesuada nec malesuada faucibus elit netus. Donec vestibulum velit laoreet ornare fermentum et. Aliquet ut adipiscing volutpat fermentum nisl massa. Cras cras amet nisl id adipiscing vel vitae euismod nunc. Platea tincidunt vulputate etiam massa porta at ipsum maecenas. Convallis sed ac egestas non odio. Mus pellentesque.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/************************** Romance TV Shows ********************************/}
    <div className="relative">
      <img className="absolute top-[-20%] left-[17px] xl:block hidden" src={tack_img} alt="img" />
      <div className="max-w-[1140px] px-3  mx-auto lg:mt-[160px] md:mt-[90px] mt-[70px]">
        <p className="font_poppins font-semibold md:text-[40px] text-center text-[30px] leading-[56px] text-white">
          Romance TV <span className="clr_linear_yellow">Shows</span>
        </p>
        <MovieImageSlider movieData={Romance_TV_Shows_cards} />
      </div>
    </div>


    {/************************** Romance TV Shows ********************************/}
    <div className="relative">
      <img className="absolute top-[-10%] left-0 xl:block hidden" src={comedy_absolute} alt="img" />
      <div className="max-w-[1140px] px-3  mx-auto lg:mt-[160px] md:mt-[90px] mt-[70px]">
        <p className="font_poppins font-semibold md:text-[40px] text-center text-[30px] leading-[56px] text-white">
          TV <span className="clr_linear_yellow">Comedies</span>
        </p>
        <MovieImageSlider movieData={Comedies_cards} />
      </div>
    </div>
  </>;
};

export default My_reviews;
