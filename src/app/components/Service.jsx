import React from "react";
import Image from "next/image";
import clinic from "../assets/image/clinically.png";
import vege from "../assets/image/vege.png";
import made from "../assets/image/made.png";
import free from "../assets/image/free.png";
import risk from "../assets/image/risk.png";
import gm from "../assets/image/gm.png";


const ServiceItem = ({ image, title, description }) => {
    return (
        <div className="rounded-[40px] sm:rounded-[80px] w-full max-w-[322px] mx-auto text-center grid place-items-center p-[20px] sm:p-[25px]">
            <Image
                className="rounded-full w-[100px] sm:w-[130px] h-[100px] sm:h-[130px]"
                src={image}
                alt="banner"
                width={130}
                height={130}
                loading="lazy"
            />
            <h4 className="text-white text-[20px] sm:text-[26px] my-[10px] font-medium">
                {title}
            </h4>
            <p className="text-[#D9D9D9] text-[14px] sm:text-[16px] font-regular">
                {description}
            </p>
        </div>
    );
};

const Service = () => {
    return (
        <div className="bg-[#17414F] mx-[8%] rounded-[80px] relative top-[-150px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-[50px] relative top-[-95px]">
                <ServiceItem image={clinic} title="Clinically Studied" description="All products that we offer have undergone lab and safety tests" />
                <ServiceItem image={vege} title="Vegetarian Friendly" description="We have a wide selection of vegetarian products to meet your needs" />
                <ServiceItem image={made} title="Made in India" description="Shop local and explore health products made right here in India" />
                <ServiceItem image={free} title="Free Shipping" description="We deliver to your door with no shipping costs on your orders" />
                <ServiceItem image={risk} title="No Risk" description="We ensure that all products are safe and within their use-by date" />
                <ServiceItem image={gm} title="GMO free" description="Natural, no modified products and derivatives for those who need it" />
            </div>
        </div>
    );
};

export default Service;
