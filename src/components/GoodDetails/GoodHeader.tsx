import { Good } from "@prisma/client";
import React from "react";
import ReactCountryFlag from "react-country-flag";

interface GoodHeaderProps {
    good: Good;
}

const GoodHeader = async ({ good }: GoodHeaderProps) => {
    return (
        <div className="text-primaryHotefy-darker dark:text-white flex flex-col md:flex-row items-center justify-between px-4">
            <div className="flex flex-col gap-1 items-center justify-center md:items-start">
                <h1 className="font-semibold text-xl">{good.name}</h1>
                <div className="flex gap-1 items-center justify-center md:justify-start md:items-start">
                    <ReactCountryFlag countryCode={good.countryCode} svg />
                    <p className="text-xs font-semibold underline">{good.location}</p>
                </div>
            </div>
            <p className="text-lg font-medium mt-2 md:mt-0">
                <span className="text-primaryHotefy-neutral dark:text-primaryHotefy-lighter font-bold">
                    {parseFloat(good.price.toString()).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </span>{" "}
                por dia
            </p>
        </div>
    );
};

export default GoodHeader;
