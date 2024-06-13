import Faq from "@/app/ui/home/faq";
import Header from "@/app/ui/home/header";
import Promo from "@/app/ui/home/promo";
import TvPromo from "@/app/ui/home/tv-promo";

export default function Home() {
  return (
    <main>
      <Header />
      <Promo />
      <TvPromo />
      <Faq />
    </main>
  );
}
