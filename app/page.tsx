import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";
import { HomeBookingCta } from "@/components/home/HomeBookingCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHours } from "@/components/home/HomeHours";
import { HomePracticeStory } from "@/components/home/HomePracticeStory";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";
import { HomeStatsReviews } from "@/components/home/HomeStatsReviews";

const HomeTeamCarousel = dynamic(
  () =>
    import("@/components/home/HomeTeamCarousel").then((m) => ({
      default: m.HomeTeamCarousel,
    })),
  {
    loading: () => (
      <section
        className="bg-cream py-16 md:py-24"
        aria-busy="true"
        aria-label="Loading doctors section"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-[300px] rounded-xl bg-mist/40 md:h-[320px]" />
        </div>
      </section>
    ),
  },
);

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
