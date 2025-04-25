import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import WatchListCard, { DashboardCards, MovieCards } from './common/WatchListCard'
import { featured_cards, video_cards, Viewed_cards } from './common/Helper'
import { SliderArrow, Videos_icons } from './common/Icons'
// import feature_img1 from "../assets/PNG/featured_img1.png"

export const VideosSlider = () => {
    const [activeArrow, setActiveArrow] = useState("");
    const sliderRef = useRef(null)
    console.log(sliderRef);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (

        <>
            <div className='relative'>
                <div >
                    <span
                        onClick={() => {
                            sliderRef.current.slickPrev();
                            setActiveArrow("left");
                        }}
                        className={`sm:w-[38px]  sm:h-[38px] h-[30px] w-[30px] absolute z-20 xl:top-[50%] xl:left-[-7%] sm:top-0  sm:right-[80px] top-[10px] right-[60px]  flex items-center cursor-pointer justify-center border  border-amber-200 rounded-full -scale-105 ${activeArrow === "left" ? "bg-gradient-to-r from-[#F2CD75] to-[#A97424] text-white" : ""}`}
                    >
                        <SliderArrow />
                    </span>
                    <span
                        onClick={() => {
                            sliderRef.current.slickNext();
                            setActiveArrow("right");
                        }}
                        className={`sm:w-[38px]  sm:h-[38px] h-[30px] w-[30px] z-20 flex items-center  absolute xl:top-[50%] xl:right-[-7%] sm:top-0  sm:right-0 top-[10px] right-[15px] cursor-pointer justify-center border border-amber-200 rounded-full ${activeArrow === "right" ? "bg-gradient-to-r from-[#F2CD75] to-[#A97424] text-white" : ""
                            }`}
                    >
                        <SliderArrow />
                    </span>
                </div>


                <Slider ref={sliderRef} {...settings} >
                    {video_cards.map((card, i) => (
                        <div key={i} className="px-2.5 mt-[50px] ">
                            <div className='px-2.5 border border-amber-50/25  pb-[18px]  rounded-[12px] pt-[10px]'>
                                <div className='relative'>
                                    <img className="w-full" src={card.img} alt="movie_img" />
                                    <span className='cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                        <Videos_icons />
                                    </span>
                                </div>

                                <h1 className="text-[white] font_poppins leading-[25px] font-semibold  text-[16px] lg:text-[20px] mt-[16px]">{card.heading}</h1>
                                <p className="text-[white] font-normal leading-[22px] mt-[4px] opacity-[70%]  text-[14px] lg:text-[16px] font_poppins ">{card.peragraph}</p>
                                <div className='mt-[8px]'><img src={card.img2} alt="star img" /></div>
                            </div>

                        </div>
                    ))}
                </Slider>

            </div>
        </>
    )
}



const SliderReact = ({ mapData }) => {
    const [activeArrow, setActiveArrow] = useState("");
    const sliderRef = useRef(null)
    console.log(sliderRef);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className='relative'>
            <div >
                <span
                    onClick={() => {
                        sliderRef.current.slickPrev();
                        setActiveArrow("left");
                    }}
                    className={`sm:w-[38px]  sm:h-[38px] h-[30px] w-[30px] absolute z-20 xl:top-[50%] xl:left-[-7%] sm:top-0  sm:right-[80px] top-[10px] right-[60px]  flex items-center cursor-pointer justify-center border  border-amber-200 rounded-full -scale-105 ${activeArrow === "left" ? "bg-gradient-to-r from-[#F2CD75] to-[#A97424] text-white" : ""}`}
                >
                    <SliderArrow />
                </span>
                <span
                    onClick={() => {
                        sliderRef.current.slickNext();
                        setActiveArrow("right");
                    }}
                    className={`sm:w-[38px]  sm:h-[38px] h-[30px] w-[30px] z-20 flex items-center  absolute xl:top-[50%] xl:right-[-7%] sm:top-0  sm:right-0 top-[10px] right-[15px] cursor-pointer justify-center border border-amber-200 rounded-full ${activeArrow === "right" ? "bg-gradient-to-r from-[#F2CD75] to-[#A97424] text-white" : ""
                        }`}
                >
                    <SliderArrow />
                </span>
            </div>

            <Slider ref={sliderRef} {...settings}>
                {mapData.map((card, i) => (
                    <WatchListCard card={card} key={i} />
                ))}
            </Slider>
        </div>
    )
}
export default SliderReact



export const FeaturedToday = () => {
    // const sliderRef = useRef(null)
    // console.log(sliderRef);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2.7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div>
                <Slider  {...settings}>
                    {featured_cards.map((card, i) => (
                        <div key={i} className="px-2  mt-[30px] lg:mt-0 relative">
                            <div className=" px-2 border border-amber-50/25   rounded-[12px] pt-[8px]">
                                <img className='w-full' src={card.img} alt="img" />
                                <div className='absolute bottom-[26px]'>
                                    <h1 className="text-[white] font_poppins leading-[25px] font-semibold text-[12px]  sm:text-[16px]">{card.heading}</h1>
                                    <p className="text-[white] lg:mt-[6px] mt-[2px] font-normal leading-[22px] opacity-[70%] text-[12px]  sm:text-[14px] font_poppins ">{card.peragraph}</p>
                                    <img className=" lg:mt-[12px]  mt-[4px]" src={card.img2} alt="star img" />
                                </div>
                            </div>

                        </div >

                    ))}
                </Slider>
            </div>
        </>
    )
}


export const ViewedRecently = () => {
    const sliderRef = useRef(null)
    console.log(sliderRef);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className='relative'>
            <div >
                <span onClick={() => sliderRef.current.slickPrev()
                } className='w-[38px] absolute z-20  xl:top-[50%] xl:left-[-7%] top-0 sm:right-[150px] right-[80px] h-[38px] flex items-center cursor-pointer justify-center border linear_hover border-amber-200 rounded-full -scale-105 '>
                    <SliderArrow />
                </span>
                <span onClick={() => sliderRef.current.slickNext()
                } className='w-10 h-10 z-20 flex items-center  linear_hover absolute xl:top-[50%] xl:right-[-7%] top-0 sm:right-[80px] right-[20px] cursor-pointer justify-center border border-amber-200 rounded-full'>
                    <SliderArrow />
                </span>
            </div>

            <Slider ref={sliderRef} {...settings}>
                {Viewed_cards.map((card, i) => (
                    <div key={i} className="px-2 relative mt-[50px] ">
                        <div className=" px-2 border border-amber-50/25   rounded-[12px] pt-[8px]">
                            <img className="w-full" src={card.img} alt="movie_img" />
                            <div className="absolute bottom-[10px]">
                                <h1 className="text-[white] font_poppins leading-[25px] font-semibold  text-[16px]">{card.heading}</h1>
                            </div>
                        </div>
                    </div >
                ))}
            </Slider>
        </div>
    )
}


export const MovieImageSlider = ({ movieData }) => {
    const [activeArrow, setActiveArrow] = useState("");
    const sliderRef = useRef(null)
    console.log(sliderRef);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }
    return (
        <div className='relative'>
            <div >
                <span
                    onClick={() => {
                        sliderRef.current.slickPrev();
                        setActiveArrow("left");
                    }}
                    className={`sm:w-[38px]  sm:h-[38px] h-[30px] w-[30px] absolute z-20 xl:top-[50%] xl:left-[-7%] sm:top-0  sm:right-[80px] top-[10px] right-[60px]  flex items-center cursor-pointer justify-center border  border-amber-200 rounded-full -scale-105 ${activeArrow === "left" ? "bg-gradient-to-r from-[#F2CD75] to-[#A97424] text-white" : ""}`}
                >
                    <SliderArrow />
                </span>
                <span
                    onClick={() => {
                        sliderRef.current.slickNext();
                        setActiveArrow("right");
                    }}
                    className={`sm:w-[38px]  sm:h-[38px] h-[30px] w-[30px] z-20 flex items-center  absolute xl:top-[50%] xl:right-[-7%] sm:top-0  sm:right-0 top-[10px] right-[15px] cursor-pointer justify-center border border-amber-200 rounded-full ${activeArrow === "right" ? "bg-gradient-to-r from-[#F2CD75] to-[#A97424] text-white" : ""
                        }`}
                >
                    <SliderArrow />
                </span>
            </div>

            <Slider ref={sliderRef} {...settings}>
                {movieData.map((card, i) => (
                    <MovieCards card={card} key={i} />
                ))}
            </Slider>
        </div>
    )
}

//================ya code  library k herosection k slider ka hai  jo slider bnya tha vo============
// export const All_images = () => {
//     // const sliderRef = useRef(null)
//     // console.log(sliderRef);
//     var settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         // initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1250,
//                 settings: {
//                     slidesToShow: 2.7,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 1070,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     // initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 1023,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 700,
//                 settings: {
//                     slidesToShow: 1.7,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 400,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     }
//     return (
//         <>
//             <div>
//                 <Slider  {...settings}>
//                     {Customer_Review_cards.map((card, i) => (
//                         <div className='flex flex-row flex-wrap'>
//                             <div className="lg:w-12/12 px-2 ">
//                                 <img className='w-full' src={card.img} alt="movie_img" />
//                                 <img className="mt-[20px]" src={card.img} alt="movie_img" />
//                                 <img className="mt-[20px]" src={card.img} alt="movie_img" />
//                             </div>
//                             <div className="lg:w-3/12 px-2 ">
//                                 <img src={card.img} alt="movie_img" />
//                                 <img className="mt-[20px]" src={card.img} alt="movie_img" />
//                                 <img className="mt-[20px]" src={card.img} alt="movie_img" />
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </>
//     )
// }


export const DashboardSlider = ({ ProfileDashboard }) => {
    const [activeArrow, setActiveArrow] = useState("");
    const sliderRef = useRef(null)
    console.log(sliderRef);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    // autoplay: true,
                    // autoplaySpeed: 500,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    // initialSlide: 2
                    // autoplay: true,
                    // autoplaySpeed: 500,
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                    dots: true,
                    // initialSlide: 2
                    // autoplay: true,
                    // autoplaySpeed: 500,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    // autoplay: true,
                    // autoplaySpeed: 500,
                }
            }
        ]
    }
    return (
        <div className='relative'>
            <div className='xl:block hidden'>
                <span
                    onClick={() => {
                        sliderRef.current.slickPrev();
                        setActiveArrow("left");
                    }}
                    className={`sm:w-[38px]  sm:h-[38px]  h-[30px] w-[30px] absolute z-20 top-[-14%] right-[7%] flex items-center cursor-pointer justify-center border  border-amber-200 rounded-full -scale-105 ${activeArrow === "left" ? "bg-gradient-to-r from-[#F2CD75] to-[#A97424] text-white" : ""}`}
                >
                    <SliderArrow />
                </span>
                <span
                    onClick={() => {
                        sliderRef.current.slickNext();
                        setActiveArrow("right");
                    }}
                    className={`sm:w-[38px]  sm:h-[38px] h-[30px] w-[30px] z-20 top-[-14%] right-[1%] flex items-center  absolute  cursor-pointer justify-center border border-amber-200 rounded-full ${activeArrow === "right" ? "bg-gradient-to-r from-[#F2CD75] to-[#A97424] text-white" : ""
                        }`}
                >
                    <SliderArrow />
                </span>
            </div>

            <Slider ref={sliderRef} {...settings}>
                {ProfileDashboard.map((card, i) => (
                    <DashboardCards card={card} key={i} />
                ))}
            </Slider>
        </div>
    )
}







