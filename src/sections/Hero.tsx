export default function Hero() {
  return (
    <div className="relative grid gap-[75px] lg:grid-cols-2">
      {/* Header */}
      <div className="absolute top-0 left-0 flex p-8 items-start w-full justify-between">
        <img src="/logo.png" alt="" className="ml-[68px] lg:visible invisible" />
        <div className="px-3 py-1 rounded-[21px] z-50 border bg-brand-orange border-white text-white cursor-pointer">
          Get In Touch
        </div>
      </div>

      {/* Left */}
      <div className="h-full w-full px-[68px] lg:pl-[100px] lg:pr-[260px] flex flex-col justify-center items-center lg:items-start order-2 lg:order-1 gap-y-[26px]">
        <h1 className="text-[62px] leading-[69px] text-center lg:text-left text-brand-blue font-semibold">
          Discover the
          <span className="text-brand-orange"> Best</span> Food and Drinks
        </h1>

        <p className="text-[16px] text-center lg:text-left text-brand-lightgray font-normal">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>

        <div className="px-[34px] mt-[15px] py-3.5 rounded-[34px] z-50 border bg-brand-orange text-[18px] font-bold text-white cursor-pointer">
          Explore Now!
        </div>
      </div>

      {/* Right */}
      <div className="relative lg:order-2">
        <img
          src="/blob.svg"
          alt="Blob"
          className="h-full w-[105%] absolute top-0 right-0"
        />
        <img src="/hero.png" alt="Hero Image" className="h-hull w-full" />
      </div>
    </div>
  );
}
