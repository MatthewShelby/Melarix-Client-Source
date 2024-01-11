import { useState, useRef, useEffect } from "react";
import down from "@as/image/Icons/chevron-down.svg"
import up from "@as/image/Icons/chevron-up.svg"
function CourseFullDescription({ text }) {

      const partH = text.split('**********')[0]
      const partB = text.split('**********')[1]
      const [showMore, setShowMore] = useState(true);
      const [currentHeight, setCurrentHeight] = useState('auto');
      const [properHeight, setProperHeight] = useState(400);
      const componentRef = useRef()


      useEffect(() => {
            console.log('==================>>>>>>>>>>>>' + componentRef.current.offsetHeight)
            setProperHeight(componentRef.current.offsetHeight)
            cgo()

      }, [])
      function cgo() {
            if (!showMore) {
                  setCurrentHeight(properHeight + 'px')
            } else {
                  setCurrentHeight('0px')
            }
            setShowMore(!showMore)
      }
      return (
            <div validated={true} >
                  <div className="part1">
                        {/* <p>heightC: {heightC}</p> */}
                        <div dangerouslySetInnerHTML={{ __html: partH }}></div>
                  </div>
                  <div className={showMore ? "part2-show" : "part2"}
                        ref={componentRef}
                        style={{ height: currentHeight }} >
                        <div dangerouslySetInnerHTML={{ __html: partB }}></div>
                  </div>
                  <div className="part3">
                        <button className="show-btn" onClick={() => cgo()}>
                              {showMore ? "Show less" : "Show more"}
                              <img width="24" src={showMore ? up : down} alt="chevron" />
                        </button>
                  </div>
            </div>
      )

}



export default CourseFullDescription