import React from 'react';
import data from '../assets/data';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className='w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5'>
            <div className='mb-7 space-y-5 sm:w-180% sm:mb-0'>
                <h3 className='text-3xl font-medium text-black'>
                    Privacy Policy
                </h3>
                <p className='text-lg font-normal text-gray-800'>
                    <b className='text-base font-bold text-black'>UzDaily.com</b> takes the privacy of its users seriously. We are committed to safeguarding the privacy of our users while providing a personalised and valuable service. This Privacy Policy Statement explains the data processing practices of UzDaily.com. If you have any requests concerning your personal information or any queries with regard to these practices please contact us by e-mail at info@uzdaily.com.
                </p>
                <p>
                    <b className='text-lg font-medium text-black'>
                        INFORMATION COLLECTED
                    </b>
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    Personal information is collected by UzDaily.com. We collect personal information from you through the use of enquiry and registration forms and every time you e-mail us your details.
                    <br />
                    <br />
                    We also collect information automatically about your visit to our site. The information obtained in this way, which includes demographic data and browsing patterns, is only used in aggregate form.
                </p>
                <p>
                    <b className='text-lg font-medium text-black'>
                        USE AND DISCLOSURE OF PERSONAL INFORMATION
                    </b>
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    We process personal information collected via UzDaily.com for the purposes of:
                </p>
                <ul className='text-lg font-normal text-gray-800 list-disc pl-12'>
                    <li>
                        providing a personalised service
                    </li>
                    <li>
                        conducting market research surveys
                    </li>
                    <li>
                        running competitions and
                    </li>
                    <li>
                        providing you with information about products and services we offer.
                    </li>
                </ul>
                <p className='text-lg font-normal text-gray-800'>
                    If you wish to receive information about our products or services, about UzDaily.com or information from other carefully selected organisations, please tick the appropriate box on the registration form.
                    <br />
                    We may also disclose your information to business partners and third party suppliers we engage to provide services which involve processing data on our behalf or in accordance with a properly executed court order.
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    We also use information in aggregate form (so that no individual user is identified):
                </p>
                <ul className='text-lg font-normal text-gray-800 list-disc pl-12'>
                    <li>
                        to build up marketing profiles
                    </li>
                    <li>
                        to aid strategic development
                    </li>
                    <li>
                        to manage our relationship with advertisers and
                    </li>
                    <li>
                        to audit usage of the site.
                    </li>
                </ul>
                <p>
                    <b className='text-lg font-medium text-black'>
                        INTERNET-BASED TRANSFERS
                    </b>
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    Given that the Internet is a global environment, using the Internet to collect and process personal data necessarily involves the transmission of data on an international basis. Therefore, by browsing the UzDaily.com site and communicating electronically with us you acknowledge and agree to our processing of personal data in this way.
                </p>
            </div>
            <div className='w-auto'>
                <div className='mb-5'>
                    <h3 className='text-black text-2xl font-medium text-center sm:text-start'>
                        So'nggi yangiliklar
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
                                        <Link to={`/Privacy Policy/${news.id}`} className="text-black text-sm font-medium">{news.detail}</Link>
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

export default PrivacyPolicy;
