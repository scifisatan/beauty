export function Testimonials() {
    return (
        <section id="testimonials" className="bg-background py-20 sm:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 text-center">
                    <div>
                        <h2 className="text-3xl font-bold sm:text-4xl">What Our Clients Say</h2>
                        <p className="mt-4 text-muted-foreground">Hear from our satisfied customers about their experiences.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <blockquote>
                                <p className="text-muted-foreground">
                                    "The team at Beauty Parlor is truly exceptional. They\n transformed my look and left me feeling
                                    more confident\n than ever."
                                </p>
                                <cite className="mt-4 block text-sm font-medium">- Jane Doe</cite>
                            </blockquote>
                        </div>
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <blockquote>
                                <p className="text-muted-foreground">
                                    "I've been a loyal customer of Beauty Parlor for years.\n The level of service and attention to
                                    detail is\n unparalleled."
                                </p>
                                <cite className="mt-4 block text-sm font-medium">- John Smith</cite>
                            </blockquote>
                        </div>
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <blockquote>
                                <p className="text-muted-foreground">
                                    "Beauty Parlor has become my go-to destination for all my\n beauty needs. The staff is incredibly
                                    knowledgeable and\n makes the experience truly enjoyable."
                                </p>
                                <cite className="mt-4 block text-sm font-medium">- Sarah Lee</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}