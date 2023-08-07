import React from "react";

const OrdersPage = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40">
            <table className="w-full border-separate border-spacing-2">
                <thead>
                    <tr className="text-left">
                        <th className="hidden md:block">Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Products</th>
                        <th className="hidden md:block">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-sm md:text-base bg-red-50">
                        <td className="hidden md:block py-6 px-1">000000009</td>
                        <td className="py-6 px-1">09.12.2019</td>
                        <td className="py-6 px-1">31.00</td>
                        <td className="py-6 px-1">
                            Siciliana Pizza (1), Veggie Pizza (1), Coca Cola 1L
                            (1)
                        </td>
                        <td className="hidden md:block py-6 px-1">
                            On the way (approx. 10min)...
                        </td>
                    </tr>

                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">000000012</td>
                        <td className="py-6 px-1">19.07.2023</td>
                        <td className="py-6 px-1">89.90</td>
                        <td className="py-6 px-1">
                            Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L
                            (2)
                        </td>
                        <td className="hidden md:block py-6 px-1">
                            On the way (approx. 10min)...
                        </td>
                    </tr>

                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">000002018</td>
                        <td className="py-6 px-1">19.07.2023</td>
                        <td className="py-6 px-1">89.90</td>
                        <td className="py-6 px-1">
                            Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L
                            (2)
                        </td>
                        <td className="hidden md:block py-6 px-1">
                            On the way (approx. 8min)...
                        </td>
                    </tr>

                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">000000012</td>
                        <td className="py-6 px-1">19.07.2023</td>
                        <td className="py-6 px-1">89.90</td>
                        <td className="py-6 px-1">
                            Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L
                            (2)
                        </td>
                        <td className="hidden md:block py-6 px-1">
                            Preparation...
                        </td>
                    </tr>

                    <tr className="text-sm md:text-base bg-red-50">
                        <td className="hidden md:block py-6 px-1">000000009</td>
                        <td className="py-6 px-1">09.12.2019</td>
                        <td className="py-6 px-1">31.00</td>
                        <td className="py-6 px-1">
                            Siciliana Pizza (1), Veggie Pizza (1), Coca Cola 1L
                            (1)
                        </td>
                        <td className="hidden md:block py-6 px-1">
                            Delivered
                        </td>
                    </tr>

                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">000000012</td>
                        <td className="py-6 px-1">19.07.2023</td>
                        <td className="py-6 px-1">89.90</td>
                        <td className="py-6 px-1">
                            Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L
                            (2)
                        </td>
                        <td className="hidden md:block py-6 px-1">
                            On the way (approx. 30min)...
                        </td>
                    </tr>

                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">000002018</td>
                        <td className="py-6 px-1">19.07.2023</td>
                        <td className="py-6 px-1">89.90</td>
                        <td className="py-6 px-1">
                            Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L
                            (2)
                        </td>
                        <td className="hidden md:block py-6 px-1">
                            On the way (approx. 20min)...
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;
