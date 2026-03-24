import AutomationTimeline from "@/components/AutomationTimeline";
import SearchAnimation from "@/components/SearchAnimation";
import Contact from "@/sections/Contact";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import Pricing from "@/sections/Pricing";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <SearchAnimation />
            <LogoTicker />
            <Introduction />
            <Features />
            <AutomationTimeline />
            <Pricing />
            <Contact />
            <Footer />
        </>
    );
}
