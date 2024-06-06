import React from 'react';
import Banner from '../shared/Banner';
import BannerImg from '../assets/banner05.png';

const Newsletter = () => {
    return (
        <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>
            {/* use our banner component and pass props */}
            <Banner banner={BannerImg} heading="Each student can share their discount code for frineds." subheading='A simple paragraph is comprised of three major components. The first sentence, which is often a declarative, is called the "Topic sentence."' btn1={"I have a code"} btn2={""} />
        </div>
    );
};

export default Newsletter