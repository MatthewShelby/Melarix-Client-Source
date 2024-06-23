import { useEffect, useState } from "react"
import CourseCard from "./courseCard"
import * as Data from "../../../asset/js/data"




function CourseTable({ search }) {
      const [courses, setCourses] = useState([])

      useEffect(() => {
            fetchCoursesLive()
      }, [])

      async function fetchCoursesLive() {
            var liveCourses = await Data.fetchCourses()
            console.log(' Table call database')
            console.info(liveCourses)
            setCourses(liveCourses)
      }


      return (
            <div className="course-frame">
                  {courses.map(
                        (co, i) => (
                              <CourseCard course={co}
                                    key={i}
                              />
                        )
                  )}
            </div>
      )
}


export default CourseTable