import CustomerReviews from "./sections/CustomerReviews";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SplOffer from "./sections/SplOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

import { useRef } from "react";

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main
        data-scroll-container
        ref={ref}
        className="relative"
        data-scroll-speed="4"
      >
        <Navbar />
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero />
        </section>

        <section>
          <PopularProducts />
        </section>
        <section>
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SplOffer />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding-x bg-black padding-t pb-8 text-white">
          <Footer />
        </section>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
