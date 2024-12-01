const OurServicesSection = () => {
  return (
    <section className="mt-10 lg:mt-16">
      <div className="text-center">
        <h1 className="text-xl font-bold lg:text-3xl">خدمات ذات جودة عالية</h1>
        <div className="flex items-center justify-around w-48 mx-auto lg:w-64">
          <hr className="border border-[#FFC048] w-20 lg:w-32" />
          <img
            src="assets/square.png"
            alt=" square image"
            className="w-5 rotate-45 lg:w-8"
          />
          <hr className="border border-[#FFC048] w-20 lg:w-32" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-3 max-sm:grid-cols-1 lg:gap-8">
        {/* Service Card */}
        {[
          { src: "assets/drilling.png", title: "التعدين الأرضي" },
          { src: "assets/delivery.png", title: "توريد المواد" },
          { src: "assets/workers.png", title: "طاقم المبنى" },
          { src: "assets/people.png", title: "استشارات" },
          { src: "assets/engineer.png", title: "بنيان" },
          { src: "assets/crane.png", title: "خدمة الرافعة" },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white h-fit p-5 lg:p-8 shadow-md rounded-lg"
          >
            <img
              src={service.src}
              alt={service.title}
              className="w-10 mx-auto lg:w-16"
            />
            <h1 className="text-center text-[12px] font-bold mt-1 lg:text-[16px] lg:mt-4">
              {service.title}
            </h1>
            <p className="text-[5px] text-center mt-3 lg:text-[10px] lg:mt-6">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
