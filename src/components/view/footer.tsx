import { ScissorsIcon } from '@/components/icons/icons'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-muted py-8">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <Link href="#home" className="flex items-center gap-2">
                        <ScissorsIcon className="h-6 w-6 text-primary" />
                        <span className="text-sm font-semibold">Beauty Parlor</span>
                    </Link>
                    <p className="text-sm text-muted-foreground">&copy; 2024 Beauty Parlor. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:" prefetch={false} />
                    </div>
                </div>
            </div>
        </footer>
    )
}