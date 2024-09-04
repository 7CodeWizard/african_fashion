import React, { ReactNode } from "react";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { BiErrorCircle } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { BsQuestionCircle } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

import { RiVisaLine } from "react-icons/ri";
import { SiDiscover } from "react-icons/si";
import { FaApplePay } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { BiLogoMastercard } from "react-icons/bi";
import { FaCcPaypal } from "react-icons/fa";

import {
    FaInstagram,
    FaXTwitter,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa6";

type ButtonSize = "sm" | "md" | "lg" | undefined;

interface SocialLinkProps {
    href: string;
    icon: ReactNode;
    size: ButtonSize;
}

function SocialLink({ href, icon, size }: SocialLinkProps) {
    return (
        <Link href={href} isExternal>
            <Button isIconOnly startContent={icon} size={size} />
        </Link>
    );
}

interface FooterLinkProps {
    item: {
        icon: ReactNode;
        text: string;
    };
}

function FooterLink({ item }: FooterLinkProps) {
    return (
        <p className="group flex cursor-pointer text-left items-center justify-start gap-2 pr-8 py-2 text-[15px]">
            <span
                className="footerLink dark:text-gray-200"
            >
                {item.icon}
            </span>
            {item.text}
        </p>
    );
}

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const companyDetails = [
        {
            icon: <LuMapPin size={24} />,
            text: "Business Hours Mon-Fri 10-5pm cst 5214 Burleson Rd. Suite 107 Austin, Texas 78744",
        },
        {
            icon: <AiOutlinePhone size={24} />,
            text: "617-744-0105",
        },
        {
            icon: <MdOutlineMail size={24} />,
            text: "info@company",
        },
        {
            icon: <GrMapLocation size={24} />,
            text: "view map & directions",
        },
    ];

    const categories = [
        { icon: null, text: "African Wax Prints" },
        { icon: null, text: "George" },
        { icon: null, text: "Auto Gele/Headtie" },
        { icon: null, text: "Wax and Handbag" },
        { icon: null, text: "Accessories/Jewelry/Isiago" },
        { icon: null, text: "Lace" },
        { icon: null, text: "Shoes and Bag" },
        { icon: null, text: "Aso Ebi/ Uniform Order" },
    ];

    const information = [
        { icon: null, text: "Blog" },
        { icon: null, text: "Shipping & Returns" },
        { icon: null, text: "Privacy Policy" },
        { icon: null, text: "FAQ" },
        { icon: null, text: "About Us" },
        { icon: null, text: "Sitemap" },
    ];

    const icons_lists = [
        <SiAmericanexpress size={50} />, <SiDiscover size={50} />, <BiLogoMastercard size={50} />, <FaCcPaypal size={50} />, <RiVisaLine size={50} />, <FaApplePay size={50} />,
    ]

    const order = [
        { icon: null, text: "Orders" },
        { icon: null, text: "Messages" },
        { icon: null, text: "Addresses" },
        { icon: null, text: "Wish Lists" },
        { icon: null, text: "Recently Viewed" },
        { icon: null, text: "Account Settings" },
    ];

    return (
        <footer className="mx-auto w-full cursor-default items-center justify-center bg-[#FAF9FF] dark:bg-[#18181b] shadow-xl md:px-0 dark:border-t dark:border-gamtech  ">
            <section className="flex flex-col   items-center justify-around gap-y-4 shadow-xl md:flex-row md:gap-y-0">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Foxtech"
                        width={100}
                        height={50}
                    />
                </Link>

                <p className="text-sm">
                    &copy; {currentYear} Iwu International Africa.
                </p>

                <div className="flex gap-1">
                    <SocialLink
                        href="https://www.instagram.com/"
                        icon={<FaInstagram size={20} />}
                        size="sm"
                    />
                    <SocialLink
                        href="https://twitter.com/"
                        icon={<FaXTwitter size={20} />}
                        size="sm"
                    />
                    <SocialLink
                        href="https://github.com/"
                        icon={<FaGithub size={20} />}
                        size="sm"
                    />
                    <SocialLink
                        href="https://www.linkedin.com/in/"
                        icon={<FaLinkedinIn size={20} />}
                        size="sm"
                    />
                </div>
            </section>

            <div className="bg-zinc-200/60  p-12 dark:bg-[#111111] ">
                <section className=" justify-start text-xs flex w-full  xl:flex-row flex-col ">
                    <div className="flex justify-around xl:w-2/3 w-full md:flex-row flex-col">
                        <div className="flex flex-col gap-1 xl:w-[22rem] md:w-1/2 w-full">
                            <h3 className=" text-[20px] text-[#de71a4] items-center flex gap-4 py-4">
                                <BiErrorCircle size={30} />
                                Company Details
                            </h3>
                            <div>
                                {companyDetails.map((item, index) => (
                                    <FooterLink key={index} item={item} />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 xl:w-[32rem] md:w-1/2 w-full">
                            <h3 className=" text-[20px] text-[#de71a4] items-center flex gap-4 py-4">
                                <BsQuestionCircle size={30} />
                                Categories
                            </h3>
                            <div className="sm:h-[150px] h-auto flex flex-wrap flex-col">
                                {categories.map((item, index) => (
                                    <FooterLink key={index} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex xl:w-1/2 w-full justify-start flex-col md:flex-row">
                        <div className="flex flex-col gap-1 px-4 xl:w-2/3 md:w-1/2 w-full">
                            <h3 className=" text-[20px] text-[#de71a4] items-center flex gap-4 py-4" >
                                <CgMenuLeft size={30} />
                                Information
                            </h3>
                            <div className="sm:h-[120px] h-auto flex flex-wrap flex-col">
                                {information.map((item, index) => (
                                    <FooterLink key={index} item={item} />
                                ))}
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                {
                                    icons_lists.map((item) => (
                                        item
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 px-4 xl:w-1/3 md:w-1/2 w-full">
                            <h3 className="text-[20px]  text-[#de71a4] items-center flex gap-4 py-4">
                                <IoPersonOutline size={30} />
                                Order
                            </h3>
                            <div>
                                {order.map((item, index) => (
                                    <FooterLink key={index} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}
