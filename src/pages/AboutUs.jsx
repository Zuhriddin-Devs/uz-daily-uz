import React from 'react';
import { useTranslation } from 'react-i18next';
import data from '../assets/data';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <div className='w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5'>
            <div className='mb-7 space-y-5 sm:w-180% sm:mb-0'>
                <h3 className='text-3xl font-medium text-black'>{t("about-us-title")}</h3>
                <p className='text-lg font-normal text-gray-800'>
                    <strong className='text-base font-bold text-black'>
                        {t("about-us-sub-title")}
                    </strong> {t("about-us-description-1")}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t("about-us-description-2")}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t("about-us-description-3")}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t("about-us-contact-info")}
                </p>
                <p className='text-lg font-normal text-gray-80'>
                    <strong className='text-base font-bold text-black'>
                        {t("about-us-company-name")}
                    </strong>
                    <br />
                    <strong className='text-base font-bold text-black mr-2'>
                        {t("about-us-address")}
                    </strong> {t("about-us-address-details")}
                    <br />
                    <strong className='text-base font-bold text-black mr-2'>
                        {t("about-us-tel")}
                    </strong>
                    {t("about-us-tel-number")}
                    <br />
                    <strong className='text-base font-bold text-black mr-2'>
                        {t("about-us-email")}
                    </strong>
                    <Link to='mailto:info@uzdaily.com'>{t("about-us-email-link")}</Link>
                </p>
            </div>
            <div className='w-auto'>
                <div className='mb-5'>
                    <h3 className='text-black text-2xl font-medium text-center sm:text-start'>
                        {t("latest news")}
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
                                        <Link to={`/About Us/${news.id}`} className="text-black text-sm font-medium">{news.detail}</Link>
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
