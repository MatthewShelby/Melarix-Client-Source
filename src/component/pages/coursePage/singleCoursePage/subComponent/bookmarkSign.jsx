import { useEffect, useState } from "react"
import markedIcon from "@as/image/Icons/bxs-bookmark.svg"
import unmarkedIcon from "@as/image/Icons/bx-bookmark.svg"
import { toggleBookmark, getAllBookmarkedCoursesFromCookie } from "@as/js/bookmark.js"



function BookmarkSign({ courseId }) {
      const [marked, setMarked] = useState(false)

      useEffect(() => {
            getAllBookmarkedCoursesFromCookie().then((allBM) => {
                  if (allBM.includes('bm' + courseId)) setMarked(true)
            })
      }, [])


      function bookmarkChange() {
            setMarked(!marked)
            toggleBookmark('bm' + courseId)
            console.log('bookmark change clicked')
      }

      return (
            <div className="card-foot-ribbon">
                  <img onClick={() => { bookmarkChange() }}
                        src={marked ? markedIcon : unmarkedIcon}
                        title={marked ? "Course has been marked," : "Bookmark the course for later"}
                        alt="bookmark icon" className="empty" width="16"/>
            </div>
      )
}

export default BookmarkSign