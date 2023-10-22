import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SplOffer from "./sections/SplOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

const App = () => {
  return (
    <main className="relative">
      App
      <Navbar />
      <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
      <section>
        {/* dgfgfgdfghjk */}
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
  );
};

export default App;
