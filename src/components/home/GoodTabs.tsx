import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import { Sidebar } from "./SideBar";
import SelGoods from "@/app/goods/goodTab/page";
const TabsData = [
    {
        title: "All",
        value: "all",
    },
    {
        title: "Georges",
        value: "georges",
    },
    {
        title: "Laces",
        value: "laces",
    },
    {
        title: "Waxes",
        value: "waxes",
    },
    {
        title: "Headties",
        value: "headties",
    },
    {
        title: "Ready to Wear",
        value: "readytoWear",
    },
    {
        title: " Accessories",
        value: "accessories",
    }
]
export default function GoodTabs() {
    return (
        <>
            <div className="md:block ">
                <div className="border-t">
                    <div className="bg-background dark:bg-[#18181b] ">
                        <div className="grid lg:grid-cols-5">
                            <Sidebar className="hidden lg:block" />
                            <div className="col-span-3 lg:col-span-4 lg:border-l min-h-[650px]">
                                <div className="h-full sm:px-4 py-6 lg:px-8 px-0">
                                    <Tabs defaultValue="all" className="h-full space-y-6">
                                        <div className="flex items-center justify-center md:justify-start">
                                            <TabsList className="sm:gap-1 sm:px-1 gap-0 px-0">
                                                {
                                                    TabsData.map((item, index) => (
                                                        <TabsTrigger value={item.value} className="relative" key={index}>
                                                            {item.title}
                                                        </TabsTrigger>
                                                    ))
                                                }
                                            </TabsList>
                                        </div>
                                        <Separator className="mt-4" />
                                        {
                                            TabsData.map((item, index) => (
                                                <TabsContent
                                                    key={index}
                                                    value={item.value}
                                                    className="border-none p-0 outline-none"
                                                >
                                                    <div className="relative">
                                                        <ScrollArea className="h-full">
                                                            <SelGoods text={item.value} />
                                                            <ScrollBar orientation="horizontal" />
                                                        </ScrollArea>
                                                    </div>
                                                </TabsContent>
                                            ))
                                        }
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
