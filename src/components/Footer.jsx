import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Footer() {
    const iconsTab = [
        { icon: <FaFacebookF />, link: 'https://www.facebook.com/UzDaily.uz/?locale=ru_RU' },
        { icon: <AiOutlineTwitter />, link: 'https://twitter.com/UzDailycom' },
        { icon: <AiFillLinkedin />, link: 'https://ru.linkedin.com/company/daily-media' },
        { icon: <BiLogoTelegram />, link: 'https://t.me/UZDAILY' },
    ];

    return (
        <footer className="w-full bg-gray-800 py-20">
            <div className="w-full max-w-7xl mx-auto px-5">
                <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] text-left">
                    <div className="flex flex-col w-1/2 md:p-0 py-5 gap-8 mb-5 md:mb-0">
                        <Link to='/'>
                            <img
                                src={logo}
                                alt="footer-logo"
                                className="w-[18rem]"
                            />
                        </Link>
                        <p className="text-base font-medium text-white">
                            Hamma huquqlar himoyalangan. UzDaily.uz Internet nashri OAB sifatida 0601 raqami bilan 28.10.2009 - yil davlat ro'yxatidan o'tgan. Hamma xizmatlar litsenziyalangan, mahsulotlar esa sertifikatlarga ega.
                        </p>
                        <div className="flex gap-7 text-lg text-gray-800 justify-center md:justify-start">
                            {iconsTab.map(({ icon, link }, index) => {
                                return (
                                    <Link
                                        to={link}
                                        target="_blank"
                                        key={index}
                                        className="text-2xl bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer"
                                        style={{ transition: "all 0.3s" }}
                                    >
                                        {icon}
                                    </Link>
                                );
                            })}
                        </div>
                        <p className="text-base font-medium text-white">
                            © {new Date().getFullYear()} UzDaily.uz
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 relative">
                        <p className="text-2xl text-white font-bold border-b-2 border-red-500 pb-2">Biz haqimizda</p>

                        <Link to='/About Us' className="text-lg hover:text-red-500 text-white font-medium">
                            About Us
                        </Link>
                        <Link to='/Condition of Use' className="text-lg hover:text-red-500 text-white font-medium">
                            Condition of Use
                        </Link>
                        <Link to='/Privacy Policy' className="text-lg hover:text-red-500 text-white font-medium">
                            Privacy Policy
                        </Link>
                        <Link to='/Gadgets' className="text-lg hover:text-red-500 text-white font-medium">
                            Gadgets
                        </Link>
                        <Link to='/Advertisement' className="text-lg hover:text-red-500 text-white font-medium">
                            Advertisement
                        </Link>
                    </div>

                    <span></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
