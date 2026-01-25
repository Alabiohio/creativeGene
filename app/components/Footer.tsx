export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <div className="container mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Creative Gene. All rights reserved.</p>
                <p className="mt-2 text-xs">Unveiling the Creative Force Within You.</p>
            </div>
        </footer>
    );
}
