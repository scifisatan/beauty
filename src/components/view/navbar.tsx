import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ScissorsIcon, MenuIcon } from '@/components/icons/icons'
export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <ScissorsIcon className="h-6 w-6 text-primary" />
                    <span className="text-lg font-semibold">Beauty Parlor</span>
                </Link>
                <nav className="hidden space-x-4 sm:flex">
                    <Link href="#home" className="text-sm font-medium hover:text-primary" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#services" className="text-sm font-medium hover:text-primary" prefetch={false}>
                        Services
                    </Link>
                    <Link href="#testimonials" className="text-sm font-medium hover:text-primary" prefetch={false}>
                        Testimonials
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary" prefetch={false}>
                        Contact
                    </Link>
                </nav>
                <Button size="sm" className="hidden sm:inline-flex">
                    Book Now
                </Button>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="sm:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="sm:hidden">
                        <div className="grid gap-4 p-4">
                            <Link href="#home" className="text-sm font-medium hover:text-primary" prefetch={false}>
                                Home
                            </Link>
                            <Link href="#services" className="text-sm font-medium hover:text-primary" prefetch={false}>
                                Services
                            </Link>
                            <Link href="#testimonials" className="text-sm font-medium hover:text-primary" prefetch={false}>
                                Testimonials
                            </Link>
                            <Link href="#contact" className="text-sm font-medium hover:text-primary" prefetch={false}>
                                Contact
                            </Link>
                            <Button size="sm">Book Now</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}