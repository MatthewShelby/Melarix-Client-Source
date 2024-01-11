function PlayerWindow({ url }) {
      return (
            <video autoPlay controls className="vp" controlsList='nodownload'>
                  <source src={url} />
            </video>
      )
}

export default PlayerWindow