import PopularCards from "../components/PopularCards";

const PopularProducts = () => {
  return (
    <div className="px-10 font-montserrat space-y-8 max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center">
      <h1 className="text-4xl font-bold max-sm:text-lg">
        Our Popular <span className="text-coral-red">Products</span>
      </h1>
      <p className="w-1/2 max-sm:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus
        a neque perspiciatis voluptate distinctio possimus, soluta deleniti eius
        labore eum.
      </p>
      <section>
        <PopularCards />
      </section>
    </div>
  );
};

export default PopularProducts;
