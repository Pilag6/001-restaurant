import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const Pizzas = () => {
    return (
        <div className="p-2 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
            {menu.map((category) => (
                <Link
                    href={`/menu/${category.slug}`}
                    key={category.id}
                    style={{ backgroundImage: `url(${category.img})` }}
                    className="w-full h-1/3 md:h-1/2 bg-cover p-8"
                >
                    <div className={`text-${category.color} w-1/2`}>
                        <h2 className="uppercase font-bold text-3xl">
                            {category.title}
                        </h2>
                        <p className="text-base md:text-sm my-8">
                            {category.desc}
                        </p>
                        <button
                            className={`hidden md:block py-4 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] bg-white text-black px-8`}
                        >
                            Explore
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Pizzas;
