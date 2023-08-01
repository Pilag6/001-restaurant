import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="h-15 md:h-20 px-4 py-2 lg:px-20 flex justify-between items-center bg-red-500 text-white">
            <Link href="/" className="font-bold text-xl">
                LA PRIMA PIZZA
            </Link>
            <p className="text-right">2023 © ALL RIGHTS RESERVED</p>
        </div>
    );
};

export default Footer;
