import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const PageNotFound = () => {
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto flex justify-center px-5">
            <div className="bg-gray-800 text-center rounded-lg p-10">
                <h1 className="text-8xl font-bold text-red-500 mb-5">404</h1>
                <p className="text-2xl font-medium text-white mb-10">
                    {t('page_not_found')}
                </p>
                <Link
                    to="/"
                    className="block w-full py-2 text-base font-medium bg-blue-800 text-white text-center rounded-md hover:bg-blue-700"
                >
                    {t('home_page')}
                </Link>
            </div>
        </div >
    );
};

export default PageNotFound;
