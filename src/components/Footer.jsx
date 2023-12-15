import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Footer() {
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

    const iconsTab = [
        { icon: <FaFacebookF />, link: 'https://www.facebook.com/UzDaily.uz/?locale=ru_RU' },
        { icon: <AiOutlineTwitter />, link: 'https://twitter.com/UzDailycom' },
        { icon: <AiFillLinkedin />, link: 'https://ru.linkedin.com/company/daily-media' },
        { icon: <BiLogoTelegram />, link: 'https://t.me/UZDAILY' },
    ];

    return (
        <footer className="w-full bg-gray-800 py-16">
            <div className="w-full max-w-7xl flex flex-col items-start justify-between md:flex-row md:gap-20 text-left mx-auto px-5">
                <div className="flex flex-col w-full md:w-1/2 md:p-0 gap-8 mb-5 md:mb-0">
                    <Link to='/'>
                        <img
                            src={logo}
                            alt="footer-logo"
                            className="w-72 h-auto"
                        />
                    </Link>
                    <p className="text-base font-medium text-white">
                        {t("footer_about")}
                    </p>
                    <div className="flex gap-7 text-lg text-gray-800 justify-start">
                        {iconsTab.map(({ icon, link }, index) => {
                            return (
                                <Link
                                    to={link}
                                    target="_blank"
                                    key={index}
                                    className="text-2xl bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300"
                                >
                                    {icon}
                                </Link>
                            );
                        })}
                    </div>
                    <p className="text-base font-medium text-white mb-5 md:mb-0">
                        © {new Date().getFullYear()} UzDaily.uz
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    <Link to='/About Us' className="text-lg hover:text-red-500 text-white font-medium">
                        {t("footer_link_1")}
                    </Link>
                    <Link to='/Condition of Use' className="text-lg hover:text-red-500 text-white font-medium">
                        {t("footer_link_2")}
                    </Link>
                    <Link to='/Privacy Policy' className="text-lg hover:text-red-500 text-white font-medium">
                        {t("footer_link_3")}
                    </Link>
                    <Link to='/Gadgets' className="text-lg hover:text-red-500 text-white font-medium">
                        {t("footer_link_4")}
                    </Link>
                    <Link to='/Advertisement' className="text-lg hover:text-red-500 text-white font-medium">
                        {t("footer_link_5")}
                    </Link>
                </div>

                <span></span>
            </div>
        </footer>
    );
};

export default Footer;
