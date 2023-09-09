import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";


export default function Home() {
  return (
    <>
      <div className="header">
        <NavBar />
        <Hero />
      </div>
      <div className="services">
        <Services />
      </div>
    </>
  )
}
