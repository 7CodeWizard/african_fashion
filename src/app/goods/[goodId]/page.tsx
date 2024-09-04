
import { prisma } from "@/lib/prisma";
import "swiper/swiper-bundle.css";

import GoodHeader from "@/components/GoodDetails/GoodHeader";
import GoodDivider from "@/components/GoodDetails/GoodDivider";
import ImageSwiper from "@/components/GoodDetails/ImageSwiper";
import PrismaDisconnect from "@/components/common/PrismaDisconnect";
import GoodInfo from "@/components/GoodDetails/GoodInfo";


const getGoodDetails = async (goodId: string) => {
    try {

    } catch (error) {

    } finally {

    }
    const good = await prisma.good.findUnique({
        where: {
            id: goodId,
        },
    });

    return good;
};

const GoodDetails = async ({ params }: { params: { goodId: string } }) => {
    const good = await getGoodDetails(params.goodId);

    if (!good) return null;

    <PrismaDisconnect />;

    return (
        <section className="overflow-x-hidden dark:bg-[#18181b]">
            <div className="w-full h-full">
                <ImageSwiper imagesUrl={good.imagesUrl} />
            </div>

            <div className="w-full mx-auto p-4 flex flex-col">
                <GoodHeader good={good} />
                <GoodDivider />
                {/* <TripReservation maxGuests={good.maxGuests} pricePerDay={good.price as any} tripId={good.id} /> */}
                {/* <TripDivider /> */}
                <GoodInfo good={good} />
                <GoodDivider />
                {/* <TripLocation good={good} /> */}
            </div>
        </section>
    );
};

export default GoodDetails;
