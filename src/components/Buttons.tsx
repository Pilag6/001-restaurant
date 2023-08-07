import React from "react";

type BtnProps = {
    title: string;
};

const Buttons = ({ title}: BtnProps) => {
    return <button className="py-4 px-8 bg-red-500 text-white">{title}</button>;
};

export default Buttons;
