import React from 'react';
import data from '../assets/data';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5'>
            <div className='mb-7 space-y-5 sm:w-150% sm:mb-0'>
                <h3 className='text-3xl font-medium text-black'>
                    About Us
                </h3>
                <p className='text-lg font-normal text-gray-800'>
                    <strong className='text-base font-bold text-black'>Uzbekistan Daily (UzDaily.com)</strong> provides essential business news and information on Uzbekistan and some feeds on other Central Asian states.
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    UzDaily.com unites professionals, who have extended experience work in Uzbek media, including in Internet media.
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    Uzbekistan Press and Information Agency registered Uzbekistan Daily as Internet media outlet and issued Registration Certificate No. 0601 from 28 October 2009.
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    For further information please feel free to contact us at:
                </p>
                <p className='text-lg font-normal text-gray-80'>
                    <strong className='text-base font-bold text-black'>
                        Private Enterprise â€œDAILY MEDIAâ€
                    </strong>
                    <br />
                    <strong className='text-base font-bold text-black mr-2'>
                        Address:
                    </strong>
                    Yunusabad 12-27-73
                    <br />
                    Tashkent, 100180, Uzbekistan
                    <br />
                    <strong className='text-base font-bold text-black mr-2'>
                        Tel:
                    </strong>
                    +998 90 938 83 38
                    <br />
                    <strong className='text-base font-bold text-black mr-2'>
                        Email:
                    </strong>
                    <Link to='/'>info@uzdaily.com</Link>
                </p>
            </div>
            <div className='w-auto'>
                <div className='mb-5'>
                    <h3 className='text-black text-2xl font-medium text-center sm:text-start'>
                        So'nggi yangiliklar
                    </h3>
                </div>
                <div>
                    <ul className='grid grid-cols-1 gap-y-4'>
                        {data().slice(0, 3).map((news) => (
                            <li key={news.id} className='bg-white grid lg:grid-cols-2 gap-6 shadow-lg rounded-md p-5'>
                                <div>
                                    <img className='w-full h-full rounded-md' src={news.image} alt={news.alt} />
                                </div>
                                <div className='flex flex-col justify-evenly space-y-7'>
                                    <h2 className="text-black text-lg font-medium mb-3 lg:mb-0">{news.title}</h2>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-black text-base font-medium">{news.date}</p>
                                        <Link to="#" className="text-black text-base font-medium">{news.detail}</Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
