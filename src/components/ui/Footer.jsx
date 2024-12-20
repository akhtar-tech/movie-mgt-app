import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-black dark:border-white w-full right-0 bottom-0 footer tex-center h-[8vh] text-wrap 
        flex justify-center items-center
        text-break dark:bg-[#111111] bg-gray-200 dark:text-gray-200">
            <p className="text-center text-sm hover:text-cyan-500 transition-all delay-200"> Developed by Akash Upadhyay <i className="fa-solid fa-copyright"></i> 2024 </p>
        </footer>
    );
};

export default Footer;