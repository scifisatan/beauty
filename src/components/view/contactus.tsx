import Link from 'next/link'

import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, FacebookIcon, InstagramIcon, TwitterIcon } from '@/components/icons/icons'

export function ContactUs() {
    return (
        <section id="contact" className="bg-muted py-20 sm:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold sm:text-4xl">Get in Touch</h2>
                        <p className="mt-4 text-muted-foreground">
                            Contact us for more information or to schedule an appointment.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-2">
                                <PhoneIcon className="h-6 w-6 text-primary" />
                                <a href="#" className="text-muted-foreground hover:text-primary">
                                    +1 (234) 567-890
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MailIcon className="h-6 w-6 text-primary" />
                                <a href="#" className="text-muted-foreground hover:text-primary">
                                    info@beautyparlor.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPinIcon className="h-6 w-6 text-primary" />
                                <span className="text-muted-foreground">123 Main Street, Anytown USA</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ClockIcon className="h-6 w-6 text-primary" />
                                <span className="text-muted-foreground">Mon-Sat: 9am - 7pm, Sun: Closed</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="aspect-video rounded-lg">
                            <div ><iframe title="Google Maps Embed" width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                            <div />
                        </div>
                        <div className="mt-8 flex justify-center gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                                <FacebookIcon className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                                <InstagramIcon className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                                <TwitterIcon className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
