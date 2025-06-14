import { Link } from 'react-router-dom';
import PageTitle from '../reusable/PageTitle';
import React from 'react';
import { motion } from 'framer-motion';

const ErrorPage = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <PageTitle title="AZLAAN CONTRACTING W.L.L | Error - عز لان للمقاولات ززمزم" />
            <motion.div
                className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
            >
                <div className="max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex">
                    <div className="flex-1 max-w-lg">
                        <img src="https://i.ibb.co/r03Pv6N/6342464-min.jpg" alt="404 Illustration" />
                    </div>
                    <div className="mt-12 flex-1 max-w-lg space-y-3 md:mt-0">
                        <h3 className="text-orange-600 font-semibold text-lg">
                            404 Error / خطأ ٤٠٤
                        </h3>
                        <p className="text-gray-800 text-4xl font-bold sm:text-5xl">
                            Page not found / الصفحة غير موجودة
                        </p>
                        <p className="text-gray-600">
                            Sorry, the page you are looking for could not be found or has been removed. <br />
                            عذرًا، الصفحة التي تبحث عنها غير موجودة أو قد تم حذفها.
                        </p>

                        <Link to="/" className="text-blue-600 duration-150 hover:text-orange-600 font-medium inline-flex items-center gap-x-1">
                            Go Back Home / العودة للصفحة الرئيسية
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                            </svg>
                        </Link>

                        <div className="mt-6 text-sm text-gray-700 space-y-1">
                            <p><strong>Company:</strong> AZLAAN CONTRACTING W.L.L</p>
                            <p><strong>Arabic Name:</strong> عز لان للمقاولات ززمزم</p>
                            <p><strong>CR No.:</strong> 170827</p>
                            <p><strong>Specialized in:</strong> Event Management & Interior Designer (Office & Home)</p>
                            <p><strong>Services:</strong></p>
                            <ul className="list-disc list-inside pl-4 text-gray-600">
                                <li>Supply and installation of carpets</li>
                                <li>Parquet flooring & Hospital vinyl flooring</li>
                                <li>Design & build of kiosks and exhibition stands</li>
                                <li>Curtains, fittings, and accessories</li>
                            </ul>
                            <p><strong>Contact:</strong> <a href="tel:+97450183025" className="text-orange-600 underline">+974 50183025</a> (Phone / WhatsApp)</p>
                            <p><strong>Email:</strong> <a href="mailto:azlaancontracting@gmail.com" className="text-orange-600 underline">azlaancontracting@gmail.com</a></p>
                            <p><strong>Facebook:</strong> <a href="https://www.facebook.com/azlaan.contracting" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">/azlaan.contracting</a></p>
                            <p><strong>Instagram:</strong> <a href="https://www.instagram.com/azlaancontracting/?igsh=MWp6YWtyYXZvM2hzbA%3D%3D%5C" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">@azlaancontracting</a></p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.main>
    );
};

export default ErrorPage;
