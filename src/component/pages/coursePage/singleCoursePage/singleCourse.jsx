




import { convertDuration, convertDurationString } from "@as/js/custom.js"
import { getCategoryForString } from "@as/js/categoryGuide"
import RatingStars from "./subComponent/rating-stars"
import CourseFullDescription from "./subComponent/courseFullDescription"
import DifficultyLevelBox from "./subComponent/difficulityLevelBox"
import CourseType from "./subComponent/courseType"
import PaymentOptions from "./subComponent/paymentOptions"
import VideoLinkBox from "./subComponent/videoLinkBox"
import BookmarkSign from "./subComponent/bookmarkSign"
import blub from "@as/image/template/E9.svg"
import { useState } from "react"

function SingleCourse({ courseData }) {
      console.log('catched course name: ' + courseData.courseName)
      console.info(courseData)

      const [accessLinks, setAccessLinks] = useState(false)
      const [showBox, setshowBox] = useState('display-none')
      function changeAccesssLink() {
            setAccessLinks(!accessLinks)
            if (showBox === 'display-none') {
                  setshowBox('display-block')
            } else {
                  setshowBox('display-none')
            }
      }

      return (
            <div className="course-body">
                  <img className="head-img" src={courseData.image} alt="" />
                  <h1 className="head-text">{courseData.courseName}</h1>

                  <h2 className="Shortdescription">
                        {courseData.shortDescription}
                  </h2>

                  <div>
                        <button onClick={() => {
                              if (showBox === 'display-none') {
                                    changeAccesssLink()
                              }
                              
                              setTimeout(() => {
                                    document.getElementById('video-box')?.scrollIntoView()

                              }, 100);
                        }} className="see-videos-btn">
                              See Videos List
                        </button>
                  </div>
                  <div className="longdescription">
                        <CourseFullDescription text={courseData.courseBody} />
                  </div>


                  <div className="course-info-body">

                        <div className="course-bulb">
                              <div className="bulb-b">
                                    <img width="400" height="400" src={blub} alt="background bulb" />
                              </div>
                              <div className="bulb-s">
                                    <img width="200" height="200" src={blub} alt="background bulb" />
                              </div>
                        </div>


                        <div className="course-info">
                              <div className="course-detail-head">
                                    Course Details:
                              </div>



                              <table className="content-table">
                                    <tbody>
                                          <tr>
                                                <td className="td-title">Title:</td>
                                                <td className="td-description">
                                                      <div className="first-td-desc">
                                                            <span className="f1">{courseData.shortTitle}</span>
                                                            <span className="f2">

                                                                  <BookmarkSign courseId={courseData.id} />

                                                            </span>
                                                      </div>


                                                </td>
                                          </tr>


                                          <tr>
                                                <td className="td-title">Category:</td>
                                                <td className="td-description"> {getCategoryForString(courseData.category)}
                                                </td>
                                          </tr>
                                          <tr>
                                                <td className="td-title">Technologies Used:</td>

                                                <td className="td-description  ">
                                                      <div className="tach-frame">
                                                            <div className="techs-bar" title="Technolgies Used in the course">

                                                                  {courseData.technologiesUsed.map((t, i) => (
                                                                        <div className="techs" key={i}>{t}</div>
                                                                  ))}

                                                            </div></div>
                                                </td>
                                          </tr>
                                          <tr>
                                                <td className="td-title">Course Duration:</td>
                                                <td className="td-description"  > <span title={convertDurationString(courseData.duration)}> {convertDuration(courseData.duration)}  </span>
                                                      &nbsp;&nbsp; - &nbsp;&nbsp; {courseData.numberOfReleasedVideos} {courseData.numberOfReleasedVideos > 1 ? 'Sessions' : 'Session'}</td>
                                          </tr>
                                          <tr>
                                                <td className="td-title">Rating:</td>
                                                <td className="td-description" title="">
                                                      <RatingStars number={courseData.rating ? courseData.rating : 5} />
                                                </td>
                                          </tr>

                                          <tr className="key-features">
                                                <td className="td-title">Key Takeaways:</td>
                                                <td className="td-description">
                                                      <ul>
                                                            {courseData.keyTakeaways.map((t, i) => (
                                                                  <li className="features-li" key={i}>
                                                                        <b>{t.head}:</b>
                                                                        &nbsp;
                                                                        {t.body} </li>
                                                            ))}

                                                      </ul>
                                                </td>
                                          </tr>
                                          <tr>
                                                <td className="td-title">Difficulty level:</td>
                                                <td className="td-description">
                                                      <DifficultyLevelBox dif={courseData.difficultyLevel} />
                                                </td>
                                          </tr>
                                          {courseData.prerequisites.length > 1 ?
                                                <tr>
                                                      <td className="td-title">Prerequisites:</td>
                                                      <td className="td-description">
                                                            {courseData.prerequisites}
                                                      </td>
                                                </tr>
                                                : ''}
                                          <tr>
                                                <td className="td-title">Type:</td>
                                                <td className="td-description"><CourseType courseTypeIndex={courseData.courseType} /></td>
                                          </tr>
                                          <tr>
                                                <td className="td-title">Teacher:</td>
                                                <td className="td-description">     <span> {courseData.author.name} </span>
                                                      {/* <td className="td-description">       - <a href="#">Teacher Profile</a> */}
                                                </td>
                                          </tr>
                                          <tr>
                                                <td className="td-title">Payment Options:</td>
                                                <td className="td-description">
                                                      <div className="payments-box">
                                                            <PaymentOptions courseAP={courseData.acceptedPayments} isFree={courseData.isAccessibleForFree} accessHandler={changeAccesssLink} />
                                                      </div></td>
                                          </tr>


                                    </tbody>
                              </table>

                        </div>
                        <div className={showBox} id="video-box">


                              <VideoLinkBox ids={courseData.videos} assetIds={courseData.sideAssets} />
                        </div>
                  </div>
            </div>
      )
}

export default SingleCourse 
