import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm bg-black/20">
            <div className="container mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Creative Gene. All rights reserved.</p>
                <p className="mt-2 text-xs opacity-60">Unveiling the Creative Force Within You.</p>

                <div className="mt-8 flex flex-col items-center gap-4">
                    <div className="h-px w-8 bg-white/10" />
                    <a
                        href="https://oheo.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 group"
                    >
                        <div className="relative w-13 h-13 opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                            <Image
                                src="/oheo.png"
                                alt="Oheo Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-[13px] tracking-[0.2em] uppercase opacity-85 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
                            Site by <span className="text-gray-300 font-semibold group-hover:text-primary transition-colors duration-500">Oheo</span>
                        </p>
                    </a>
                </div>
            </div>
        </footer>
    );
}
