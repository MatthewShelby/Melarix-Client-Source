import Loading from "../../loading";
import * as Data from "@as/js/data"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { VideoHelmet } from "../template/helmet";

function VideoPlay() {
      const { id } = useParams();


      const [video, setVideo] = useState()
      const [course, setCourse] = useState()
      const [ready, setReady] = useState()

      async function fetchVideo() {
            var courseVideo = await Data.getVideoById(id);
            console.info(courseVideo[0])

            setVideo(courseVideo[0])
            setTimeout(() => {
                  console.info(video)
            }, 1000);

            console.log('courseVideo.courseId: ' + courseVideo[0].courseId)
            var course = await Data.fetchSingleArticle(courseVideo[0].courseId)
            console.info(course)
            setCourse(course)
            var counter = 0
            var myInterval = setInterval(() => {
                  var check = setReadyState();
                  if (check || counter > 20) {
                        clearInterval(myInterval)
                  }
                  counter++
            }, 1000);
      }

      useEffect(() => {
            fetchVideo()
            const handleContextmenu = e => {
                  e.preventDefault()
            }
            document.addEventListener('contextmenu', handleContextmenu)
            return function cleanup() {
                  document.removeEventListener('contextmenu', handleContextmenu)
            }
      }, [])

      function setReadyState() {
            if (video != null && course != null) {
                  setReady(true)
                  return true
            }
            console.log(video)
            console.log(course)
            return false;
      }

      return (
            <>
                  {
                        video ?
                              <>
                                    <VideoHelmet video={video} course={video.parentCourse} />

                                    <video autoPlay controls className="vp" controlsList='nodownload'>
                                          <source src={video.url} />
                                    </video>

                              </> :
                              <Loading />

                  }
            </>
      )
}

export default VideoPlay