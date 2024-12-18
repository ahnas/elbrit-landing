import React from 'react';
import Image from 'next/image';
import banner from '../assets/image/banner.png'
import vitamin from '../assets/image/vitamin.png'
import weightLoss from '../assets/image/weightLoss.png'
import fucntionalFoods from '../assets/image/fucntionalFoods.png'



const SideContent = ({ image, title, description }) => {
    return (
        <div className="w-full sm:w-[300px] mb-[35px]">
            <div className="flex flex-col sm:flex-row items-start">
                <Image
                    className="h-[60px] sm:h-[75px] sm:float-left sm:mr-[20px]"
                    src={image}
                    alt="banner"
                    width={75}
                    height={75}
                />
                <div className="mt-2 sm:mt-0">
                    <h3 className="text-[#17414F] text-[20px] sm:text-[26px] font-semibold">
                        {title}
                    </h3>
                    <p className="font-roboto text-[#727272] text-[12px] sm:text-[14px] ml-0 leading-[18px] sm:leading-[20px]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Banner = () => {
    return (
        <div className="bg-[#E2F5FB] mx-[32px] sm:mx-[16px] md:mx-[24px] lg:mx-[32px] pb-[130px] sm:pb-[150px] md:pb-[180px] lg:pb-[200px]">
            <h1 className="font-bold text-[40px] sm:text-[50px] md:text-[80px] lg:text-[155px] text-[#003569] text-center pt-[20px] sm:pt-[30px] md:pt-[50px] lg:pt-[65px]">
                Essential Vitamins
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-8 lg:px-16 gap-8">
                <div className="w-full lg:w-[270px] text-center lg:text-left">
                    <p className="text-[#727272] text-[18px] sm:text-[22px] lg:text-[25px] mb-4">
                        Online Medical Supplies
                    </p>
                    <h3 className="text-[#17414F] text-[24px] sm:text-[28px] lg:text-[34px] font-medium leading-[30px] sm:leading-[36px] lg:leading-[40px] mb-4">
                        Get Your Vitamins & Minerals
                    </h3>
                    <button className="bg-[#17414F] w-full sm:w-[200px] lg:w-[189.14px] h-[48px] sm:h-[56px] rounded-[30px] text-white text-[14px] sm:text-[16px] font-[600]">
                        EXPLORE
                    </button>
                </div>
                <div className="relative w-full max-w-[393px] h-[300px] sm:h-[391px] bg-[#FFE9B5] rounded-tl-[100px] sm:rounded-tl-[130px] rounded-br-[100px] sm:rounded-br-[130px] mx-auto">
                    <Image
                        className="absolute top-[-60px] sm:top-[-100px] mx-auto"
                        src={banner}
                        alt="banner"
                        width={434}
                        height={462}
                    />
                </div>
                <div className="w-full lg:w-auto place-self-end">
                    <SideContent
                        image={vitamin}
                        title={"Vitamins"}
                        description={"Increased Vitamins and minerals in your diet"}
                    />
                    <SideContent
                        image={weightLoss}
                        title={"Weight Loss"}
                        description={"Weight Loss Find scientifically proven solutions"}
                    />
                    <SideContent
                        image={fucntionalFoods}
                        title={"Functional Foods"}
                        description={"Functional Foods From protein powders to baby formula"}
                    />
                </div>
            </div>
            <div className="flex gap-4 mt-[40px] sm:mt-[60px] justify-center sm:justify-start ml-0 sm:ml-[20%]">
                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-[#a6b8cb] rounded-full"></div>
                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-[#a6b8cb] rounded-full"></div>
            </div>
        </div>
    );
};

export default Banner;