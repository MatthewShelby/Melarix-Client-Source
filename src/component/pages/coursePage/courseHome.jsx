import HomeBigTitle from "./HomeBigTitle"
import CourseTable from "./courseTable"
import MainLayout from "../template/MainLayout"
function CourseHome() {
      return (
            <MainLayout>
                  <HomeBigTitle />
                  <CourseTable />
            </MainLayout>
      )
}
export default CourseHome