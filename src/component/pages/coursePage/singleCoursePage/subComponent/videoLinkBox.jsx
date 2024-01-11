import * as Data from "@as/js/data"
import { useEffect, useState } from "react";
import Loading from "../../../../loading";
import { Link } from "react-router-dom";

function VideoLinkBox({ ids }) {

      const [videos, setVideos] = useState([])


      async function fetchVideos() {
            console.log('ids to search: ')
            console.info(ids)
            var courseVideos = await Data.getVideosFor(ids);
            console.info(courseVideos)

            setVideos(courseVideos)
            setTimeout(() => {
                  console.info(videos)
            }, 1000);
      }

      useEffect(() => {
            fetchVideos()
      }, [])


      return (<>
            <br />
            <div className="course-info">

                  {videos ? <>
                        {videos.map((v, i) => (
                              <p>Part {i + 1} :
                                    &nbsp;
                                    <Link className="card-foot-Readmore-link" target="_blank" to={{
                                          pathname: `/video/${v.id}`

                                    }}  >{v.title}</Link>
                              </p>

                        ))}
                  </>

                        :
                        <Loading />
                  }
            </div>
      </>)
}

export default VideoLinkBox