"use client";

import GoodItem from "@/components/common/GoodItem";
import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

import { MdTravelExplore } from "react-icons/md";

const SearchResult = () => {
    const [goods, setGoods] = React.useState<any[]>([]);
    const searchParams = useSearchParams();
    const router = useRouter();

    const homePage = () => {
        router.push("/");
    };

    useEffect(() => {
        const fetchGoods = async () => {
            const response = await fetch(
                `/api/goods/search?text=${searchParams.get("text") ?? ""}`
            );

            const data = await response.json();
            setGoods(data);
        };

        fetchGoods();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col items-center justify-center mb-5">
            <div className="flex flex-col items-center justify-center my-5 text-center px-4">
                <h1 className="text-2xl font-semibold">{searchParams.get("text")}</h1>
                <p className="text-sm mt-2">
                    Our ecommerce website is dedicated to showcasing and retailing a diverse array of African fabrics
                </p>
                {goods.length === 0 && (
                    <Button
                        variant="shadow"
                        color="secondary"
                        className="mx-auto bg-secondary dark:bg-primaryHotefy-lighter my-5"
                        endContent={<MdTravelExplore />}
                        onClick={homePage}
                    >
                        Back to catalog
                    </Button>
                )}
            </div>


            <div className="container mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center gap-4">
                {goods?.map((good) => (
                    <GoodItem key={good.id} good={good} />
                ))}
            </div>
        </div>
    );
};

export default SearchResult;
