import { useState, useEffect } from "react";
import axios from "axios";

const NewsList = () => {
     const[news, setNews] = useState([]);
     const[loading, setLoading] = useState(true);
     const API＿KEY = "d65873a8a31842d89ff7a16073560863";
     const URL = ``

useEffect(() => {
     const fetchNews = async () => {
          try {
               const response = await axios.get();
               setNews(response.data.articles);
          } catch (error) {
               console.error("ニュース取得エラー:", error);
          } finally {
               setLoading(false);
          }
     };
     fetchNews();
}, []);

if (loading) return <p>Loading...</p>;

return (
     <div>
          <h2>最新ニュース</h2>
          <ul>
               {news.map((article, index) => (
                    <li key={index}>
                         <h3>{article.title}</h3>
                         <p>{article.description}</p>
                         {article.urlToImage && <img src={article.urlToImage} alt={article.title} width="300"/>}
                         <a href={article.url} target="_black" rel="noopener nonreferrer">
                              記事を読む
                         </a>
                    </li>
               ))}
          </ul>
     </div>
);
};
export default NewsList;