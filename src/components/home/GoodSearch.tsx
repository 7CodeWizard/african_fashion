"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { ImSearch } from "react-icons/im";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "../common/Input";
import ImageSwiper from "../GoodDetails/ImageSwiper";
import { url } from "inspector";

// Sample image URLs for the carousel
const carouselImages = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
];

interface GoodSearchForm {
    text: string;
}

const GoodSearch = () => {
    const router = useRouter();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<GoodSearchForm>();

    const onSubmit = (data: GoodSearchForm) => {
        router.push(`/goods/search?text=${data.text}`);
    };

    return (
        <section
            className=" mt-16 p-5 text-center bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center min-h-screen"
            style={{ backgroundImage: "url('/background.jpg')" }}
        >
            <div className="hero">
                <h2 className="font-bold text-[48px] md:text-[60px] ">
                    Welcome to Iwu {" "}
                    <span className="bg-gradient-to-l from-primaryHotefy-neutral to-primaryHotefy-lighter dark:from-primaryHotefy-neutral dark:to-primaryHotefy-lighter text-transparent bg-clip-text">
                        African Fashion
                    </span>
                </h2>
                <p className="text-gray-600 p-8 dark:text-white text-[28px] md:text-[32px] max-w-3xl mx-auto font-[800]">
                    <span className="bg-gradient-to-r from-primaryHotefy-neutral to-primaryHotefy-lighter dark:from-primaryHotefy-neutral dark:to-primaryHotefy-lighter text-transparent bg-clip-text">
                        Home of the latest{" "}
                    </span>
                    African Fashion.
                </p>
            </div>
            <div className="w-full h-full">
                <ImageSwiper imagesUrl={carouselImages} />
            </div>

            <div className="flex flex-col items-center justify-center my-4 w-full max-w-5xl mx-auto rounded-xl">
                {errors.text && (
                    <span className="mb-2 font-medium text-xs text-red-400 dark:text-red-300 mx-auto md:mr-auto md:ml-0">
                        {errors.text.message}
                    </span>
                )}
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
                    <Input
                        placeholder="Search..."
                        autoComplete="off"
                        error={!!errors.text}
                        {...register("text", {
                            required: {
                                value: true,
                                message: "Digite o destino no campo de pesquisa!",
                            },
                        })}
                    />

                    <Button
                        color="secondary"
                        variant="shadow"
                        endContent={<ImSearch size={16} />}
                        className="w-full md:max-w-[10rem]"
                        onClick={() => handleSubmit(onSubmit)()}
                    >
                        Search
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default GoodSearch;
