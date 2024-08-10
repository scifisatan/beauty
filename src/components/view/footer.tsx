import { ScissorsIcon } from '@/components/icons/icons'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-primary py-6">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <Link href="#home" className="flex items-center gap-2">
                        <ScissorsIcon className="h-6 w-6 text-primary-foreground" />
                        <span className="text-sm text-primary-foreground font-semibold">Beauty Parlor</span>
                    </Link>
                    <p className="text-sm text-primary-foreground">&copy; 2024 Beauty Parlor. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <span className="text-primary-foreground  ">
                            Privacy Policy
                        </span>

                    </div>
                </div>
            </div>
        </footer>
    )
}