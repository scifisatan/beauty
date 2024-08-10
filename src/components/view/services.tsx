import { ScissorsIcon, BrushIcon, SpadeIcon, SnailIcon, WandIcon, SkullIcon } from '@/components/icons/icons'

export function OurServices() {
    return (
        <section id="services" className="bg-muted py-20 sm:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 text-center">
                    <div>
                        <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
                        <p className="mt-4 text-muted-foreground">Discover our wide range of beauty treatments and services.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <ScissorsIcon className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Haircuts</h3>
                            <p className="mt-2 text-muted-foreground">Experience the perfect haircut tailored to your style.</p>
                        </div>
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <BrushIcon className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Makeup</h3>
                            <p className="mt-2 text-muted-foreground">Let our skilled artists enhance your natural beauty.</p>
                        </div>
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <SpadeIcon className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Spa Treatments</h3>
                            <p className="mt-2 text-muted-foreground">
                                Indulge in our luxurious spa treatments for ultimate relaxation.
                            </p>
                        </div>
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <SnailIcon className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Manicure & Pedicure</h3>
                            <p className="mt-2 text-muted-foreground">
                                Pamper your hands and feet with our expert nail care services.
                            </p>
                        </div>
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <WandIcon className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Hair Styling</h3>
                            <p className="mt-2 text-muted-foreground">
                                Transform your look with our professional hair styling services.
                            </p>
                        </div>
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <SkullIcon className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Skin Care</h3>
                            <p className="mt-2 text-muted-foreground">
                                Revitalize your skin with our customized skin care treatments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}