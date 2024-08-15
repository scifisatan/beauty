import { ScissorsIcon, BrushIcon, SnailIcon } from '@/components/icons/icons'

export function Courses() {
    return (
        <section id="courses" className=" bg-background  p-20 sm:p-32 ">

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 text-center">
                    <div>
                        <h2 className="text-3xl font-bold sm:text-4xl">Salon Courses</h2>
                        <p className="mt-4 text-muted-foreground">
                            Learn the art of beauty services from our experienced professionals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg bg-muted p-6 shadow-sm">
                            <ScissorsIcon className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Haircutting</h3>
                            <p className="mt-2 text-muted-foreground">Master the techniques of precision haircuts.</p>
                        </div>
                        <div className="rounded-lg bg-muted p-6 shadow-sm">
                            <BrushIcon className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Makeup Artistry</h3>
                            <p className="mt-2 text-muted-foreground">Learn the art of transformative makeup application.</p>
                        </div>
                        <div className="rounded-lg bg-muted p-6 shadow-sm">
                            <SnailIcon className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Manicure & Pedicure</h3>
                            <p className="mt-2 text-muted-foreground">Develop expert nail care and treatment techniques.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
