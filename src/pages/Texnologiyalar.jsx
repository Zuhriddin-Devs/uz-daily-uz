import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const Texnologiyalar = () => {
    return (
        <div className="w-full max-w-7xl mx-auto grid sm:grid-cols-2 gap-x-10 gap-y-16 px-5">
            <div>
                <div className='mb-10'>
                    <h1 className='text-black text-3xl font-medium text-center border-b-2 border-red-500 pb-5'>
                        Texnologiyalar
                    </h1>
                </div>
                <div>
                    <ul className='grid grid-cols-1 gap-y-7'>
                        {data().slice(30, 40).map((news) => (
                            <li key={news.id} className='bg-white grid lg:grid-cols-2 gap-6 shadow-lg rounded-md p-5'>
                                <div>
                                    <img className='w-full h-full rounded-md' src={news.image} alt={news.alt} />
                                </div>
                                <div className='space-y-5'>
                                    <h2 className="text-black text-lg font-medium">{news.title}</h2>
                                    <p className="text-gray-600 text-sm font-normal">{news.about}</p>
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
            <div>
                <div className='mb-10'>
                    <h1 className='text-black text-3xl font-medium text-center border-b-2 border-red-500 pb-5'>
                        So'nggi yangiliklar
                    </h1>
                </div>
                <div>
                    <ul className='grid grid-cols-1 gap-y-7'>
                        {data().slice(0, 3).map((news) => (
                            <li key={news.id} className='bg-white grid lg:grid-cols-2 gap-6 shadow-lg rounded-md p-5'>
                                <div>
                                    <img className='w-full h-full rounded-md' src={news.image} alt={news.alt} />
                                </div>
                                <div className='space-y-5'>
                                    <h2 className="text-black text-lg font-medium">{news.title}</h2>
                                    <p className="text-gray-600 text-sm font-normal">{news.about}</p>
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

export default Texnologiyalar;
