import { ChevronRight } from "lucide-react";
import backGroundUrl from "../../assets/billy-freeman-J8Lr5bLerQ8-unsplash.jpg";

const ImageSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${backGroundUrl})`,
      }}
      className="w-full h-screen bg-cover bg-top overflow-x-hidden"
    >
      <div className="h-screen flex items-center justify-center">
        <div>
          <h1 className="text-center text-[#C0A001] font-bold text-xl">
            STring Hand #
          </h1>
          <h1 className="text-center text-white font-bold text-6xl max-md:text-3xl max-sm:text-xl">
            Contracting Company
          </h1>
          <p className="text-xs text-center text-white mt-9 text-wrap w-[700px] max-md:w-[500px] max-md:mt-5 max-sm:w-[300px] max-sm:mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
            soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur exercitationem dolore enim consectetur! Eligendi
            recusandae placeat amet ipsum quis at.
          </p>
          <div className="flex items-center justify-around w-72 mt-2 mx-auto">
            <button className="bg-transparent p-3 rounded-3xl border flex items-center text-white hover:scale-110 transition-all duration-200 ease-in-out max-sm:p-2 max-sm:text-sm">
              <ChevronRight size={20} />
              Contact Us
            </button>
            <button className="bg-[#C0A001] p-3 rounded-3xl flex items-center hover:scale-110 transition-all duration-200 ease-in-out max-sm:p-2 max-sm:text-sm">
              <ChevronRight size={20} />
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
