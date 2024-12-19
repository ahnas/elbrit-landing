import React from 'react';
import Image from 'next/image';
import item1 from '../assets/image/h2-b1.jpg.png';
import item2 from '../assets/image/bn2-2.jpg.png';
import item3 from '../assets/image/bn2-3.jpg.png';
import item4 from '../assets/image/bn2-4.jpg.png';
import item5 from '../assets/image/bn2-5.jpg.png';
import item6 from '../assets/image/last.jpg';


const Item = ({ image, title, description }) => {
  return (
    <div
      className="w-[411px] h-[266px] rounded-[20px] py-[30px] px-[40px] flex flex-col"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <h4 className="text-[#2D3F59] text-[26px] font-semibold">{title}</h4>
      <p className="text-[#727272] text-[20px] font-medium pt-[10px]">{description}</p>
      <a
        href=""
        className="text-[#003569] text-[16px] font-semibold mt-auto pointer hover:underline"
      >
        SEE MORE
      </a>
    </div>
  );
};


const Ingredient = () => {
  return (
    <>
      <div className="mx-[8%] flex flex-col lg:flex-row justify-between gap-[20px] mb-[30px]">
        <div className='w-full lg:w-[530px]'>
          <h4 className="text-[#003569] text-[16px] font-semibold mb-[5px]">INGREDIENTS</h4>
          <h3 className='text-[#17414F] text-[48px] font-semibold mb-[20px]'>Better Ingredients</h3>
          <p className='text-[#727272] text-[16px]'>Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </p>
        </div>
        <Item image={item1} title="Vitamin C" description="Vitamin C as ascorbic acid" />
        <Item image={item2} title="Vitamin B3" description="Niacin for healthy gut and skin" />
      </div>


      <div className="mx-[8%] flex flex-col lg:flex-row justify-between gap-[20px]">
        <Item image={item3} title="Magnesium" description="Boost energy and support muscle function" />
        <Item image={item4} title="Hyaluronic Acid" description="For smooth, supple and soft skin!" />
        <Item image={item5} title="Lactobacillus" description="Invigorate your gut microbiome" />

        <Image src={item6} alt="banner" className='w-[100px] h-[266px]' loading="lazy" placeholder='blur'/>

      </div>
    </>
  )
}

export default Ingredient