import Image from "next/image";
import React from "react";

const CartPage = () => {
    return (
        <div className="h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] flex flex-col text-red-500 lg:flex-row">
            {/* PRODUCTS CONTAINER */}
            <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
                {/* SINGLE ITEM 1*/}
                <div className="flex items-center justify-between mb-4 gap-8">
                    <Image
                        src="/temporary/p1.png"
                        alt=""
                        width={100}
                        height={100}
                    />

                    <div className="flex gap-8 justify-between items-start w-full">
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="uppercase text-xl font-bold">
                                sicilian
                            </h1>
                            <span>Large</span>
                        </div>
                        <div className="flex gap-8">
                            <h2 className="font-bold">$14.90</h2>
                            <div className="group flex relative">
                                <span className="cursor-pointer">
                                    X
                                </span>
                                <span
                                    className="group-hover:opacity-100 transition-opacity bg-red-500 px-2 text-sm text-white absolute -left-12 top-3 lg:left-1/2 translate-y-full opacity-0 mx-auto"
                                >
                                    Remove
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SINGLE ITEM 2*/}
                <div className="flex items-center justify-between mb-4 gap-8">
                    <Image
                        src="/temporary/p2.png"
                        alt=""
                        width={100}
                        height={100}
                    />

                    <div className="flex gap-8 justify-between items-start w-full">
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="uppercase text-xl font-bold">
                                bacon deluxe
                            </h1>
                            <span>Extra BBQ sauce</span>
                        </div>
                        <div className="flex gap-8">
                            <h2 className="font-bold">$19.90</h2>
                            <div className="group flex relative">
                                <span className="cursor-pointer">
                                    X
                                </span>
                                <span
                                    className="group-hover:opacity-100 transition-opacity bg-red-500 px-2 text-sm text-white absolute -left-12 top-3 lg:left-1/2 translate-y-full opacity-0 mx-auto"
                                >
                                    Remove
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SINGLE ITEM 3*/}
                <div className="flex items-center justify-between mb-4 gap-8">
                    <Image
                        src="/temporary/p4.png"
                        alt=""
                        width={100}
                        height={100}
                    />

                    <div className="flex gap-8 justify-between items-start w-full">
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="uppercase text-xl font-bold">
                                spicy arrabiata
                            </h1>
                            <span>Extra Parmessan</span>
                        </div>
                        <div className="flex gap-8">
                            <h2 className="font-bold">$12.00</h2>

                            <div className="group flex relative">
                                <span className="cursor-pointer">
                                    X
                                </span>
                                <span
                                    className="group-hover:opacity-100 transition-opacity bg-red-500 px-2 text-sm text-white absolute -left-12 top-3 lg:left-1/2 translate-y-full opacity-0 mx-auto"
                                >
                                    Remove
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAYMENT CONTAINER */}
            <div className="h-1/2 p-4 bg-green-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
                <div className="flex justify-between">
                    <span className="">Subtotal (3 items)</span>
                    <span className="">$46.80</span>
                </div>
                <div className="flex justify-between">
                    <span className="">Service Cost</span>
                    <span className="">$0.00</span>
                </div>
                <div className="flex justify-between">
                    <span className="">Delivery Cost</span>
                    <span className="text-green-500">FREE!</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between">
                    <span className="">
                        TOTAL <small>(INCL. VAT)</small>
                    </span>
                    <span className="font-bold">$46.80</span>
                </div>
                <button className="bg-red-500 text-white p-3 rounded-md w-1/2 lg:w-full self-end">
                    CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default CartPage;
