import About from "@/components/home/About";
import ListBrand from "@/components/home/ListBrand";
import ListReview from "@/components/home/ListReview";
import ListTrendProductVariant from "@/components/home/ListTrendProductVariant";
import ListTrendStyle from "@/components/home/ListTrendStyle";

export default function Home() {
  return (
    <main className="">
      <About />
      <ListBrand />
      <ListTrendProductVariant />
      <ListTrendStyle />
      <ListReview />
    </main>
  );
}
