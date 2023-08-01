"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const data = [
    {
        id: 1,
        title: "always fresh & always crispy & always pizza",
        image: "/pizza1.jpg",
    },
    {
        id: 2,
        title: "Taste the passion in every bite",
        image: "/pizza2.jpg",
    },
    {
        id: 3,
        title: "the best pizza to share with your friends",
        image: "/pizza3.jpg",
    },
    {
        id: 4,
        title: "Melt-in-your-mouth pizza bliss!",
        image: "/pizza4.jpg",
    },
    {
        id: 5,
        title: "Your pizza, your way, every single day",
        image: "/pizza5.jpg",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrentSlide((prev) =>
                    prev === data.length - 1 ? 0 : prev + 1
                ),
            4000
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] lg:flex-row bg-green-50">
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex items-center justify-center flex-col gap-5 lg:gap-8 text-red-500 font-bold">
                <h1 className="text-5xl text-center uppercase px-4 md:px-10 md:text-6xl xl:text-7xl">
                    {data[currentSlide].title}
                </h1>
                <button className="py-4 bg-red-500 text-white px-8">
                    Order Now
                </button>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="w-full flex-1 relative">
                <Image
                    src={data[currentSlide].image}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
};

export default Slider;
