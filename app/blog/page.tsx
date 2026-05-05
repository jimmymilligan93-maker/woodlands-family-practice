// TODO: Replace with Sanity CMS data source when CMS is configured

import { BookingCtaBanner } from "@/components/BookingCtaBanner";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Health information, practice updates and seasonal advice from our team."
      />
      <section className="bg-cream py-16 md:py-24">
        <BlogGrid />
      </section>
      <BookingCtaBanner />
      <Footer />
    </>
  );
}
