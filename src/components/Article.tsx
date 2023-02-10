import { ArticleType } from "../interfaces/Article";

export default function Article({ image, heading, text }: ArticleType) {
  return (
    <div className="border border-[#93A2D361] p-[28px] lg:w-min rounded-[21px]">
      <img className="h-[257px] w-full min-w-[326px]" src={image} alt={heading} />
      <div className="px-[15px] w-full space-y-3.5 mt-[34px]">
        <div className="text-[21px] font-bold font-poppins leading-[27px] text-brand-blue">
          {heading}
        </div>
        <div className="text-[15px] font-normal font-open leading-[27px] text-brand-lightgray">
          {text}
        </div>
      </div>
    </div>
  );
}
