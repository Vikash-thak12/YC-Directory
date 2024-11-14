import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children}: Readonly<{children: React.ReactNode}>){
    return (
        <main className="font-wor">
            <Navbar />
            {children}
            <Toaster />
        </main>
    )
}