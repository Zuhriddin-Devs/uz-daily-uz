import React from 'react';
import data from '../assets/data';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Madaniyat = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5">
            <div className='mb-7 sm:w-180% sm:mb-0'>
                <div className='mb-8'>
                    <h3 className='text-black text-2xl font-medium text-center border-b-2 border-red-500 pb-5 sm:text-start'>
                        {t('madaniyat')}
                    </h3>
                </div>
                <div>
                    <ul className='grid grid-cols-1 gap-y-7'>
                        {data().slice(40, 50).map((news) => (
                            <li key={news.id} className='bg-white grid lg:grid-cols-2 gap-6 shadow-lg rounded-md p-4'>
                                <div>
                                    <img className='w-full h-full rounded-md' src={news.image} alt={news.alt} />
                                </div>
                                <div className='flex flex-col justify-evenly space-y-6 lg:space-y-4'>
                                    <h3 className="text-black text-lg font-medium">{t(news.title)}</h3>
                                    <p className="text-gray-600 text-sm font-normal">{t(news.description)}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-black text-base font-medium">{news.date}</p>
                                        <Link to={`/Uzbekistan/${news.id}`} className="text-black text-base font-medium">{t(news.detail)}</Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='w-auto'>
                <div className='mb-5'>
                    <h3 className='text-black text-2xl font-medium text-center sm:text-start'>
                        {t('latest_news')}
                    </h3>
                </div>
                <div>
                    <ul className='grid grid-cols-1 gap-y-4'>
                        {data().slice(0, 3).map((news) => (
                            <li key={news.id} className='bg-white grid lg:grid-cols-2 gap-6 shadow-lg rounded-md p-4'>
                                <div>
                                    <img className='w-full h-full rounded-md' src={news.image} alt={news.alt} />
                                </div>
                                <div className='flex flex-col justify-evenly space-y-7'>
                                    <h3 className="text-black text-sm font-medium">{t(news.title)}</h3>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-black text-xs font-medium">{news.date}</p>
                                        <Link to={`/Uzbekistan/${news.id}`} className="text-black text-xs font-medium">{t(news.detail)}</Link>
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

export default Madaniyat;
