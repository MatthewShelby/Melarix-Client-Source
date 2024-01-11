import { getCategoryForBreadcrumb } from "../../../asset/js/categoryGuide"
import { fetchSingleArticle } from "@as/js/data"

import DifficultyLevelBox from "@co/pages/coursePage/singleCoursePage/subComponent/difficulityLevelBox"
import { useEffect, useState } from "react"
// melarix\src\component\pages\coursePage\singleCoursePage\subComponent\difficulityLevelBox.jsx

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
                              <p>                              By <a href="#" target="_blank"> {article.author.name + ' ' + article.author.familyName}</a>
                                    &nbsp;&nbsp; - &nbsp;&nbsp; Published at {article.datePublished.toString().substring(4, 15)}
                                    &nbsp;&nbsp; - &nbsp;&nbsp;
                              </p>
                              <DifficultyLevelBox dif={article.difficultyLevel} />
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
                        <div dangerouslySetInnerHTML={{ __html: article.articleBody }}></div>
                  </div>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  {
                        SA ?
                              <>
                                    <h4> Read more: </h4>

                                    {SA.map((sa) => (
                                          <>
                                                <a href={'./' + sa.url} target="_blank">{sa.title}</a>
                                                <br />
                                          </>
                                          // <Link to={`/article/${article.id}`}>{article.title}</Link>
                                    ))}
                              </>

                              : ""
                  }
            </div >
      )
}

export default ArticlePage