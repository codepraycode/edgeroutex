

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 ">
            {children}
        </section>
    );
}
