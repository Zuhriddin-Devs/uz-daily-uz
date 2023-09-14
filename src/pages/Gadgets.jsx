import React from 'react';
import data from '../assets/data';
import { Link } from 'react-router-dom';

const Gadgets = () => {
    return (
        <div className='w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5'>
            <div className='mb-7 space-y-5 sm:w-150% sm:mb-0'>
                <h3 className='text-3xl font-medium text-black'>
                    Gadgets
                </h3>
                <p>
                    <span className='block text-lg font-normal text-black mb-5'>
                        Uzdaily axborot resurslarining rasmiy yangiliklar dasturi. Yangiliklar tasmasi muntazam ravishda yangilanib boriladi.
                    </span>
                    <span className='block text-base font-normal text-black mb-20'>
                        <Link to='http://uzdaily.uz/apps/app-release-rus.apk' download>
                            Android qurilmalari uchun rus tilidagi dasturi
                        </Link>
                    </span>
                    <span className='block text-base font-normal text-black'>
                        <Link to='http://uzdaily.uz/apps/app-release-eng.apk' download>
                            Android qurilmalari uchun ingliz tilidagi dasturi
                        </Link>
                    </span>
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

export default Gadgets;
