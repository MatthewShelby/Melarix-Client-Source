import MainLayout from "../template/MainLayout"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchArticles } from "@as/js/data"
import ArticlesListItem from "./ArticlesListItem";
import { getAllCategories } from "@as/js/categoryGuide"

const ArticleList = () => {
      const { rootCategory, mainCategory, subCategory, title } = useParams();
      const navigate = useNavigate();

      const [articles, setArticles] = useState([])

      useEffect(() => {
            fetchArticles().then(async (allArticles) => {

                  if (rootCategory) {

                        var categs = await getAllCategories()
                        var rootCatInd = categs.filter(c => c.title.toLowerCase() == rootCategory.toLowerCase() || c.title == rootCategory)
                        console.info(rootCatInd)
                        if (rootCatInd.length == 0) {
                              setArticles(allArticles)
                        } else {

                              var rootArticles = allArticles.filter(c => c.category[0] == rootCatInd[0].num)


                              if (mainCategory) {

                                    var mainIndexCat = categs[rootCatInd[0].num].mainCategories.filter(c => c.title.toLowerCase() == mainCategory.toLowerCase() || c.title == mainCategory)
                                    if (mainIndexCat.length == 0) {
                                          setArticles(rootArticles)
                                    } else {
                                          var mainIndex = mainIndexCat[0].num
                                          console.log('on main article ind: ' + mainIndex)
                                          var mainArticles = rootArticles.filter(c => c.category[1] == mainIndex)
                                          if (mainArticles.length == 0) {
                                                setArticles(rootArticles)
                                          } else {


                                                if (subCategory) {

                                                      var subIndexCats = categs[rootCatInd[0].num].mainCategories[mainIndex].subCategories.filter(c => c.title.toLowerCase() == subCategory.toLowerCase() || c.title == subCategory)
                                                      if (subIndexCats.length == 0) {
                                                            setArticles(mainArticles)
                                                      } else {

                                                            var subIndex = subIndexCats[0].num
                                                            console.log('on SUB articles ind: ' + subIndex)
                                                            var subArticles = mainArticles.filter(c => c.category[2] == subIndex)

                                                            if (subArticles.length == 0) {
                                                                  navigate("/");
                                                                  return
                                                            }

                                                            if (title) {

                                                                  console.log('on Article title  title: ' + title)
                                                                  var titleArticles = subArticles.filter(c => c.title.toLocaleLowerCase() == title.toLocaleLowerCase() || c.id == title)
                                                                  if (titleArticles.length == 0) {
                                                                        navigate("/");
                                                                        return
                                                                  }
                                                                  setArticles(titleArticles)
                                                            } else {
                                                                  setArticles(subArticles)
                                                            }
                                                      }

                                                } else {
                                                      setArticles(mainArticles)

                                                }
                                          }
                                    }

                              } else {
                                    setArticles(rootArticles)
                              }
                        }

                  } else {
                        setArticles(allArticles)
                  }
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