import { Footer } from "@/components/Footer";
import { HomeBookingCta } from "@/components/home/HomeBookingCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHours } from "@/components/home/HomeHours";
import { HomePracticeStory } from "@/components/home/HomePracticeStory";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";
import { HomeStatsReviews } from "@/components/home/HomeStatsReviews";
import { HomeTeamCarousel } from "@/components/home/HomeTeamCarousel";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServicesSection />
      <HomePracticeStory />
      <HomeTeamCarousel />
      <HomeStatsReviews />
      <HomeHours />
      <HomeBookingCta />
      <Footer />
    </>
  );
}
