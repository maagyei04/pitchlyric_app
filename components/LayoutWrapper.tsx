import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { MobileHeader } from "./MobileHeader";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar />
            <MobileHeader />
            <main className="md:ml-64 pb-16 md:pb-0 pt-16 md:pt-0 min-h-screen">
                {children}
            </main>
            <MobileNav />
        </>
    );
}
