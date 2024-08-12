import Link from 'next/link'
import { MapPinIcon } from '@/components/icons/icons'

export function Hero() {
    return (
        <section id="hero" className="bg-gradient-to-r from-primary to-primary-foreground py-20 sm:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-start justify-center space-y-6">
                        <h1 className="text-4xl font-bold text-background sm:text-5xl lg:text-6xl">
                            Elevate Your Beauty at Our Parlor
                        </h1>
                        <p className="text-lg text-background-foreground">
                            Experience the ultimate pampering and rejuvenation at our state-of-the-art beauty parlor. Let our
                            skilled professionals transform your look and boost your confidence.
                        </p>
                        <Link
                            href="https://maps.google.com/maps?ll=27.705891,85.334099&z=15&t=m&hl=en&gl=NP&mapclient=embed&cid=4338149510193484068"
                            className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            prefetch={false}
                        >
                            <MapPinIcon className="mr-2 h-5 w-5" />
                            Find Us on Maps
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <img
                            src="/hero.webp"
                            width="600"
                            height="400"
                            alt="Hero Image"
                            className="rounded-lg object-cover"
                            style={{ aspectRatio: "600/400", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
