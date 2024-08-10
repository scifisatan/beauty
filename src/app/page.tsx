import { Testimonials } from "@/components/view/testimonials"
import { Navbar } from "@/components/view/navbar"
import { Hero } from "@/components/view/hero"
import { OurServices } from "@/components/view/services"
import { Footer } from "@/components/view/footer"
import { Images } from "@/components/view/caraousel"
import { ContactUs } from "@/components/view/contactus"

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Images />
        <OurServices />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div >
  )
}

