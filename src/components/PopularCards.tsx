import { products } from "../constants/constants";

const PopularCards = () => {
  return (
    <section
      id="popular Products"
      className="flex gap-4 max-lg:flex-col max-lg:justify-center max-lg:items-center"
    >
      {products.map((e, index) => (
        <div
          key={index}
          className="flex-1 max-lg:justify-center max-lg:items-center cursor-pointer"
        >
          <img src={e.imgURL} width={200} />
          <span className="flex max-sm:justify-center">
            ⭐<p className="font-bold">(4.5)</p>
          </span>
          <p>{e.name}</p>
          <p className="text-coral-red font-bold">{e.price}</p>
        </div>
      ))}
    </section>
  );
};

export default PopularCards;
