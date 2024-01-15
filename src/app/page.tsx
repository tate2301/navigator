import GeneralLayout from "@layouts/GeneralLayout";
import HeroSection from "./_components/page-sections/home-page-sections/HeroSection";

export default async function Home() {
  return (
    <GeneralLayout>
      <HeroSection />
    </GeneralLayout>
  );
}
