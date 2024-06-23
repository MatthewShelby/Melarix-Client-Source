import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import CourseCard from "./courseCard"
import * as Data from "../../../asset/js/data"
import { getAllCategories } from "@as/js/categoryGuide"
import MainLayout from "../template/MainLayout"
function CourseList() {
      const { rootCategory, mainCategory, subCategory, title } = useParams();
      const navigate = useNavigate();

      const [courses, setCourses] = useState([])

      useEffect(() => {
            fetchCoursesLive()
      }, [])

      async function fetchCoursesLive() {
            // if (!rootCategory) {
            //       navigate("/");
            //       return
            // }
            console.log('rootCategory: ' + rootCategory)


            var liveCourses = await Data.fetchCourses()
            console.log(' Table call database')
            console.info(liveCourses)
            // setCourses(liveCourses)


            if (rootCategory) {

                  var categs = await getAllCategories()

                  var rootCatInd = categs.filter(c => c.title.toLowerCase() == rootCategory.toLowerCase() || c.title == rootCategory)
                  console.info(rootCatInd[0].title)
                  // handle rootCatInd[0].length == 0

                  console.log('on root courses ind: ' + rootCatInd[0].num)

                  var rootCourses = liveCourses.filter(c => c.category[0] == rootCatInd[0].num)
                  if (rootCourses.length == 0) {
                        setCourses(liveCourses)
                        return
                  }


                  console.info(rootCourses)
                  if (mainCategory) {
                        //var mainCatInd = categs[rootCatInd[0].num].mainCategory.filter(c => c.title.toLowerCase() == mainCategory.toLowerCase() || c.title == mainCategory)
                        // console.info(categs[rootCatInd[0].num].mainCategories.filter(c => c.title.toLowerCase() == mainCategory.toLowerCase() || c.title == mainCategory))
                        var mainIndexC = categs[rootCatInd[0].num].mainCategories.filter(c => c.title.toLowerCase() == mainCategory.toLowerCase() || c.title == mainCategory)
                        if (mainIndexC.length == 0) {
                              setCourses(rootCourses)
                              return
                        }


                        var mainIndex = mainIndexC[0].num
                        console.log('on main courses ind: ' + mainIndex)
                        var mainCourses = rootCourses.filter(c => c.category[1] == mainIndex)
                        if (mainCourses.length == 0) {
                              setCourses(rootCourses)
                              return
                        }
                        console.info(mainCourses)

                        if (subCategory) {
                              //var mainCatInd = categs[rootCatInd[0].num].mainCategory.filter(c => c.title.toLowerCase() == mainCategory.toLowerCase() || c.title == mainCategory)
                              // console.info(categs[rootCatInd[0].num].mainCategories.filter(c => c.title.toLowerCase() == mainCategory.toLowerCase() || c.title == mainCategory))
                              var subIndexC = categs[rootCatInd[0].num].mainCategories[mainIndex].subCategories.filter(c => c.title.toLowerCase() == subCategory.toLowerCase() || c.title == subCategory)
                              if (subIndexC.length == 0) {
                                    setCourses(mainCourses)
                                    return
                              }

                              var subIndex = subIndexC[0].num
                              console.log('on SUB courses ind: ' + subIndex)
                              var subCourses = mainCourses.filter(c => c.category[2] == subIndex)
                              if (subCourses.length == 0) {
                                    setCourses(mainCourses)
                                    return
                              }

                              console.info(subCourses)

                              if (title) {
                                    console.log('on title  title: ' + title)
                                    var titleCourses = subCourses.filter(c => c.title.toLocaleLowerCase() == title.toLocaleLowerCase() || c.id == title)

                                    if (titleCourses.length == 0) {
                                          setCourses(subCourses)
                                          return
                                    }
                                    setCourses(titleCourses)
                              } else {
                                    setCourses(subCourses)
                              }
                        } else {
                              setCourses(mainCourses)
                        }
                  } else {
                        setCourses(rootCourses)
                  }
            } else {
                  setCourses(liveCourses)

            }
      }

      return (
            <MainLayout>
                  <div className="course-frame">
                        {courses.map(
                              (co, i) => (
                                    <CourseCard course={co}
                                          key={i}
                                    />
                              )
                        )}
                  </div>
            </MainLayout>
      )

}


export default CourseList

