import React from 'react';
import logo from '../assets/logo.jpg';
import fbImg from '../assets/fbImg.png';
import igImg from '../assets/igImg.png';
import twitterImg from '../assets/twitterImg.png';
import liImg from '../assets/liImg.png';

const Footer = () => {
    return (
        <div className='bg-[#010851] text-white md:px-14 p-4 max-w-screen-2xl mx-auto'>
            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 space-y-8'>
                    <a href='/' className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} className='w-10 inline-block items-center' /> <span>XYZ</span>
                    </a>
                    <p className='md:w-1/2'>A simple paragraph is comprised of three major components. The First sentence, which is often a declairative sentence.</p>
                    <div>
                        <input type='email' placeholder='Your Email' className='bg-[#9A7AF159] py-2 px-4 rounded-md focus:outline-none' />
                        <input type='submit' value='Subscribe' className='bg-secondary px-4 py-2 rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300' />
                    </div>
                </div>
                {/* footer navigations */}
                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className='space-y-3'>
                            <a href='/' className='block hover:text-gray-300'>Overview</a>
                            <a href='/' className='block hover:text-gray-300'>Features</a>
                            <a href='/' className='block hover:text-gray-300'>About</a>
                            <a href='/' className='block hover:text-gray-300'>Pricing</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3'>
                            <a href='/' className='block hover:text-gray-300'>How does it works</a>
                            <a href='/' className='block hover:text-gray-300'>Where to ask question?</a>
                            <a href='/' className='block hover:text-gray-300'>How to play?</a>
                            <a href='/' className='block hover:text-gray-300'>What is needed for this?</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-3'>
                            <p className='hover:text-gray-300'>(123) 1234-567-890</p>
                            <p className='hover:text-gray-300'>123 xyz xyz</p>
                            <p className='hover:text-gray-300'>qwewerwe, erg - eryfdv</p>
                            <p className='hover:text-gray-300'>095467</p>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>
                <div className='flex items-center space-x-5'>
                    <img src={fbImg} className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    <img src={igImg} className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    <img src={twitterImg} className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    <img src={liImg} className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                </div>
            </div>
        </div>
    )
}

export default Footer