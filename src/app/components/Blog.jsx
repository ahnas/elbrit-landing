import React from 'react'
import item1 from '../assets/image/b1.png'
import item2 from '../assets/image/b2.png'



const Card = ({ image, imageS, date, dateS, title, height, heightS }) => {
    return (
        <div className='flex flex-col gap-[30px]'>
            <div
                className='w-[310px] h-[502px] rounded-[20px] relative bg-center bg-cover'
                style={{ backgroundImage: `url(${image.src})`, height: `${height}px` }}
            >
                <h3 className='rounded-e-[30px] bg-[#003569] text-[#fff] text-[16px] font-medium absolute top-[20px] left-[-10px] px-[35px] py-[10px]'>{date}</h3>
                <p className='text-[#fff] text-[20px] font-bold absolute top-[75px] left-[35px] text-left'>The Covid-19 Epidemic In 2022 Is Back</p>
            </div>
            <div
                className='w-[310px] h-[502px] rounded-[20px] relative bg-center bg-cover'
                style={{ backgroundImage: `url(${imageS.src})`, height: `${heightS}px` }}
            >
                {dateS && <h3 className='rounded-e-[30px] bg-[#003569] text-[#fff] text-[16px] font-medium absolute top-[20px] left-[-10px] px-[35px] py-[10px]'>{dateS}</h3>}
                <p className='text-[#fff] text-[20px] font-bold absolute top-[75px] left-[35px] text-left'>{title}</p>
            </div>

        </div>

    );
};
const Blog = () => {

    return (
        <div className='text-center p-[30px]'>
            <h1 className='text-[#003569] text-[16px] font-semibold mb-[5px]'>OUR BLOG</h1>
            <h3 className='text-[#17414F] text-[48px] font-semibold mb-[20px]'>Latest News</h3>

            <div className='flex justify-center gap-[30px] flex-wrap '>
                <Card
                    image={item1}
                    date="20 APR"
                    title="The Covid-19 Epidemic In 2023 Is Back"
                    height='502'
                    imageS={item2}
                    heightS='226'
                    dateS="20 APR"
                />
                <Card
                    image={item1}
                    date="20 APR"
                    title="The Covid-19 Epidemic In 2023 Is Back"
                    height='226'
                    imageS={item2}
                    heightS='506'
                />
                <Card
                    image={item1}
                    date="20 APR"
                    title="The Covid-19 Epidemic In 2023 Is Back"
                    height='502'
                    imageS={item2}
                    heightS='226'
                    dateS="20 APR"
                />
                <Card
                    image={item1}
                    date="20 APR"
                    title="Hac hendrerit mus nons semper suspendisse"
                    height='226'
                    imageS={item2}
                    heightS='506'
                    dateS="17 MAR"
                />
            </div>


        </div>
    )
}

export default Blog