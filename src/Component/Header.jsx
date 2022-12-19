import React from "react";

const Header = () => {
  return (
    <div className='h-[257px] md:h-[550px] bg-slate-400 bg-[url("image/background.png")] bg-no-repeat bg-cover flex items-center justify-center lg:justify-start'>
        <div className="w-[253px] h-[72px] md:h-[282px] md:w-[490px]  lg:ml-[77px]">
            <p className="text-[28px] md:text-[72px] text-white font-dmsans text-center lg:text-start">Watch Something Incredible.</p>
        </div>
    </div>
  );
};

export default Header;
