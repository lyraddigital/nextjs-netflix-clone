import Hero from "@/app/ui/home/hero";
import TopBar from "@/app/ui/home/top-bar";

export default function Header() {
    return (
        <div className="min-h-[504px] bg-[url('/home/top-banner-small.jpg')] bg-cover">
            <div className="min-h-[504px] bg-gradient-to-t from-neutral-950 from-1% via-transparent via-70% to-neutral-950 to-96%">
                <header>
                    <TopBar />
                    <Hero />
                </header>
            </div>
        </div>
    );
}