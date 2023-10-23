import { shoes } from "../constants/constants";

const Shoecard = ({
  shoeUrl,
  imgChange,
}: {
  shoeUrl: string;
  imgChange: (a: string) => void;
}) => {
  const handleClick = (e: string) => {
    imgChange(e);
  };
  return (
    <>
      {shoes.map((shoe, index) => (
        <div
          onClick={() => handleClick(shoe.bigShoe)}
          key={index}
          className={`p-5 rounded-md border-2 bg-hero focus:border-2 hover:border-collapse cursor-pointer bg-cover ${
            shoe.bigShoe === shoeUrl ? "border-coral-red" : "border-white"
          }`}
        >
          <img width={50} src={shoe.bigShoe} />
        </div>
      ))}
    </>
  );
};

export default Shoecard;
