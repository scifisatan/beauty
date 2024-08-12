import Link from 'next/link'

import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@/components/icons/icons'

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
                                    +977-9849154030
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MailIcon className="h-6 w-6 text-primary" />
                                <a href="#" className="text-muted-foreground hover:text-primary">
                                   shrestharama305@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPinIcon className="h-6 w-6 text-primary" />
                                <span className="text-muted-foreground">Chahabel, Kathmandu</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ClockIcon className="h-6 w-6 text-primary" />
                                <span className="text-muted-foreground">Sun-Mon: 6am-7pm, Sat: Closed</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="aspect-video rounded-lg">
                            <div ><iframe title="Google Maps Embed" width="100%" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5546.915690805589!2d85.33844665871618!3d27.71616804485795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19751bcfeed5%3A0x3c3433feb99e1124!2sNail%20Hub%20%26%20Hair%20Training%20Centre!5e0!3m2!1sen!2snp!4v1723492240526!5m2!1sen!2snp"></iframe></div>
                            <div />
                        </div>
                        <div className="mt-8 flex justify-center gap-4">
                            <Link href="https://www.facebook.com/profile.php?id=100057090834828" className="text-muted-foreground hover:text-primary" prefetch={false}>
                                <FacebookIcon className="h-6 w-6" />
                            </Link>
                            <Link href="https://www.instagram.com/nailhub_hair/" className="text-muted-foreground hover:text-primary" prefetch={false}>
                                <InstagramIcon className="h-6 w-6" />
                            </Link>
                            <Link href="https://www.youtube.com/@NailHubandHairTrainingCentre" className="text-muted-foreground hover:text-primary" prefetch={false}>
                                <YoutubeIcon className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
