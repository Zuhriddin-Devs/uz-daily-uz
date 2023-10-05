import React, { useEffect, useState } from "react";
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("selectedLanguage")
    );

    const languages = [
        { code: "uz", name: "O'z" },
        { code: "en", name: "En" },
        { code: "ru", name: "Ру" },
    ];

    const changeLanguage = (languageCode) => {
        setSelectedLanguage(languageCode);
        i18next.changeLanguage(languageCode);
        localStorage.setItem("selectedLanguage", languageCode);
        window.scrollTo(0, 0);
    };

    const { t } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem("selectedLanguage");
        if (savedLanguage) {
            setSelectedLanguage(savedLanguage);
            i18next.changeLanguage(savedLanguage);
        }
    }, []);

    const closeNavbar = () => {
        setNavbar(false);
    };

    return (
        <header className="w-full bg-gray-800 py-3 fixed top-0 right-0 z-10">
            <div className="w-full justify-between px-5 mx-auto lg:max-w-7xl lg:items-center lg:flex">
                <div>
                    <div className="flex items-center justify-between py-3 lg:block">
                        <Link to='/' onClick={closeNavbar}>
                            <img className="w-36" src={logo} alt="logo" />
                        </Link>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <nav
                        className={`w-full h-screen flex justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 lg:h-auto ${navbar ? "block" : "hidden"}`}
                    >
                        <ul className="text-white text-base font-medium items-center justify-center space-y-8 lg:flex lg:space-x-4 lg:space-y-0">
                            <li>
                                <NavLink to='/' onClick={closeNavbar} className='hover:text-red-500'>{t("uzbekistan")}</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Iqtisod' onClick={closeNavbar} className='hover:text-red-500'>{t("iqtisod")}</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Moliya' onClick={closeNavbar} className='hover:text-red-500'>{t("moliya")}</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Texnologiyalar' onClick={closeNavbar} className='hover:text-red-500'>{t("texnologiyalar")}</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Madaniyat' onClick={closeNavbar} className='hover:text-red-500'>{t("madaniyat")}</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Sport' onClick={closeNavbar} className='hover:text-red-500'>{t("sport")}</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Turizm' onClick={closeNavbar} className='hover:text-red-500'>{t("turizm")}</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <div className="flex items-center justify-end space-x-5">
                        <select
                            id="languageSelect"
                            className="py-1 px-2 bg-white text-gray-800 rounded outline-none"
                            value={selectedLanguage}
                            onChange={(e) => changeLanguage(e.target.value)}
                        >
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code} className="bg-gray-800 text-white">
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
