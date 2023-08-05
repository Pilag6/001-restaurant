import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Pizzas = () => {
    return (
        <div className="flex flex-wrap text-red-500">
            {pizzas.map((item) => (
                <Link
                    href={`/product/${item.id}`}
                    key={item.id}
                    className="w-full sm:w-1/2 lg:w-1/3 h-[60vh] border-r-2 border-b-2 border-red-500 p-4 flex flex-col justify-between group odd:bg-green-50"
                >

                  {/* IMAGE CONTAINER */}
                  {item.img && 
                    <div className="relative h-[80%]">
                      <Image src={item.img} alt={item.title} fill className="object-contain hover:rotate-[360deg] transition-all duration-500"/>
                    </div>
                  }

                  {/* TEXT CONTAINER */}
                  <div className="flex items-center justify-between font-bold">
                    <h2 className="text-2xl uppercase p-2">{item.title}</h2>
                    <h3 className="group-hover:hidden text-xl">${item.price}0</h3>
                    <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2">Add to Cart</button>
                  </div>

                </Link>
            ))}
        </div>
    );
};

export default Pizzas;
