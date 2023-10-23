import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Shoecard from "../components/Shoecard";

const Hero = () => {
  const [shoeUrl, setShoeUrl] = useState<string>(bigShoe1);
  return (
    <div className="w-full flex xl:flex-row min-h-screen max-container">
      <section className="w-2/4 font-montserrat space-y-8 pl-10 max-lg:space-y-2 items-start justify-center flex flex-col">
        <p className="text-xs text-coral-red">Our Summer Collection</p>
        <h1 className="font-bold text-4xl max-lg:text-2xl bg-white flex-nowrap break-keep">
          The New Definition
        </h1>
        <h1 className="font-bold text-4xl max-lg:text-2xl">
          of
          <span className="text-coral-red inline-block ">{" Nike"}</span>
        </h1>
        <p className="text-xs">
          Discover the new nike shoes for your daily comfort and casual events.
          <br />
          Be confident and comfortable with the new Nike shoes.
        </p>
        <button className="border rounded-full px-3 py-1 bg-coral-red flex justify-center items-center gap-2 max-lg:text-[12px]">
          Shop Now <img src={arrowRight} />
        </button>
        <section id="numbers" className="flex gap-5 pt-5">
          <div>
            <p className="text-2xl font-bold">2k+</p>
            Brands
          </div>
          <div>
            <p className="text-2xl font-bold">500+</p>
            Shops
          </div>
          <div>
            <p className="text-2xl font-bold">260k+</p>
            Customers
          </div>
        </section>
      </section>
      <section className="bg-red-200 w-1/2 flex items-center justify-center bg-cover bg-center bg-hero flex-col relative">
        <img
          src={shoeUrl}
          width={400}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex absolute bottom-[-30px] space-x-5">
          <Shoecard shoeUrl={shoeUrl} imgChange={setShoeUrl} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
