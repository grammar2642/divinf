"use client"

import { useState, useTransition } from "react"
import { NewsData } from "@/types/news";

export default function GetNews() {

  const [news, setNews] = useState<NewsData>();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState("us");

  const getNews = async() => {
    startTransition(async() => {
      const res = await fetch (`/api/news?country=${ country }`);
      const data = await res.json();
      setNews(data);
    });
  };
  return (
    <div className="items-center flex flex-col">
      <h1 className="text-4xl p-5">NEWS</h1>
      <input
      className="
      inline-block
      text-2xl
      text-center
      items-center
      border-1
      rounded-full
      mb-4
      p-4
      "
      type="text"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      placeholder="Enter country Code(sample: us, jp, kr, gb)"
      />

      <button onClick={getNews}
      className="text-2xl p-5 border-1 rounded-full inline-grid mb-5"
      >Getting News</button>

      {isPending && <p>Now Loading...</p>}

      {news && (
        <ul className="flex flex-col divide-y-1 text-left text-lg leading-16">
          {news.articles?.map((article: any, i: number) => (
            <li key={i}>
              <a href={article.url} target="_blank">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}