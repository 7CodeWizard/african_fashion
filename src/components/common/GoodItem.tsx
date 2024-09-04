"use client";

import React from "react";
import ReactCountryFlag from "react-country-flag";
import NextImage from "next/image";

import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

interface Good {
    id: string;
    name: string;
    location: string;
    price: string; // Keep this as string since it's passed in as such
    description: string;
    locationDescription: string;
    coverImage: string;
    imagesUrl: string[];
    highlights: string[];
    checkIn: string;
    checkOut: string;
    maxGuests: number;
    type: string;
    recommended: boolean;
    countryCode: string;
    createdAt: string;
}

interface GoodItemProps {
    good: Good;
}


const GoodItem = ({ good }: any) => {
    const price = good.price.toString();
    return (
        <Link href={`/goods/${good.id}`}>
            <Card
                isPressable
                radius="md"
                className="border-none w-full shadow-none select-none"
            >
                <Image
                    className="object-cover h-full w-full aspect-square"
                    as={NextImage}
                    src={good.coverImage}
                    alt={good.name}
                    width={300}
                    height={300}
                />
                <CardFooter className="justify-between bg-[#18181b] border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 py-2">
                    <div className="flex flex-col gap-1 items-center">
                        <p className="text-xs text-white font-semibold z-50">{good.name}</p>

                        <div className="flex gap-1">
                            <p className="text-xs text-white font-semibold">
                                {good.location}
                            </p>
                            <ReactCountryFlag countryCode={good.countryCode} svg />
                        </div>
                    </div>
                    <div className="text-tiny text-white bg-secondary px-4 py-2 rounded-full font-medium">
                        {parseFloat(price).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        })}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default GoodItem;
