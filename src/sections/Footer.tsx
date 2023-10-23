import { footerLogo } from "../assets/images";
import { footerLinks } from "../constants/constants";

const footer = () => {
  return (
    <footer className="max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center">
      <img src={footerLogo} alt="" width={120} />
      <p className="w-1/2 py-10 max-sm:w-3/4 max-sm:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod
        mollitia minima reiciendis, dolor voluptate
      </p>
      {
        <section className="flex font-montserrat justify-between max-sm:flex-col">
          {footerLinks.map((e, index) => {
            return (
              <div key={index}>
                <p className="pb-4">{e.title}</p>
                <div className="flex-col flex">
                  {e.links.map((e) => {
                    return (
                      <a href={e.link} className="text-slate-gray py-1">
                        {e.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      }
      <section className="flex justify-between text-slate-gray pt-10 max-sm:flex-col max-sm:gap-3">
        <span>&#9400; Copyright. All rights reserved.</span>
        <span>Terms & Condition</span>
      </section>
    </footer>
  );
};

export default footer;
