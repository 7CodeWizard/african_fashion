"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from "next/image";

interface ImageSwiperProps {
    imagesUrl: string[];
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({ imagesUrl }) => {
    const [slidesPerView, setSlidesPerView] = useState<number>(2);
    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(2);
            }
        };

        updateSlidesPerView();

        window.addEventListener("resize", updateSlidesPerView);

        return () => {
            window.removeEventListener("resize", updateSlidesPerView);
        };
    }, []);

    return (
        <div className="swiper-container">
            <Swiper
                spaceBetween={10} // Adjust space between slides
                slidesPerView={1} // Default slides per view
                breakpoints={{
                    768: {
                        slidesPerView: 1, // 2 slides for medium screens
                    },
                    1024: {
                        slidesPerView: 2, // 3 slides for larger screens
                    },
                }}
                pagination={{ clickable: true }}
                navigation
            >
                {imagesUrl.map((imageUrl, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-slide" key={index}>
                            <div className="relative h-72 md:h-96 w-full">
                                <Image
                                    src={imageUrl}
                                    alt={`Slide ${index + 1}`}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSwiper;
