import Header from "@/components/layouts/Header";
import { PropsWithChildren } from "react";


export default function MainLayout({children}:PropsWithChildren) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}