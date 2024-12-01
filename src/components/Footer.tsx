import { BriefcaseBusiness, MapPinned, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
   return (
     <footer className="relative bg-[#0753AD] h-72 overflow-hidden mt-5">
       <div className="absolute -top-10 left-0 -right-3 h-14 bg-[#C0A001] rounded-sm rotate-1"></div>
       <p className="mt-10 w-72 text-xs text-white italic mx-auto">
         نقدم حلول مبتكرة من محترفي التصميم الداخلي والخارجي مصممة لتناسب نمط
         حياتك مع وضع ميزانيتنا في الاعتبار ومواكبة تفضيلاتك التي تجعل منزلك
         مميزًا عن المنازل المعتادة
       </p>
       <div className="flex justify-between mt-5 text-white w-72 mx-auto">
         <div className="flex items-center">
           <MapPinned className="w-4 h-11 max-md:w-7 max-md:h-7 max-sm:h-5" />
           <h4 className="text-xs mr-1 text-[#C0A001] font-bold">السقيم</h4>
         </div>
         <div className="flex items-center">
           <Phone className="w-4 h-10 max-xl1:h-8 max-xl1:w-9 max-md:w-7 max-md:h-7 max-sm:h-5" />
           <h4 className="text-xs mr-1 text-[#C0A001] font-bold">
             965 8827281
           </h4>
         </div>
         <div className="flex items-center">
           <BriefcaseBusiness className="w-4 h-10 max-xl1:h-8 max-xl1:w-9 max-md:w-8 max-md:h-8 max-sm:h-6" />
           <h4 className="text-xs mr-1 text-[#C0A001] font-bold">
             12:00 06:00
           </h4>
         </div>
       </div>
         <div className="flex justify-around mx-auto mt-7 w-32 max-md:my-3">
           <a href="https://www.instagram.com/" target="blank">
             <FaInstagram className="fill-white hover:fill-[#C0A001]" />
           </a>
           <a href="https://www.facebook.com/" target="blank">
             <FaFacebookF className="fill-white hover:fill-[#C0A001]" />
           </a>
           <a href="https://www.whatsapp.com/" target="blank">
             <FaWhatsapp className="fill-white hover:fill-[#C0A001]" />
           </a>
           </div>
           <h4 className="text-white text-center text-xs mt-10">2023 All Rights Saved@</h4>
     </footer>
   );

}

export default Footer;