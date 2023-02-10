export default function Footer() {
  return (
    <footer className="bg-gradient">
      <div className="px-[42px] lg:px-[100px] py-[52px] lg:py-[84px] gap-[42px] lg:gap-[64px] grid lg:grid-cols-4">
        <img src="/logo.png" className="h-[125px] mx-auto" alt="Logo" />
        <div className="space-y-[15px]">
          <h6 className="text-brand-blue text-center lg:text-left font-source text-[19px] font-semibold leading-[27px]">
            Contact Us
          </h6>
          <p className="text-brand-lightgray text-center lg:text-left font-source text-[14px] font-normal leading-[23px]">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p className="text-brand-lightgray text-center lg:text-left font-source text-[14px] font-normal leading-[23px]">
            example2020@gmail.com
          </p>
          <p className="text-brand-lightgray text-center lg:text-left font-source text-[14px] font-normal leading-[23px]">
            (904) 443-0343
          </p>
        </div>
        <div className="space-y-[15px]">
          <h6 className="text-brand-blue text-center lg:text-left font-source text-[19px] font-semibold leading-[27px]">
            More
          </h6>
          <p className="text-brand-lightgray text-center lg:text-left font-source text-[14px] font-normal leading-[23px]">
            About Us
          </p>
          <p className="text-brand-lightgray text-center lg:text-left font-source text-[14px] font-normal leading-[23px]">
            Products
          </p>
          <p className="text-brand-lightgray text-center lg:text-left font-source text-[14px] font-normal leading-[23px]">
            Career
          </p>
          <p className="text-brand-lightgray text-center lg:text-left font-source text-[14px] font-normal leading-[23px]">
            Contact Us
          </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-[14px] h-full">
          <div className="space-y-[15px]">
            <h6 className="text-brand-blue hidden lg:block font-source text-[19px] font-semibold leading-[27px]">
              Social Links
            </h6>
            <div className="flex items-center gap-[36px]">
              <img src="/instagram.svg" alt="Instagram" className="cursor-pointer" />
              <img src="/twitter.svg" alt="Twitter" className="cursor-pointer" />
              <img src="/facebook.svg" alt="Facebook" className="cursor-pointer" />
            </div>
          </div>
          <p className="text-brand-lightgray font-source text-[14px] font-normal leading-[23px]">
          © 2022 Food Truck Example
          </p>
        </div>
      </div>
    </footer>
  );
}
