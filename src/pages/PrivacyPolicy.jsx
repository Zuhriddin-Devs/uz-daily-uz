import React from 'react';
import data from '../assets/data';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
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

    return (
        <div className='w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5'>
            <div className='mb-7 space-y-5 sm:w-180% sm:mb-0'>
                <h3 className='text-3xl font-medium text-black'>
                    {t('privacy_policy')}
                </h3>
                <p className='text-lg font-normal text-gray-800'>
                    <b className='text-base font-bold text-black'>Uzdaily.com</b> {t('privacy_policy_details')}
                </p>
                <p>
                    <b className='text-lg font-medium text-black'>
                        {t('information_collected')}
                    </b>
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('information_collected_details_1')}
                    <br />
                    <br />
                    {t('information_collected_details_2')}
                </p>
                <p>
                    <b className='text-lg font-medium text-black'>
                        {t('use_and_disclosure_of_personal_information')}
                    </b>
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('we_process_personal_information_collected_via_uzdaily_com_for_the_purposes_of')}
                </p>
                <ul className='text-lg font-normal text-gray-800 list-disc pl-12'>
                    <li>
                        {t('personal_information_1')}
                    </li>
                    <li>
                        {t('personal_information_2')}
                    </li>
                    <li>
                        {t('personal_information_3')}
                    </li>
                    <li>
                        {t('personal_information_4')}
                    </li>
                </ul>
                <p className='text-lg font-normal text-gray-800'>
                    {t('personal_information_details_1')}
                    <br />
                    {t('personal_information_details_2')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('information_in_aggregate')}
                </p>
                <ul className='text-lg font-normal text-gray-800 list-disc pl-12'>
                    <li>
                        {t('aggregate_1')}
                    </li>
                    <li>
                        {t('aggregate_2')}
                    </li>
                    <li>
                        {t('aggregate_3')}
                    </li>
                    <li>
                        {t('aggregate_4')}
                    </li>
                </ul>
                <p>
                    <b className='text-lg font-medium text-black'>
                        {t('internet_based_transfers')}
                    </b>
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('internet_based_transfers_details')}
                </p>
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

export default PrivacyPolicy;
