import { services } from "../constants/constants";

const Services = () => {
  return (
    <div className="flex gap-5 font-montserrat justify-center">
      {services.map((e) => (
        <div className="flex flex-col w-1/4 shadow-lg rounded-md p-4">
          <img
            src={e.imgURL}
            alt=""
            className="bg-coral-red p-1 rounded-full"
            width={30}
          />
          <br />
          <span className="text-xl font-bold">{e.label}</span>
          <br />
          <span className="break-words text-slate-gray">{e.subtext}</span>
        </div>
      ))}
    </div>
  );
};

export default Services;
