function PlayerWindow({ url }) {
      return (
            <video autoPlay controls className="vp" controlsList='nodownload' width={"100%"}>
                  <source src={url} />
            </video>
      )
}

export default PlayerWindow