
import AuthProtectedWrapper from "@/components/common/AuthWrapper";

export default function ProtectedPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <AuthProtectedWrapper>
            {children}
        </AuthProtectedWrapper>
    );
}
