const TeamSection = () => {
  const RenderMembers = () => {
    return [
      {
        src: "assets\\acbf24eebb168dbc694b5eb6dd5c46bf-construction-engineer-project-drawings.webp",
        title: "علي",
      },
      {
        src: "assets\\acbf24eebb168dbc694b5eb6dd5c46bf-construction-engineer-project-drawings.webp",
        title: "محمد",
      },
      {
        src: "assets\\acbf24eebb168dbc694b5eb6dd5c46bf-construction-engineer-project-drawings.webp",
        title: "أحمد",
      },
    ].map((per, index) => (
      <div className="shadow-lg shadow-gray-400" key={index}>
        <img
          src={per.src}
          alt="personal images"
          className="w-36 bg-gray-200"
        />
        <div className="p-5">
          <p className="text-center font-bold">{per.title}</p>
          <p className="text-center font-bold text-xs text-gray-500">مقاول</p>
        </div>
      </div>
    ));
  };

  return (
    <section className="mt-10">
      <div className="text-center">
        <h1 className="text-xl font-bold lg:text-3xl">تعرف على الفريق</h1>
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
      <p className="text-center mt-5 text-gray-500 text-xs">
        لدينا فريق عمل رائع ومتكامل متخصص في المقاولات والبناء
      </p>
      <div className="mt-10">
        <div className="grid grid-cols-3 w-fit mx-auto gap-5 max-sm:grid-cols-1">
          {RenderMembers()}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
