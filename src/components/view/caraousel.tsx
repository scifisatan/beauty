import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Image from "next/image"

export function Images() {
    return (
        <>
            <section id="gallery" className="bg-background py-20 sm:py-32">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8 text-center">
                        <div>
                            <h2 className="text-3xl font-bold sm:text-4xl">Gallery</h2>
                        </div>
                        <Carousel className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                            <CarouselContent>
                                <CarouselItem>
                                    <img
                                        src="./1.webp"
                                        width={800}

                                        height={400}
                                        alt="Carousel Image 1"
                                        className="aspect-[2/1] rounded-lg object-cover mx-auto"
                                    />
                                </CarouselItem>
                                <CarouselItem>
                                    <img
                                        src="./3.webp"
                                        width={800}
                                        height={400}
                                        alt="Carousel Image 2"
                                        className="aspect-[2/1] rounded-lg object-cover mx-auto"
                                    />
                                </CarouselItem>
                           </CarouselContent>
                            <div className="hidden sm:block">
                                <CarouselPrevious />
                            </div>
                            <div className="hidden sm:block">
                                <CarouselNext />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}
