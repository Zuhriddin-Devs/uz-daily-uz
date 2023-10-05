import React from 'react';
import data from '../assets/data';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Texnologiyalar = () => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('selectedLanguage') || 'uz'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }, [selectedLanguage]);

    const changeLanguage = (languageCode) => {
        setSelectedLanguage(languageCode);
    };

    return (
        <div className="w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5">
            <div className='mb-7 sm:w-180% sm:mb-0'>
                <div className='mb-8'>
                    <h3 className='text-black text-2xl font-medium text-center border-b-2 border-red-500 pb-5 sm:text-start'>
                        {t('texnologiyalar')}
                    </h3>
                </div>
                <div>
                    <ul className='grid grid-cols-1 gap-y-7'>
                        {data().slice(30, 40).map((news) => (
                            <li key={news.id} className='bg-white shadow-lg rounded-md'>
                                <Link to={`/Texnologiyalar/${news.id}`}>
                                    <div className='grid lg:grid-cols-2 gap-6 p-4'>
                                        <div>
                                            <img className='w-full h-full rounded-md' src={news.image} alt={news.alt} />
                                        </div>
                                        <div className='flex flex-col justify-evenly space-y-6 lg:space-y-4'>
                                            <h3 className="text-black text-lg font-medium">{t(news.title)}</h3>
                                            <p className="text-gray-600 text-sm font-normal">{t(news.description)}</p>
                                            <div className='flex justify-between items-center'>
                                                <p className="text-black text-base font-medium">{news.date}</p>
                                                <p className="text-black text-base font-medium">{t(news.detail)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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
                            <li key={news.id} className='bg-white shadow-lg rounded-md'>
                                <Link to={`/Uzbekistan/${news.id}`}>
                                    <div className='grid lg:grid-cols-2 gap-6 p-4'>
                                        <div>
                                            <img className='w-full h-full rounded-md' src={news.image} alt={news.alt} />
                                        </div>
                                        <div className='flex flex-col justify-evenly space-y-7'>
                                            <h3 className="text-black text-sm font-medium">{t(news.title)}</h3>
                                            <div className='flex justify-between items-center'>
                                                <p className="text-black text-xs font-medium">{news.date}</p>
                                                <p className="text-black text-xs font-medium">{t(news.detail)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Texnologiyalar;
