import { GenerateSection } from "@/components/generate";
import { Header } from "@/components/header";
import ImageSwiper from "@/components/imageSwiper";

export default function Main() {
  return (
    <div className="min-h-screen ">
      <Header />
      <main>
        <ImageSwiper />
        <GenerateSection />
      </main>
    </div>
  );
}
