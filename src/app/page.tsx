import Footer from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import ReformsSection from "@/components/ReformsSection";
import Comments from "@/utility/GiscusComments";

export default function page() {
    return (
        <div>
            <HeroSection />
            <ReformsSection />
            <Comments />
            <Footer />
        </div>
    );
}
