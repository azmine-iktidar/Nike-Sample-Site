import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SplOffer = () => {
  return (
    <div className="flex w-full justify-between items-center max-lg:flex-col-reverse">
      <section
        id="bigiamge"
        className="flex max-lg:items-center max-lg:justify-center"
      >
        <img
          src={offer}
          alt=""
          width={700}
          height={687}
          className="object-contain flex-1 max-lg:w-1/2"
        />
      </section>
      <section id="writeup" className="w-1/2 ">
        <div className="space-y-10 max-sm:w-full">
          <h1 className="text-4xl font-bold font-montserrat max-sm:text-lg max-sm:w-full max-lg:text-lg max-lg:text-center">
            Get The Best Offer <br /> in the Market <br /> Today
          </h1>
          <p className="max-sm:text-xs max-lg:text-xs max-lg:text-center">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Autem, assumenda.Lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            assumenda.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Autem, assumenda.
          </p>
          <section className="flex gap-5 max-lg:justify-center">
            <button className="border rounded-full px-3 py-1 bg-coral-red flex justify-center items-center gap-2 max-lg:text-[12px]">
              Visit Now <img src={arrowRight} />
            </button>
            <button className="border-slate-gray border-2 rounded-full px-3 py-1 flex justify-center items-center gap-2 max-lg:text-[12px] hover:font-bold">
              View Details
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default SplOffer;
