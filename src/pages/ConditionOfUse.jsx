import React from 'react';
import { useTranslation } from 'react-i18next';
import data from '../assets/data';
import { Link } from 'react-router-dom';

const ConditionOfUse = () => {
    const { t } = useTranslation();

    return (
        <div className='w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5'>
            <div className='mb-7 space-y-5 sm:w-180% sm:mb-0'>
                <h3 className='text-3xl font-medium text-black'>
                    {t('condition of use')}
                </h3>
                <p className='text-lg font-normal text-gray-800'>
                    {t('terms of use intro')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('acceptance of terms through registration and use')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('terms of use agreement')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('registration and security')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('registration and security details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('links to other web sites and services')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('links to other sites agreement')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('third party providers')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('third party providers details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('proprietary rights')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('proprietary rights details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('copyright')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('copyright details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('trademark notice')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('trademark notice details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t("user's grant of limited license")}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('user license details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('disclaimer of warranties')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('disclaimer of warranties details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('limitation of liability')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('limitation of liability details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('indemnification')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('indemnification details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('third parties users')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('third parties users details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('use of site')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('use of site details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('rules of user conduct')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('rules of user conduct details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('user comments, feedback and other submissions')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('user comments details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('uzdaily.com is not an investment advisor')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('investment advisor disclaimer')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('international use')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('international use agreement')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('choice of law and forum')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('choice of law and forum agreement')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('severability and integration')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('severability and integration agreement')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('termination')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('termination details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('how to contact us')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('contact us details')}
                </p>
            </div>
            <div className='w-auto'>
                <div className='mb-5'>
                    <h3 className='text-black text-2xl font-medium text-center sm:text-start'>
                        {t('latest news')}
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
                                        <Link to={`/Condition of Use/${news.id}`} className="text-black text-sm font-medium">{news.detail}</Link>
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

export default ConditionOfUse;
