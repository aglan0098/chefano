import Home_Header from "./_components/home/Home_Header";
import Hero from "./_components/home/Hero";
import Courses from "./_components/home/Courses";
import Special from "./_components/home/Special";
import Communities from "./_components/home/Communities";
import Visitors from "./_components/home/Visitors";

export default function Home() {
  return (
    <>
      <Home_Header />
      <Hero />
      <Courses />
      <Special />
      <Communities />
      <Visitors />
    </>
  );
}
