import React from "react";

const CommonBtn = ({ btnName, btnStyling }) => {
    return <>
        <button
            className={` font_poppins  font-semibold text-[14px] leading-[22px] text-[white]  cursor-pointer border border-amber-400  rounded-[4px] duration-700  ${btnStyling}`} >
            {btnName}
        </button>
    </>;
};

export default CommonBtn;
