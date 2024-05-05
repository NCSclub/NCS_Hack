import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Agenda from "@/components/Agenda";
import Sponsors from "@/components/Sponsors";
import AboutNcsHack from "@/components/AboutNcsHack";
import AboutNcs from "@/components/AboutNcs";
import Hero from "@/components/Hero";

export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <AboutNcs />
      <AboutNcsHack />
      <Agenda />
      <Sponsors />
      <Footer />
    </div>
  )
}
