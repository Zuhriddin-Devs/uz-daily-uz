import React from 'react';
import data from '../assets/data';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ConditionOfUse = () => {
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
                    {t('condition_of_use')}
                </h3>
                <p className='text-lg font-normal text-gray-800'>
                    {t('terms_of_use_intro')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('acceptance_of_terms_through_registration_and_use')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('terms_of_use_agreement')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('registration_and_security')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('registration_and_security_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('links_to_other_web_sites_and_services')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('links_to_other_sites_agreement')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('third_party_providers')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('third_party_providers_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('proprietary_rights')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('proprietary_rights_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('copyright')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('copyright_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('trademark_notice')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('trademark_notice_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t("users_grant_of_limited_license")}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('user_license_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('disclaimer_of_warranties')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('disclaimer_of_warranties_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('limitation_of_liability')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('limitation_of_liability_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('indemnification')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('indemnification_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('third_parties_users')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('third_parties_users_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('use_of_site')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('use_of_site_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('rules_of_user_conduct')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('rules_of_user_conduct_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('user_comments_feedback_and_other_submissions')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('user_comments_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('uzdaily_com_is_not_an_investment_advisor')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('investment_advisor_disclaimer')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('international_use')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('international_use_agreement')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('choice_of_law_and_forum')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('choice_of_law_and_forum_agreement')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('severability_and_integration')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('severability_and_integration_agreement')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('termination')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('termination_details')}
                </p>
                <p className='text-lg font-medium text-black'>
                    {t('how_to_contact_us')}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t('contact_us_details')}
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

export default ConditionOfUse;
