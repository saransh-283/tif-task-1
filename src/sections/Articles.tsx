import { useState } from "react";
import Article from "../components/Article";
import { ArticleType } from "../interfaces/Article";

let articles: ArticleType[] = [
  {
    image: "/article1.png",
    heading: "Grilled  Tomatoes at Home",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: "/article2.png",
    heading: "Snacks for Travel",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: "/article3.png",
    heading: "Post-workout Recipes",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: "/article4.png",
    heading: "How To Grill Corn",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: "/article5.png",
    heading: "Crunchwrap Supreme",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: "/article6.png",
    heading: "Broccoli Cheese Soup",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

export default function Articles() {
    const [page, setPage] = useState(0);
    
    const increment = () => {
        if (page === 1) return
        setPage(page+1)
    }

    const decrement = () => {
        if (!page) return
        setPage(page-1)
    }

  return (
    <div className="px-[52px] lg:px-[108px] pt-[158px] pb-[65px] space-y-[64px]">
      <h2 className="font-source font-semibold text-[56px] text-center lg:text-left leading-[42px] text-brand-blue">
        Latest Articles
      </h2>

      <div className="flex flex-col lg:flex-row w-full justify-between">
        {articles
          .slice(page * 3, (page + 1) * 3)
          .map((article: ArticleType, idx: number) => (
            <Article {...article} key={idx} />
          ))}
          </div>
          
          <div className="flex items-center justify-center gap-3.5">
              <div onClick={decrement} className="grid place-items-center rounded-[5px] border border-brand-gray cursor-pointer p-2">
                  <img src="/back.svg" alt="Back" />
              </div>
              {page + 1}/2
              <div onClick={increment} className="grid place-items-center rounded-[5px] border border-brand-gray cursor-pointer p-2">
                  <img src="/next.svg" alt="Next" />
              </div>
          </div>
    </div>
  );
}
