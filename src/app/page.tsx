import Link from "next/link"
import { Testimonials } from "@/components/view/testimonials"
import {
  ScissorsIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/icons/icons"
import { Navbar } from "@/components/view/navbar"
import { Hero } from "@/components/view/hero"
import { OurServices } from "@/components/view/services"

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OurServices />
        <Testimonials />
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
      </main>

    </div>
  )
}

