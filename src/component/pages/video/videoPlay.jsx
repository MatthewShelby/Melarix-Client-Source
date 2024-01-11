import Loading from "../../loading";
import * as Data from "@as/js/data"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { VideoHelmet } from "../template/helmet";
import PlayerWindow from "./playerComp";

function VideoPlay() {
      const { id } = useParams();


      const [video, setVideo] = useState()


      async function fetchVideo() {
            var courseVideo = await Data.getVideoAndCourseById(id);
            console.info(courseVideo)

            setVideo(courseVideo)

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


      return (
            <>
                  {
                        video ?
                              <>
                                    <VideoHelmet video={video} />

                                    <PlayerWindow url={video.url} />

                              </> :
                              <Loading />

                  }
            </>
      )
}

export default VideoPlay