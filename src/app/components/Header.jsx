import React from 'react'
import Image from 'next/image';
import logo from '../assets/image/logo.png'

const Header = () => {
    return (
        <div className="pt-2.5 pb-2.5 pl-[15%]">
            <Image className='h-[64px]' src={logo} alt="logo" width={313} loading="lazy" placeholder='blur'/>
        </div>
    )
}

export default Header