import React from 'react';
import data from '../assets/data';
import { Link } from 'react-router-dom';
import uzDailyApkImage from '../assets/uzDailyApk.png';
import { useTranslation } from 'react-i18next';

const Gadgets = () => {
    const { t } = useTranslation();

    return (
        <div className='w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5'>
            <div className='mb-7 space-y-5 sm:w-180% sm:mb-0'>
                <h3 className='text-3xl font-medium text-black'>
                    {t('gadgets')}
                </h3>
                <p>
                    <span className='block text-lg font-normal text-black mb-7'>
                        {t("gadgets_details")}
                    </span>
                </p>
                <div className='w-full grid md:grid-cols-2 gap-7'>
                    <div className='bg-white overflow-hidden rounded shadow-lg'>
                        <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
                            <div>
                                <img src={uzDailyApkImage} alt="uzDaily-apk-image" className="w-full h-64" />
                            </div>
                            <div className='h-48 p-5 flex flex-col justify-between'>
                                <div>
                                    <h3 className="font-bold text-lg text-white">{t("uzdaily_english_apk")}</h3>
                                </div>
                                <div>
                                    <Link to='http://uzdaily.uz/apps/app-release-eng.apk' download className='block w-full py-2 bg-green-700 text-white font-medium text-center rounded hover:bg-green-600'>
                                        {t('download_apk')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 overflow-hidden rounded shadow-lg">
                        <div>
                            <img src={uzDailyApkImage} alt="uzDaily-apk-image" className="w-full h-64" />
                        </div>
                        <div className='h-48 p-5 flex flex-col justify-between'>
                            <div>
                                <h3 className="font-bold text-lg text-white">{t('uzdaily_russian_apk')}</h3>
                            </div>
                            <div>
                                <Link to='http://uzdaily.uz/apps/app-release-rus.apk' download className='block w-full py-2 bg-green-700 text-white font-medium text-center rounded hover:bg-green-600'>
                                    {t('download_apk')}
                                </Link>
                            </div>
                        </div>
                    </div>
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
                                    <h2 className="text-black text-sm font-medium">{t(news.title)}</h2>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-black text-xs font-medium">{news.date}</p>
                                        <Link to={`/Gadgets/${news.id}`} className="text-black text-xs font-medium">{t(news.detail)}</Link>
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
