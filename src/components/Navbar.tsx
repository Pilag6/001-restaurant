import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
    const user = false;

    return (
        <div className="h-12 flex items-center justify-between text-red-500 p-4 border-b-2 border-b-red-500 uppercase md:h-16  lg:px-20 xl:px-40">
            {/* LINKS LEFT OF THE LOGO */}
            <div className="hidden md:flex gap-4 flex-1">
                <Link href="/" className="hover:font-bold">
                    Home
                </Link>
                <Link href="/menu" className="hover:font-bold">
                    Menu
                </Link>
                <Link href="/" className="hover:font-bold">
                    Contact
                </Link>
            </div>

            {/* LOGO */}
            <div className="text-lg font-bold flex-1 md:text-center lg:text-2xl">
                <Link href="/">La Prima Pizza</Link>
            </div>

            {/* MOBILE MENU */}
            <div className="md:hidden">
                <Menu />
            </div>

            {/* LINKS RIGTH OF THE LOGO */}
            <div className="hidden sm:flex items-center gap-4 flex-1 justify-end ">
                <div className="md:absolute top-2 right-2 xl:static flex items-center gap-2 cursor-pointer bg-green-700 py-1 px-2 text-white">
                    <Image src="/phone.png" alt="" width={20} height={20} />
                    <span>(+49) 123 4567</span>
                </div>
                {!user ? (
                    <Link href="/login" className="hover:font-bold">
                        Login
                    </Link>
                ) : (
                    <Link href="/orders" className="hover:font-bold">
                        Orders
                    </Link>
                )}

                <CartIcon />
            </div>
        </div>
    );
};

export default Navbar;
