import { getCategoryForBreadcrumb } from "../../../asset/js/categoryGuide"
import { fetchSingleArticle } from "@as/js/data"
import { Link } from "react-router-dom";
import DifficultyLevelBox from "@co/pages/coursePage/singleCoursePage/subComponent/difficulityLevelBox"
import { useEffect, useState } from "react"

function ArticlePage({ article }) {
      const [SA, setSA] = useState([])

      console.info(article)
      const categories = getCategoryForBreadcrumb(article.category)
      async function getSuggestions() {
            var resArray = new Array();
            for (let i = 0; i < article.suggestedArticles.length; i++) {
                  await fetchSingleArticle(article.suggestedArticles[i]).then((art) => {
                        console.info(art)
                        resArray.push({ "title": art[0].shortTitle, "url": art[0].title })
                        // resArray.push({
                        //       title: art[0].shortTitle,
                        //       url: art[0].url
                        // })
                  })
            }
            setSA(resArray)
            setTimeout(() => {
                  console.info(SA)

            }, 2000);
      }
      useEffect(() => {
            if (article.suggestedArticles[0] != "") getSuggestions()
      }, [])
      const htmlBody = (article.articleBody)

      return (
            <div className="article-body">
                  <div className="breadcrumb-heading">
                        Articles / {categories[0]} / {categories[1]} / {categories[2]}
                  </div>
                  <div className="article-heading">
                        <h1 className="main-title">
                              {article.articleName}
                        </h1>
                        <h2 className="main-title-sub">
                              {article.about}
                        </h2>
                        <div className="main-title-sub-info" >
                              <div className="main-title-sub-info-desktop">
                                    <p>                              By <a href="#" target="_blank"> {article.author.name + ' ' + article.author.familyName}</a>
                                          &nbsp;&nbsp; - &nbsp;&nbsp; Published on <span className="date-font-family"> {article.datePublished.toString().substring(0, 10).replace('-', '/').replace('-', '/')}</span>
                                          &nbsp;&nbsp; - &nbsp;&nbsp;
                                    </p>
                              </div>
                              <div className="main-title-sub-info-mobile">
                                    <p>                              By <a href="#" target="_blank"> {article.author.name + ' ' + article.author.familyName}</a></p>
                                    <p>
                                          Published on <span className="date-font-family"> {article.datePublished.toString().substring(0, 10).replace('-', '/').replace('-', '/')}</span>

                                    </p>
                              </div>

                              <div>
                                    <DifficultyLevelBox dif={article.difficultyLevel} />

                              </div>
                        </div>
                  </div>


                  <div className="main-image-frame">
                        <img src={article.mainImage} alt="" className="main-image" />
                  </div>

                  <div className="neck">
                        <h2>Short Description: {article.shortDescription}</h2>
                        <h3>Target audience:</h3>
                        <ul>
                              {article.audience.map((a) => (
                                    <li>{a}</li>
                              ))}
                        </ul>
                  </div>


                  <div className="article-content-body">

                        <div dangerouslySetInnerHTML={{ __html: htmlBody }}  ></div>
                  </div>
                  { SA ?
                              <><h4> Read more: </h4>

                                    {SA.map((sa) => (
                                          <>
                                                <Link to={`/article/${sa.url}`} className="no-text-decoration" target="_blank">{sa.title}</Link>
                                                <br />
                                          </>
                                          // <Link to={`/article/${article.id}`}>{article.title}</Link>
                                    ))} </> : ""
                  }
            </div >
      )
}

export default ArticlePage