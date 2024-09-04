'use client';
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

const buttonData = [
    { text: "Georges", items: ["Plain George", "Silk George", "Beaded George", "French George", "Intorica George", "Stoned George", "Net George"] },
    { text: "Laces", items: ["Net Lace", "Curtain Lace", "Cord Lace", "French Lace", "Regular Lace", "Stoned Lace", "Vole Lace"] },
    { text: "Waxes", items: ["Super Wax", "Real Hollandes", "Medium Hollandes", "High Tek", "Davita Wax", "Embroidery Lace Wax"] },
    { text: "Headties", items: ["Regular Headties", "Auto Gele Asoke", "Sego", "Sego Auto Gele", "Regular Asoke"] },
    { text: "Ready to Wear", items: ["Women Full Beaded Kaftans", "Women Half Beaded Kaftans", "Skirt and Blouse", "Isi Agwu", "Men and Women Wax"] },
    { text: "Accessories", items: ["Coral Beads", "Fashion Beads", "Mens Traditional Hats", "Women's Matching Shoe and Bag", "Women Slippers", "Men's Shoes", "Men Slippers"] },
];

export function Sidebar({ className }: SidebarProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isFixed, setIsFixed] = useState<boolean>(false);
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle dropdown visibility
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) { // Adjust this value to control when the sidebar becomes fixed
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className={`${isFixed ? 'fixed' : ''}px-3 py-2 `}>
                    <h2 className="mb-2 p-4 text-lg font-semibold tracking-tight">
                        Products
                    </h2>
                    <div className="px-4">
                        {buttonData.map((item, index) => (
                            <div key={index} className="relative inline-block text-left w-full border-b">
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full flex items-center justify-start transition-colors duration-500 ease-in-out hover:bg-[#590BD8]  hover:text-white p-4"
                                    aria-haspopup="true"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="mr-2">{item.text}</span>
                                    <FaAngleDown className={`ml-auto transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                                </button>
                                {openIndex === index && (
                                    <div className="relative right-0 mt-2 w-full">
                                        <div className="py-1">
                                            {item.items.map((subItem, subIndex) => (
                                                <Link key={subIndex} href={`/goods/search?text=${subItem}`}>
                                                    <div className="block px-8 py-2 text-gray-700 dark:text-gray-300 hover:text-white transition-colors duration-500 ease-in-out hover:bg-[#590BD8] rounded-lg">
                                                        {subItem}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
