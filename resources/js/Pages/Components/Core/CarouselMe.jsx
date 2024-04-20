import React, { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Vans from "../../../assets/carousel.jpg";
import Arrival from "../../../assets/arrival.png";
import Gaming from "../../../assets/gaming.png";
import Autoplay from "embla-carousel-autoplay";
function CarouselMe() {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const carouselItems = [Vans, Arrival, Gaming];
    useEffect(() => {
        if (!api) {
            return;
        }
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    return (
        // <div className="max-w-[1100px] w-[1100px] min-w-[1100px]">
        <Carousel
            opts={{
                align: "start",
            }}
            setApi={setApi}
            plugins={[Autoplay({ delay: 2000 })]}
            className=" w-full h-[500px] rounded-[.5rem]"
        >
            <CarouselContent className="p-0">
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index} className>
                        <div>
                            <Card className="border-none rounded-[.5rem]">
                                <CardContent className="flex p-0 w-full outline-none  justify-center ">
                                    <img
                                        src={item}
                                        alt="Distributor Image"
                                        className="rounded-[.8rem] "
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
        // </div>
    );
}

export default CarouselMe;
