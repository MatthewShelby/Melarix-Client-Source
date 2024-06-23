import * as Data from "@as/js/data"
import { useEffect, useState } from "react";
import Loading from "../../../../loading";
import { Link } from "react-router-dom";
import videoIcon from "@as/image/Icons/video-icon.svg"
import zipIcon from "@as/image/Icons/zip-icon.svg"

function VideoLinkBox({ ids, assetIds }) {

      const [videos, setVideos] = useState([])
      const [assets, setAssets] = useState([])


      async function fetchVideos() {
            console.log('assetIds to search: ')
            console.info(assetIds)
            var courseVideos = await Data.getVideosFor(ids);
            if (assetIds[0] != '') {
                  var courseAssets = await Data.getAssetsFor(assetIds);
                  setAssets(courseAssets)

            }

            console.info(courseVideos)
            console.info(courseAssets)

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

                  {
                        videos ?
                              <>
                                    {videos.map((v, i) => (
                                          <p key={i}>
                                                <img src={videoIcon} alt="Video Play Icon" width={'24'} />
                                                &nbsp;
                                                Part {i + 1} :
                                                &nbsp;
                                                <Link className="card-foot-Readmore-link" target="_blank" to={{
                                                      pathname: `/video/${v.id}`

                                                }}  >


                                                      {v.title}

                                                </Link>
                                          </p>

                                    ))}
                              </>

                              :
                              <Loading />
                  }
                  {
                        assets ?
                              <>
                                    {assets.map((v, i) => (
                                          <p key={i}>
                                                <img src={zipIcon} alt="Asset download Icon" width={'24'} />
                                                &nbsp;
                                                FIle {i + 1} :
                                                &nbsp;
                                                <a href={v.url} className="card-foot-Readmore-link">{v.assetTitle}</a>

                                          </p>

                                    ))}
                              </>

                              :
                              <></>
                  }
            </div>
      </>)
}

export default VideoLinkBox