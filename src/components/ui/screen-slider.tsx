import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

export function ScreensSlider({ screens }: { screens: { title: string; img?: string; bg?: string }[] }) {
    const [zoom, setZoom] = useState<string | null>(null);

    return (
        <>
            <Carousel className="w-full">
                <CarouselContent>
                    {screens.map((screen, idx) => (
                        <CarouselItem key={idx} className="p-2">
                            <div
                                className="relative overflow-hidden rounded-xl border border-border bg-secondary/60 cursor-pointer"
                                onClick={() => screen.img && setZoom(screen.img)}
                            >
                                {screen.img ? (
                                    <Image
                                        src={screen.img}
                                        alt={screen.title}
                                        width={1200}
                                        height={800}
                                        className="object-cover rounded-lg"
                                    />
                                ) : (
                                    <div className={`h-56 rounded-lg bg-gradient-to-br ${screen.bg}`} />
                                )}

                                <div className="absolute bottom-2 left-2 bg-white/80 px-2 py-1 rounded text-xs font-medium">
                                    {screen.title}
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* Zoom */}
            <Dialog open={!!zoom} onOpenChange={() => setZoom(null)}>
                <DialogContent className="p-0 bg-transparent border-none shadow-none max-w-4xl">
                    {zoom && (
                        <Image
                            src={zoom}
                            alt="Zoomed"
                            width={2000}
                            height={2000}
                            className="rounded-xl object-contain w-full h-full"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
