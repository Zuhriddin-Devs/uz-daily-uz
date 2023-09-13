import { useState } from "react";
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <header className="w-full bg-gray-800 py-3 fixed top-0 right-0 z-10">
            <div className="w-full justify-between px-5 mx-auto lg:max-w-7xl md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:block">
                        <Link to='/'>
                            <img className="w-36" src={logo} alt="logo" />
                        </Link>
                        <div className="md:hidden">
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
                        className={`w-full h-screen flex justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 md:h-auto ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="text-white text-base font-medium items-center justify-center space-y-8 md:flex md:space-x-4 md:space-y-0">
                            <li>
                                <NavLink to='/' className='hover:text-red-500'>O'zbekiston</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Iqtisod' className='hover:text-red-500'>Iqtisod</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Moliya' className='hover:text-red-500'>Moliya</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Texnologiyalar' className='hover:text-red-500'>Texnologiyalar</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Madaniyat' className='hover:text-red-500'>Madaniyat</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Sport' className='hover:text-red-500'>Sport</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Turizm' className='hover:text-red-500'>Turizm</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
