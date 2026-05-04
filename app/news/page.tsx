// TODO: Replace with Sanity CMS data source when CMS is configured

import { BookingCtaBanner } from "@/components/BookingCtaBanner";
import { Footer } from "@/components/Footer";
import { NewsGrid } from "@/components/news/NewsGrid";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "News & Updates",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Health information, practice updates and seasonal advice from our team."
      />
      <section className="bg-cream py-16 md:py-24">
        <NewsGrid />
      </section>
      <BookingCtaBanner />
      <Footer />
    </>
  );
}
