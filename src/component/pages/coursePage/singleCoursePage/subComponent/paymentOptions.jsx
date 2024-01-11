function PaymentOptions({ courseAP, isFree, accessHandler }) {
      if (isFree) {
            return (
                  <>
                        <p>Free Access for all Students. 😉👍</p>
                        <button className="free-access-btn" onClick={() => accessHandler()}>Get the course</button></>
            )
      } else {
            return (courseAP.map((p, i) => (

                  <div key={i} className="payment-option" title={'Pay with ' + p.symbol + ' on ' + p.chain + ' blockchain.'}>
                        <img src={require('@as/image/coin/' + p.symbol + '.png')} alt="Coin" className="" />
                        <span>{p.amount}</span>
                        <span>{p.symbol}</span>
                  </div>
            )
            ))


      }

}


export default PaymentOptions