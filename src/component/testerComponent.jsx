import { useParams } from "react-router-dom"

function Test() {
      const { id, mainCategory, midCategory, subCategory } = useParams();

      return (
            <div>
                  <h1>Test</h1>
                  <br />
                  <p>id : {id}</p>
                  <p>mainCategory : {mainCategory}</p>
                  <p>midCategory : {midCategory}</p>
                  <p>subCategory : {subCategory}</p>
            </div>
      )

}


export default Test

