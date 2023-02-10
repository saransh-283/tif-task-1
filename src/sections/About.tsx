export default function About() {
  return (
    <section className="bg-gradient mt-[186px] body-font">
      <div className="lg:px-[204px] px-[50px] flex gap-[200px] items-center">
        <img className="h-full hidden lg:block" alt="hero" src="/about.png" />

        <div className="flex py-[140px] lg:py-[106px] flex-col lg:items-start lg:text-left items-center text-center space-y-7">
          <h1 className="text-brand-blue font-poppins font-semibold text-[45px] leading-[27px]">
            About Us
          </h1>
          <p className="leading-[27px] text-brand-lightgray font-open">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
          <div className="px-[26px] font-source py-[3px] rounded-[21px] bg-brand-orange text-[16px] leading-[36px] font-semibold text-white cursor-pointer">
            Read More
          </div>
        </div>
      </div>
    </section>
  );
}
