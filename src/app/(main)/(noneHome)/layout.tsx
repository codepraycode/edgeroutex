

import MobileOnlyHeader from "@/components/common/MobileOnlyHeader";

export default function MainRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <MobileOnlyHeader />
            {children}
        </>
    );
}
