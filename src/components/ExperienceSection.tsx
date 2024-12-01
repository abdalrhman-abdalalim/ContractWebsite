const ExperienceSection = () => {
  return (
    <section className="container max-w-[950px] p-5 h-fit mx-auto lg:max-w-[1200px] lg:p-10">
      <div className="grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-2">
        {/* Images Div */}
        <div className="relative flex flex-col items-center mr-7 max-md:order-0 lg:mr-10">
          <img
            src="assets/pexels-sevenstormphotography-443383.jpg"
            alt="experience image"
            className="w-80 max-md:w-52 lg:w-[400px]"
          />
          <img
            src="assets/pexels-rezwan-1216589.jpg"
            alt="experience image"
            className="w-72 border-white border-8 relative -mt-36 max-md:w-48 -mr-20 max-md:-mt-[95px] max-sm:-mt-20 lg:w-[350px] lg:-mt-48 lg:-mr-24"
          />
        </div>
        {/* Texts Div */}
        <div className="flex-1 order-0 md:order-1">
          <h6 className="text-[#C0A001] font-bold text-[14px] max-md:text-[10px] lg:text-[18px]">
            فخورون بنا
          </h6>
          <h3 className="text-3xl font-bold max-md:text-[24px] lg:text-4xl">
            25 عامًا من الخبرة
          </h3>
          <p className="text-[12px] mt-5 max-md:text-[9px] lg:text-[16px]">
            لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
            الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم
            إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
          </p>
          <div className="flex justify-between mt-4">
            <div className="ml-3">
              <div>
                <h1 className="font-bold text-[13px] lg:text-[18px]">200 +</h1>
                <h6 className="text-[7px] text-gray-600 max-md:text-[6px] lg:text-[10px]">
                  وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم
                  إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عش
                </h6>
              </div>
              <div>
                <h1 className="font-bold text-[13px] lg:text-[18px]">50 +</h1>
                <h6 className="text-[7px] text-gray-600 max-md:text-[6px] lg:text-[10px]">
                  لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية
                  هي
                </h6>
              </div>
            </div>
            <div>
              <div>
                <h1 className="font-bold text-[13px] lg:text-[18px]">20 +</h1>
                <h6 className="text-[7px] text-gray-600 max-md:text-[6px] lg:text-[10px]">
                  وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم
                  إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عش
                </h6>
              </div>
              <div>
                <h1 className="font-bold text-[13px] lg:text-[18px]">2,930</h1>
                <h6 className="text-[7px] text-gray-600 max-md:text-[6px] lg:text-[10px]">
                  لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية
                  هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                  كان
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
