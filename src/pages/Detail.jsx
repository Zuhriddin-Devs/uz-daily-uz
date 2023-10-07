import React from 'react';
import data from '../assets/data';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageNotFound from './PageNotFound';

const Detail = () => {
    const { id } = useParams();
    const newsItem = data().find(news => news.id === parseInt(id));

    if (!newsItem) {
        return <PageNotFound />
    };

    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('selectedLanguage') || 'uz'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }, [selectedLanguage]);

    const changeLanguage = (languageCode) => {
        setSelectedLanguage(languageCode);
    };

    const navigate = useNavigate();

    return (
        <div className="w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5">
            <div className='mb-7 space-y-5 sm:w-180% sm:mb-0'>
                <button onClick={() => navigate(-1)} className='bg-gray-800 text-white rounded p-2'>{t('back')}</button>
                <img src={newsItem.image} alt={newsItem.alt} className='w-full h-auto object-contain rounded-md' />
                <h3 className='text-2xl font-medium text-black'>{t(newsItem.title)}</h3>
                <p className='text-lg font-medium text-gray-500'>{newsItem.date}</p>
                <p className='text-lg font-sm text-black'>{t(newsItem.content)}</p>
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
                                                <p className="text-black text-base sm:text-xs font-medium">{news.date}</p>
                                                <p className="text-black text-base sm:text-xs font-medium">{t(news.detail)}</p>
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

export default Detail;
