import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Shoecard from "../components/Shoecard";
import { statistics } from "../constants/constants";

const Hero = () => {
  const [shoeUrl, setShoeUrl] = useState<string>(bigShoe1);
  return (
    <div className="w-full flex xl:flex-row min-h-screen max-container max-sm:flex-col ">
      <section className=" pt-8 w-2/4 font-montserrat space-y-8 pl-10 max-lg:space-y-2 items-start justify-center flex flex-col max-sm:w-full max-sm:items-center max-sm:py-[100px]">
        <p className="text-xs text-coral-red lg:pt-10">Our Summer Collection</p>
        <h1 className="font-bold text-4xl max-lg:text-2xl bg-white flex-nowrap break-keep">
          The New Definition
        </h1>
        <p className="font-bold text-4xl max-lg:text-2xl">
          of&nbsp;
          <p className="text-coral-red inline-block ">Nike</p>
        </p>
        <p className="text-xs">
          Discover the new nike shoes for your daily comfort and casual events.
          <br />
          Be confident and comfortable with the new Nike shoes.
        </p>
        <button className="border rounded-full px-3 py-1 bg-coral-red flex justify-center items-center gap-2 max-lg:text-[12px]">
          Shop Now <img src={arrowRight} />
        </button>
        <section id="numbers" className="flex gap-5 pt-5">
          {statistics.map((value, index) => (
            <div key={index}>
              <p className="text-2xl font-bold">{value.value}</p>
              {value.label}
            </div>
          ))}
        </section>
      </section>
      <section className="max-lg:pt-32 bg-red-200 w-1/2 flex items-center justify-center bg-cover bg-center bg-hero flex-col relative max-sm:w-full max-sm:items-center max-sm:h-screen">
        <img
          src={shoeUrl}
          width={400}
          height={500}
          className="object-contain relative"
        />
        <div className="flex absolute bottom-[-30px] space-x-5">
          <Shoecard shoeUrl={shoeUrl} imgChange={setShoeUrl} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
