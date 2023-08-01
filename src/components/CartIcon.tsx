import React from "react";
import Link from "next/link";
import Image from "next/image";

const CartIcon = () => {
    return (
        <Link href="/cart" className="flex items-center gap-2">
            <div className="relative w-8 h-8 md:w-7 md:h-7">
                <Image src="/delivery.png" alt="cart" fill />
            </div>
            <span className="hover:font-bold">Cart (3)</span>
        </Link>
    );
};

export default CartIcon;
