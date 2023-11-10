import About from "@/components/about/About";
import HomePage from "../components/home/Home";
import SectionDivider from "@/components/SectionDivider";
import { nav } from "@/lib/data";
import PageContact from "@/components/contact/PageContact";

export default function Home() {
  return (
    <main id={nav[0].link}>
      <HomePage />
      <SectionDivider />
      <About />
      <SectionDivider />
      <PageContact />
    </main>
  );
}
