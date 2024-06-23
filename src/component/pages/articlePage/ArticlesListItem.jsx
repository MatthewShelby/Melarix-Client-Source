
import { Link } from "react-router-dom";
function ArticlesListItem({ article }) {

      if (article.isPublished) {


            return (
                  <Link to={`/article/${article.title}`} className="no-text-decoration" target="_blank">
                        <div className="article-item-frame">
                              <div className="course-info div-flex">
                                    <div className="article-item-img-frame">
                                          <div className="article-item-img">
                                                <div className="article-item-img-inside">
                                                      <img className="item-image" src={article.mainImage} alt={article.shortTitle + ' image'} />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="article-item-info-frame">
                                          <h2>{article.shortTitle}</h2>
                                          <div className="article-item-info-description">
                                                <p>{article.longDescription}</p>
                                          </div>

                                    </div>

                              </div>
                        </div>
                  </Link>
            )
      } else {
            return (<></>)
      }
}

export default ArticlesListItem

