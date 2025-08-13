
export default function Footer() {
    return (
        <footer className="border-t bg-background py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Edge Computing Advisory Framework
            </div>
        </footer>
    );
}