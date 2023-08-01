// import Image from "next/image";
import React from "react";
// import CountDown from "./CountDown";

const Offer = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row md:justify-between bg-[url('/bgPasta.jpg')] bg-cover bg-center md:h-[70vh]">
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col justify-center items-start gap-8 md:px-[100px] px-20">
                <h1 className="text-white text-5xl font-bold xl:text-6xl">
                    From Italy with Love
                </h1>
                <p className="text-white xl:text-xl">Taste the Tradition. Your Pasta Paradise!</p>
                {/* <CountDown /> */}
                <button className="bg-red-500 text-white py-4 px-8">
                    Order Now
                </button>
            </div>

            {/* IMAGE CONTAINER */}
            {/* <div className="flex-1 w-full relative md:h-full">
                <Image
                    src="/offerProduct.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div> */}
        </div>
    );
};

export default Offer;
