import HeroSection from "@components/page-sections/home-page-sections/HeroSection";
import GeneralLayout from "@layouts/GeneralLayout";

export default async function Home() {
  return (
    <GeneralLayout>
      <HeroSection />
    </GeneralLayout>
  );
}
