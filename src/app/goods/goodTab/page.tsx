'use client'

import React, { useEffect, useState } from "react";
import GoodItem from "@/components/common/GoodItem";
interface SelGoodsProps {
    text: string;
}

const SelGoods: React.FC<SelGoodsProps> = ({ text }) => {

    const [goods, setGoods] = React.useState<any[]>([]);
    useEffect(() => {
        const fetchGoods = async () => {
            const response = await fetch(
                `/api/goods/search?text=${text}`
            );
            const data = await response.json();
            setGoods(data);
        };

        fetchGoods();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="w-full mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center gap-2">
            {goods.map((good: any) => (
                <GoodItem good={good} key={good.id} />
            ))}
        </section>
    );
};

export default SelGoods;
