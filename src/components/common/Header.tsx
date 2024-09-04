'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"

import { useRouter } from "next/navigation"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    Link,
    Dropdown,
    DropdownItem,
    DropdownTrigger,
    DropdownMenu,
    Avatar,
    Button,
    Select,
    SelectItem
} from "@nextui-org/react"
import { signIn, signOut, useSession } from "next-auth/react"
import { LuLogIn, LuLogOut } from "react-icons/lu"
import { TbSunMoon } from "react-icons/tb"
import { MdTravelExplore } from "react-icons/md"
import { FaCaretDown } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa"
import { HiShoppingCart, HiSun, HiMoon } from "react-icons/hi2";
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../app/fonts/SpicyRice-Regular.ttf' })

export default function Header() {
    const { status, data } = useSession();
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const storedDarkMode = localStorage.getItem("darkMode");
            return storedDarkMode === "true";
        }
        return false;
    });
    const router = useRouter();
    // const handleLoginClick = () => router.push('');
    const handleLogoutClick = () => signOut();

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);

        if (typeof window !== "undefined") {
            localStorage.setItem("darkMode", newDarkMode.toString());
            const htmlElement = document.querySelector("html");
            if (htmlElement) {
                if (newDarkMode) {
                    htmlElement.classList.add("dark");
                } else {
                    htmlElement.classList.remove("dark");
                }
            }
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const htmlElement = document.querySelector("html");
            if (htmlElement) {
                if (isDarkMode) {
                    htmlElement.classList.add("dark");
                } else {
                    htmlElement.classList.remove("dark");
                }
            }
        }
    }, [isDarkMode]);

    const [selectedValue, setSelectedValue] = useState("georges");

    return (
        <div className="h-16 fixed w-full z-50 bg-neutral-100 dark:bg-[#18181b] shadow-lg dark:border-b-1 dark:border-primaryHotefy-lighter flex items-center justify-between px-12">
            <div className=" flex items-center gap-12">
                <Link href="/">
                    <span className={`${myFont.className} text-[24px] text-primaryHotefy-neutral dark:text-primaryHotefy-lighter`}>AfricanFashion</span>
                    <Image
                        src="/logo.png"
                        alt="fashion"
                        width={60}
                        height={0}
                        priority
                        style={{ width: "auto", height: "auto", borderRadius: "30%" }}
                    />
                </Link>

                <Select
                    placeholder="Georges"
                    className="ml-16 text-foreground"
                    value={selectedValue}
                    onChange={(value) => setSelectedValue(value)}
                >
                    <SelectItem value="georges" key="georges">Georges</SelectItem>
                    <SelectItem value="prints" key="prints"> Wax </SelectItem>
                    <SelectItem value="headtie" key="headtie"> Gele/Headtie</SelectItem>
                </Select>
            </div>

            <div className="flex justify-between" >
                {
                    status === 'loading' && (
                        <Button
                            variant="shadow"
                            color='secondary'
                            isLoading
                            isIconOnly
                        ></Button>
                    )
                }
                {status === 'unauthenticated' && (
                    <Dropdown placement="right-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as='button'
                                className="transition-transform"
                                color="secondary"
                                name=""
                                size="sm"
                                src=""
                            />
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Login Actions"
                            variant="shadow"
                            color="secondary"
                        >
                            <DropdownItem
                                startContent={<LuLogIn />}
                                key="login"
                                onClick={() => router.push("/auth/login")}
                            >
                                <Link href={`/auth/login`}>Login</Link>
                            </DropdownItem>
                            <DropdownItem
                                startContent={<TbSunMoon />}
                                onClick={toggleDarkMode}
                            >
                                {isDarkMode ? 'light' : 'dark'}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                )}
                {
                    status === 'authenticated' && (
                        <div className="flex gap-4 items-center">

                            <Dropdown placement="bottom-start">
                                <DropdownTrigger>
                                    <Button
                                        value="pages"
                                        variant="light"
                                    >
                                        Pages
                                        <FaCaretDown />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Pages"
                                    variant="shadow"
                                    color="secondary"
                                    disabledKeys={["pages"]}
                                >
                                    <DropdownItem startContent={<MdTravelExplore />}
                                        onClick={() => router.push("/")}>
                                        Blog
                                    </DropdownItem>
                                    <DropdownItem
                                        startContent={<MdTravelExplore />}
                                        onClick={() => router.push("/")}
                                    >
                                        Shipping & Returns
                                    </DropdownItem>
                                    <DropdownItem
                                        startContent={<MdTravelExplore />}
                                        onClick={() => router.push("/")}
                                    >
                                        Privacy Policy
                                    </DropdownItem>
                                    <DropdownItem
                                        startContent={<MdTravelExplore />}
                                        onClick={() => router.push("/")}
                                    >
                                        About Us
                                    </DropdownItem>
                                    <DropdownItem
                                        startContent={<MdTravelExplore />}
                                        onClick={() => router.push("/")}
                                    >
                                        FAQ
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Button
                                variant="light"
                                size="lg"
                            >
                                <HiShoppingCart size={28} />
                                <span className={myFont.className}>$0.00</span>
                            </Button>
                            <Dropdown placement="right-end">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="secondary"
                                        name={data?.user?.name!}
                                        size="sm"
                                        src={data?.user?.image!}
                                    />
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Profile Actions"
                                    variant="shadow"
                                    color="secondary"
                                    disabledKeys={["user-info"]}
                                >
                                    <DropdownItem className="h-14 gap-2" key="user-info">
                                        <p className="font-semibold">{data?.user?.name}</p>
                                        <p className="text-xs">{data?.user?.email}</p>
                                    </DropdownItem>
                                    <DropdownItem
                                        startContent={<TbSunMoon />}
                                        onClick={toggleDarkMode}
                                    >
                                        {isDarkMode ? 'light' : 'dark'}
                                    </DropdownItem>
                                    <DropdownItem
                                        startContent={<LuLogOut />}
                                        key="logout"
                                        color="secondary"
                                        onClick={handleLogoutClick}
                                    >
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    )
                }
            </div>
        </div>
    )
}