import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import Heroes from "./_components/Heroes";
import Footer from "./_components/Footer";

export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center flex-1 gap-y-8 px-6 pb-10">
        <Header />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
