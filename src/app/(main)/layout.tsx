
import Footer from "@/components/common/Footer";
import SideBar from "@/components/common/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

export default function MainRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <SideBar />
            <main className="flex-1 lg:ml-96">
                {children}
                <Footer />
            </main>
        </SidebarProvider>
    );
}
