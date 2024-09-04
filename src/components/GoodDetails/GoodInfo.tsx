"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Good } from "@prisma/client";

import {
    MdOutlineDescription,
} from "react-icons/md";

interface GoodReservationsProps {
    good: Good;
}

const GoodInfo = ({ good }: GoodReservationsProps) => {
    return (
        <div className="text-primaryHotefy-darker dark:text-white">
            <Accordion defaultExpandedKeys={[]}>
                <AccordionItem
                    key="1"
                    aria-label="Descrição"
                    subtitle={
                        <span className="font-medium text-tiny">
                            Check out the main features and what makes this Clothes
                            unique
                        </span>
                    }
                    title={
                        <span className="font-semibold  flex items-center gap-1">
                            About the Clothes <MdOutlineDescription size={20} />
                        </span>
                    }
                    className="text-sm leading-5"
                >
                    {good.description}
                </AccordionItem>

            </Accordion>
        </div>
    );
};

export default GoodInfo;
