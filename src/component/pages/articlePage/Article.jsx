import { React, useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "@as/js/data"
import MainLayout from "../template/MainLayout"
import { ArticleHelmet } from "../template/helmet";
import ArticlePage from "./articleSinglePage";
import Loading from "../../loading";

const Article = () => {
      // const { contacts } = useLoaderData();
      const { id } = useParams();
      console.log('title from article.jsx: ' + id)
      const [article, setArticle] = useState()
      // const [helmet, setHelmet] = useState()
      useEffect(() => {

            fetchSingleArticle(id).then((art) => {
                  setArticle(art[0])
                  // setHelmet(<ArticleHelmet article={article} />)

            })
      }, [])



      return (
            <MainLayout>
                  {article ?
                        <>
                              <ArticleHelmet article={article} />
                              <ArticlePage article={article} />
                        </>
                        : <Loading />}
            </MainLayout>
      )
};

export default Article

