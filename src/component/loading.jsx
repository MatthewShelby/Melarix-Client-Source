import loadingImg from "@as/image/template/loading.svg"
function Loading() {
      return (
            <>
                  <div className="loading-frame">
                        <div className="loding-asset">
                              <img src={loadingImg} alt="loading image" />
                        </div>
                  </div>
            </>
      )
}
export default Loading