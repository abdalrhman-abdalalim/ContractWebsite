import  serviceImg1  from "../../assets/conveyor.png"
import  serviceImg2  from "../../assets/workers.png";
import  serviceImg3  from "../../assets/processing.png";

const ServicesImages = () => {
   return (
     <section className="flex justify-center">
       <div className="w-72 bg-white h-48 mt-[-100px] p-8 max-md:w-44 max-sm:w-28 max-xs2:w-24 border border-gray-100">
         <img
           src={serviceImg1}
           alt="experienced team"
           className="w-14 mx-auto"
         />
         <h1 className="text-center text-[14px] font-bold mt-2 max-md:text-[10px] max-xs2:text-[7px]">
           Modern Technologies
         </h1>
         <p className="text-[8px] text-center text-gray-600 max-sm:truncate max-xs1:text-[5px]">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
           porro odio fugit ad sed autem sequi consectetur eum expedita, id a
           maiores, est at! Expedita illo possimus ipsa rem distinctio?
         </p>
       </div>
       <div className="w-72 bg-white h-[222px] mt-[-130px] p-8 pt-[62px] max-md:w-44 max-sm:w-28 max-xs2:w-24 border border-gray-100">
         <img
           src={serviceImg2}
           alt="experienced team"
           className="w-14 mx-auto"
         />
         <h1 className="text-center text-[14px] font-bold mt-2 max-md:text-[10px] max-xs2:text-[7px]">
           Experienced Team
         </h1>
         <p className="text-[8px] text-center text-gray-600 max-sm:truncate max-xs1:text-[5px]">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
           porro odio fugit ad sed autem sequi consectetur eum expedita, id a
           maiores, est at! Expedita illo possimus ipsa rem distinctio?
         </p>
       </div>
       <div className="w-72 bg-white h-48 mt-[-100px] p-8 max-md:w-44 max-sm:w-28 max-xs2:w-24 border border-gray-100 mb-5">
         <img
           src={serviceImg3}
           alt="experienced team"
           className="w-14 mx-auto"
         />
         <h1 className="text-center text-[14px] font-bold mt-2 max-md:text-[10px] max-xs2:text-[7px]">
           Quality Materials
         </h1>
         <p className="text-[8px] text-center text-gray-600 max-sm:truncate max-xs1:text-[5px]">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
           porro odio fugit ad sed autem sequi consectetur eum expedita, id a
           maiores, est at! Expedita illo possimus ipsa rem distinctio?
         </p>
       </div>
     </section>
   );
}

export default ServicesImages;