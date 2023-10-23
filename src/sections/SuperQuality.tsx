import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="flex w-full justify-between px-10 items-center">
      <div className="w-1/2 space-y-10">
        <h1 className="text-4xl font-bold font-montserrat ">
          We Provide the Best Shoes
          <br /> in the Market
        </h1>
        <p>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Autem, assumenda.Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Autem,
          assumenda.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Autem, assumenda.
        </p>
        <button className="border rounded-full px-3 py-1 bg-coral-red flex justify-center items-center gap-2 max-lg:text-[12px]">
          Shop Now <img src={arrowRight} />
        </button>
      </div>
      <div>
        <img src={shoe8} alt="super quality" width={400} />
      </div>
    </section>
  );
};

export default SuperQuality;
