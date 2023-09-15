import React from 'react';
import data from '../assets/data';
import { Link } from 'react-router-dom';

const Advertisement = () => {
    return (
        <div className='w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5'>
            <div className='mb-7 sm:w-180% sm:mb-0'>
                <h3 className='text-3xl font-medium text-black mb-5'>
                    Advertisement
                </h3>
                <p className='text-lg font-normal text-gray-800'>
                    This page is under development. Please contact us at (+998 90) 915 10 34 with any questions.
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
                                    <h2 className="text-black text-sm font-medium">{news.title}</h2>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-black text-sm font-medium">{news.date}</p>
                                        <Link to="#" className="text-black text-sm font-medium">{news.detail}</Link>
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

export default Advertisement;
