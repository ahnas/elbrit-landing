import React from 'react'
import Image from 'next/image'
import f1 from '../assets/image/f1.png'
import f2 from '../assets/image/f2.png'
import f3 from '../assets/image/f3.png'
import logo from '../assets/image/logo.png'
import location from '../assets/image/location.png'



const Card = ({ icon, title, value }) => {
    return (
        <div className='bg-[#215D72] flex flex-row rounded-[15px] px-[50px] py-[20px] '>
            <Image src={icon} alt="banner" loading="lazy" placeholder='blur'/>
            <div className='ml-[30px]'>
                <h5 className='text-[20px]'>{title}</h5>
                <a className='text-[20px] font-medium hover:underline' href="#">{value}</a>
            </div>
        </div>
    )
}
const Footer = () => {
    return (
        <div className='bg-[#17414F] text-[#fff]  p-[25px]'>
            <div className='gap-[25px] flex flex-row flex-wrap place-content-center mb-[35px]'>
                <Card icon={f1} title="Phone Number" value="+974 3118 1843" />
                <Card icon={f2} title="Email Address" value="Elbrithcqhr@gmail.com" />
                <Card icon={f3} title='Office Location' value='Ambassador Street, Zone 61,' />
            </div>
            <div className="flex flex-col lg:flex-row sm:gap-[20px] lg:gap-[120px] items-center lg:items-start p-[20px] lg:ml-[4%] sm:ml-[0%]">
                <Image
                    src={logo}
                    alt="banner"
                    className="bg-[#fff] p-[15px]"
                    width={300}
                    loading="lazy"
                    placeholder='blur'
                />

                <p className="text-[16px] leading-[26px] text-center lg:text-left max-w-[416px]">
                    Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row sm:gap-[20px] lg:gap-[10px] items-center lg:items-start p-[20px] lg:ml-[4%] sm:ml-[0%]">
                <Image src={location} alt="location" loading="lazy" placeholder='blur'/>
                <p className="text-[16px] leading-[24px] text-center lg:text-left">
                    Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
                </p>
            </div>
        </div>
    )
}

export default Footer