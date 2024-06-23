//#region imports
// import bookmark from "../../../asset/image/Icons/bx-bookmark.svg"
// import bookmarkFilled from "../../../asset/image/Icons/bxs-bookmark.svg"

import DifficultyLevelBox from "./singleCoursePage/subComponent/difficulityLevelBox"
import BookmarkSign from "./singleCoursePage/subComponent/bookmarkSign"
import CourseType from "./singleCoursePage/subComponent/courseType"

import time from "../../../asset/image/Icons/bx-time.svg"
import info from "../../../asset/image/Icons/bxs-info-circle.svg"
import btcCoin from "../../../asset/image/coin/BTC.png"
//
import { convertDuration, convertDurationString } from '../../../asset/js/custom'
// import { getAllBookmarkedCoursesFromCookie, toggleBookmark } from '../../../asset/js/bookmark'
import { Link } from "react-router-dom";
// import { useState, useRef, useEffect } from 'react'

//#endregion

function CourseCard({ course, altKey, handleClick, fReff }) {
      console.log('---  CourseCard   Started: ')
      console.info(course)



      return (
            <div className="card-frame">
                  <div className="card-border">
                        <img className="card-banner" src={course.image} alt="" />
                        <div className="card-title-frame">
                              <div className="card-title">
                                    {course.shortTitle}
                              </div>
                        </div>
                        <div className="card-shortDescription-frame">
                              <div className="card-shortDescription">

                                    {course.shortDescription}
                              </div>
                        </div>
                        <div className="techs-bar" title="Technolgies Used in the course">
                              {course.technologiesUsed.map((keyword, i) => (
                                    <div className="techs" key={i}>{keyword}</div>
                              ))}
                        </div>

                        <div className="card-info-bar">
                              <DifficultyLevelBox dif={course.difficultyLevel} />
                              <div className="card-info" title="Duration"><span><img className="info-icon" src={time} alt="Course duration icon" /></span> <span title={convertDurationString(course.duration)}> {convertDuration(course.duration)}  </span>
                              </div>
                              {/* <div className="card-info" title="Duration"><span><img className="info-icon" src={time} alt="Course duration icon" /></span> {convertDuration(course.duration)}
                              </div> */}
                              <div className="card-info" title="Course Type"><span><img className="info-icon" src={info} alt="Course type icon" /></span> <CourseType courseTypeIndex={course.courseType} /> </div>
                        </div>

                        <div className="card-foot-bar">
                              {course.isAccessibleForFree ? (
                                    <div className="card-foot-price" title="Course price"> Free </div>
                              ) : (
                                    <div className="card-foot-price" title="Course price in BTC">
                                          <div className="card-foot-price-logo">
                                                <img className="btcCoin" src={btcCoin} alt="Bitcoin logo" /></div>
                                          <div className="card-foot-price-text">{course.priceInBTC}</div>
                                    </div>
                              )}
                              <div className="read-ribbon">
                                    <BookmarkSign courseId={course.id} />
                                    {/* <div className="card-foot-ribbon" title="Mark it for later">
                                          <img id={"bm" + key}
                                                // onClick={toggleBookmark('001')}
                                                src={bookmark} alt="" className="empty" />
                                    </div> */}
                                    {/* <BookmarkBtn courseId={course.id} parentKey={altKey} handle={handleClick} ref={fReff} /> */}
                                    <div className="card-foot-Readmore" title="See full description">
                                          <Link className="card-foot-Readmore-link" target="_blank" to={{
                                                pathname: `/course/${course.title}`

                                          }}  >Read More</Link>

                                    </div>
                              </div>
                        </div>
                  </div>
            </div>

      )
}



export default CourseCard
