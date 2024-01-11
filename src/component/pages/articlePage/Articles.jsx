import MainLayout from "../template/MainLayout"
import { useEffect, useState } from "react";
import { fetchArticles } from "@as/js/data"
import ArticlesListItem from "./ArticlesListItem";

const ArticleList = () => {
      // Assuming articles is an array of article objects with unique IDs
      // const articles = [
      //       { id: 'how-to-use-metamask', title: 'How To Use Metamask' },
      //       { id: 'how-to-build-a-bitcoin-wallet', title: 'How To Build a Bitcoin Wallet from the screatch' },
      //       // Other articles
      // ];

      const [articles, setArticles] = useState([])

      useEffect(() => {
            fetchArticles().then((allArticles) => {
                  setArticles(allArticles)
                  // console.info(allArticles)
            })
      }, [])


      return (
            <MainLayout>
                  <div className="article-body">
                        <h1>Articles List:</h1><br />
                        {articles.map((article) => (
                              <ArticlesListItem article={article} />
                        ))}
                  </div>
            </MainLayout>
      );
};

export default ArticleList