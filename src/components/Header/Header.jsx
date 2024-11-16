import React from 'react';

const Header = ({title,subTitle}) => {
    return (
        <div className='flex flex-col justify-center items-center w-[50%] mx-auto mt-12 md:mt-16'>
            <h1 className='text-4xl font-semibold mb-5'>{title}</h1>
            <p className='text-gray-600 text-center'>{subTitle}</p>
        </div>
    );
};

export default Header;