import Developer from "@/components/Developer";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MoreDetails from "@/components/MoreDetails";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingProjects from "@/components/UpcomingProjects";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
      <HeroSection />
      <FeaturedCourses />
      <MoreDetails />
      <TestimonialCards />
      <UpcomingProjects />
      <Developer />
      <Footer />
    </main>
  );
}
