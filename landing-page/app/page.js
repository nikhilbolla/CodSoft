import NavBar from "./components/Header/NavBar/NavBar";
import Hero from "./components/Header/Hero";
import Pricing from "./components/Pricing/Pricing";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import Services from "./components/Services/Services";


export default function Home() {
  return (
    <>
      <section className="header"  id="header"  >
        <NavBar />
        <Hero />
      </section>
      <section className="services" id="services"  >
        <Services />
      </section>
      <section className="pricing"  id="pricing"  >
        <Pricing />
      </section>
      <section className="aboutus"  id="aboutus"  >
        <AboutUs />
      </section>
      <section className="contantus"  id="contantus">
        <ContactUs />
      </section>
      <footer className="footer"   id="footer"  >
       <Footer />
      </footer>
    </>
  )
}
