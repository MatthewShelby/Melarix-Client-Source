import logo2 from '../../../asset/image/template/Logo2.svg';
import submit from '../../../asset/image/Icons/bell.svg'
import footerBook from "../../../asset/image/template/footer-book.png"
import { Link } from "react-router-dom";

function Footer() {

      return (
            <div className="footer-frame">
                  <div className="footer-row">
                        <div>
                              <div className="header-logo">
                                    <img src={logo2} width="36" alt="Melarix Footer Logo" /> Melarix
                              </div>
                              <br />
                              <div>
                                    <div className="sub-title">Stay Updated with Our Newsletter.</div>
                                    <div className="sub-frame">
                                          <form action="https://formsubmit.co/contact@melarix.com" method="POST">
                                                <div className="sub-input">
                                                      <input type="text" name="name" value="Guest User" style={{ display: "none" }} required />
                                                      <input type="email" name="email" placeholder="Yeur Email" className="sub-input-text" required />
                                                      <button className="sub-input-btn" type="submit">
                                                            <img src={submit} alt="Submit Icon" />
                                                      </button>
                                                </div>
                                          </form>
                                    </div>
                              </div>



                        </div>

                        <div>
                              <br />
                              <div className="sub-title explore-more"> Explore more</div>
                              <a className="explore-link" href="./about.html">About</a>
                              {/* <a className="explore-link" href="">Articles</a> */}
                              <Link className="explore-link" to={`/articles`}>Articles</Link>
                              <a className="explore-link" href="">Light Paper</a>
                              <a className="explore-link" href="">Terms of Use</a>
                              <a className="explore-link" href="">Privacy Policy</a>
                        </div >

                        <div className="footer-image">
                              <img src={footerBook} alt="Footer Logo" width="200" height="200" className="op60" />

                              <br />
                              <div>
                                    <div className="sub-title">
                                          Join us on social media:
                                    </div>

                                    <div className="">
                                          <a href="https://melarix.medium.com/" target="_blank" className="tx-d-none"
                                                title="Medium">
                                                <img
                                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA89JREFUWEftl1toHGUUx/9nNpdS6p2UaqW2NDPTZGcTZ2abp9IXoS9KIF7im5AiQr2BEGwfWrRQ0SLirWhRER9E6AqxWnyxQuiLEmpmGnamm8yktQqWgkIxWpJuMnPKJLvJZne+DNpdyMPO4znnO/z2nP8537eEdfbROuNBEyipI80K/acK2Y7/PIMHRYeIcVnPKPuTkpb9Vt7fD+JnRPHM/LGZUU9V+le1zLL8DrTxBID7hVDgPl1TzydBMTPZrn8FwLbYWMLZcHbm0Ww2Oy8EihwXXF8PmX8G0B6XiAjf6Gnl8SQgy516BEw/xsUx4XuenRmoholiY0Vtuf6TYP5aWGqSZDPdOb0WlJ2fOsVEce2fb0Nxk6ZpxdgfLEpqOd63APoF5T5ppJUDorMTE9ObAym8CkIqJuamoSkbxJIQeCzH/xDgFwXuYkvYvqWn56HrcX7L8Q8C/JborKEpsXIQtixyWHnvAxBeAjAD4M7q5ET0up6Wj1bbF8V80b8ERgeATfWr0ArQcQAHYxJfb0NxS7UWymIm4BMGnqs7UBhylyTRTwDuqUnOOGBklJOV9vH8VI6I+iFhH0KcqzsQpJbtHMwPEdFrNckJv+rdcicRhZFvrFC4rzVIXQPoKwK/y4AdA1T8fxoqiZpSwY7U/Ma/F6Sb1wC01WoGT5gZZWRRd45/COA3mXivxPRPw4D0rq4rlut9BEbcqJ83NKVvZTPTnKHJqu14DzcUyC4UtnOQugRAqpk4hHvA0kYm/ADiYSOtvtNwoAiiJNinattGp4k4iBZp2MoPZFX1r/oDud77YLwcaShqWQTxy0XfkEIeFyy8BWIe0TPq05F/DaDb29SVQKWFeQ6EvbH3EGOfnlHOJgDd/pSVK7TUNu8xIpypBeLf9LSyg4i4IUC2459g8AtBiJ27e5TLZYDSNLkAuiqhmHHYzChvlG11bVkux6nObm8MIJOAIV1Tvli1jV1viBifL9sYAVrDbcauXVcbAmQ5/qcAP1tKPsehtMfs6VwW8+joaMtdHVt/r3hZnjE0ZdVT5YI71RcyjcVcN8F0QW4fHKRoKmOWf5XJznvDTHi7yvxniFQ2q+2MIBa/ccd7lYDo4gWD+k1NXtbVUoX9HADRy/KIoSnHEoFKgv1O8JIspILZ3b29vTeiRJOTk3fcWJD+IOBfPS0/WL7PourdvXlrjhkDgvWwaGbQK6Ymv1cds+oJa7veCDPuFSVips/MjPzlsk7y3nAo8ZyZVk+saGdpGNaCKftI4gG9Wz1dGdv8o5hUuWaFmhVKqkCSf91p6BYR4NU0Xpm5wAAAAABJRU5ErkJggg==" />

                                          </a>

                                          <a href="https://discord.gg/BaMGvB63" target="_blank" className="tx-d-none"
                                                title="Discord">
                                                <img
                                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAqZJREFUWEftV9Fx2zAMBbRA0w2cCZpMIGKCuhPE3SAbNJmg7QR1J6g9AagJ6g3qTlB3Ab4edLLPkiiK8jm5pGfd5ScGwccH8OGR6YV+/EJx0QXY1MpcGHs2xlT1SkR2qQ1zYobWZ5fSNimK4g6AI6IbIroCcJ0Cp6pLZr4jIs/MqxDCWkS2OeyNAlNV1yRfRBKumHkDoAa6/93+R0Q7AA+RNQZyWZbl9xTAJLAGlOaccGoMgK8icn9SKb33v4hoNnXT3PimFaKlHWRMVe+Z+XPuJifGeeecxNZGgVmjM7OxdeibEzceXQZARMR3A4eAPTDzp9Gs5wnYOOdus4A9dW91QQC4FRG7yYevx5iq3jDzz/OQkZcldkNjwPaimJf1PFFb59x1kjHv/Z9U0zPzOoSwspiiKOYAygFsfwF8MdUnIhNp06w3Q+cA8EFELG/9tRgbKyOARxFpqXlVVT4Grts3qjprbnoUWzd3F9icmX8kTvW2OxtVtbeGmauyLG2mtr6hQ9QMMa/LspwPMZaUCedcrCetTK2xNQTsaKj3zt5d09qoqqoVgPcJxsxNtEbIuRizPY8P3gUW7Zc90FiPee+NrV7ZIj02KkPHs3MSsAagWZ36VgIwK2SWJ/btzN4QkQnnDIDdyuSIA3Do4VOAnUe5IllOLuWTIWoSvz5gqpqSC7PQHxsVt956l8mgTQDrSZsCJi1DHu+3c+5gSod0yZLENt42fv3RlJyI6ndAURT1rQRgPm4XQjBJsb+NjZnGopuN6t3eZl1voqQcrLHXm29D4pliT1UXzPytG2O5QgiL2Mtp7DFi19tGjgGsGYx5p5ySeu9NNvY57IW0jDnX6EgaObXp1ezYAeQA2seYQWhKaYCSD+V6dk5J/pyxF2BT2b4w9t8w9g91pWk2MaF0nAAAAABJRU5ErkJggg==" />
                                          </a>


                                          {/* <a href="https://twitter.com/blockitop" target="_blank" className="tx-d-none"
                                                            title="Twitter">
                                                            <img
                                                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAptJREFUWEftl91100AQhWfkAkgHMRVgKtBOBZgOQgWYCkgqIFRAUgFOBSNVAKmApAO7gR3OdSRjKyvtruUHH473JTnWaPbTnZ+dZTrRxSfKRWew3MicFTsZxVR1amaXk8nENVBP3vsHEVmlQAZDCaci8pTiIGSjqgtm/kpEF53nK2a+LcvyBr+r6kVRFJ+992sRud21fQUGY2b+Y2ZfROQuF66u66WZfYi8tySiKRHNiOjZOYf/91YIzDGzwsrMPuXANUp9y/iYZzObE9EmvLtRCoFdN2GA7aqBwxdGV1VV2OBN1PCfQdWEm51zUG+7QmBzZv7ZcV41gL15p6pbpTPAYPpoZq5bFCGwKXIs4HyTuN77+1BhHBBGYubaez8PVWqwKquqgjKXA1++ZOal975uIVV1NwWSRDOzGxG5Dhn3tYsZM/9K8v5i9Lux3cuT2Ptm9lFEgvkbrEoigmLImR8x52Oem5mICArg1QqBXTVAbYfuNskxLHvvmtl7EWnV3ns22MeORhB2tHbO9X70ock/mpmZH8qyRHMNrr7kD/Wy0TC7DmKnSu88pqqAw1mZ08lT4ddmhkGhd9IYHBRxoBMRAHHyHw3QzL6LyGLoK4YUw5SBtnE0oBbEzN7GxqqYYtndPBbLoW6/+2505q/rGgd4Gdsw8fljd4rIqspd4ybPMJEiJ8aEFQk/i4Ww3TuqWAcSxxQK4V2iQq0ZoDDaBLt80pHUt6Gq4qjCHP9qDI5AZkPB31BVbm85zfibNTlsnL/MW4scpYKhVFVsjr4FZcYsqASg7MvMYI6h6xdFcZVw2+nCY0wGzF3q/fGgqmw7P65ZRVHMzAwnwSbxESb89d4jodGIl6kVlxKKrKpMcXgsmzNYrpJnxf4bxf4CFyAqNluCEskAAAAASUVORK5CYII=" />
                                                      </a> 



                        {/* Add linked in 
                              https://www.linkedin.com/company/melarix/   */}


                                          <a href="https://www.youtube.com/@blockitop" target="_blank"
                                                className="tx-d-none" title="YouTube">
                                                <img
                                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAdFJREFUWEftWO1RwkAQ3XcNiBWIHWgFydKAdiAdgBVACXQgVqBUsEkHdCAl0ACss07ChJAodyGYH9mZ/Mnsx5t3j7cXQB0NdBQX9cB8T6ZnrGfMlwHf/FqNiUjsnItUdUhE9uTxQEQDz0EbIrInjw2AzW63W49Go1VVrxNgIjIA8EFEsefw0PSNqr4y82exQRWwJYCX0CmBdVtVvWfmbV5/BExEhgC+Aps3KstYW9QBGwN4azQhsBhAGkXRQT5lxuYAZoG9m5Zt4zi+rWPMW18AVqr61BSV1cdxfCDqiLE0TRNVjXyGWDOzFgBLIrrzqS3nXhxYPkBEpgDmRHQTAlBVH5l5bbUXYawIwnyQiEyrE19wqsrMnLQCrMDe0Dm39JHGVYAZQBF5zuznrBXWOrDMqM0PvdZaa8BMX865mapOffVl+a2IP03TiaraL/KsY6sCflG7MPozHRWvRiGE1RusiPznSuomsL+WuK0WCTqHhkWq+s7M48olbi+TJLErcKOdF4KxaBUnzl8wRbtaXy3KbFUCy8DZB4ctZDPI1tgzXe33+0X5vl8LrExVtpgNbDnMs6re53k/C7kc+aL+7Uj6vwh8Bdsz1jPmy4Bvfmc19g1OVO4n+37xaQAAAABJRU5ErkJggg==" />
                                          </a>

                                          <a href="https://instagram.com/mela.rix?igshid=MzMyNGUyNmU2YQ==" target="_blank"
                                                className="tx-d-none" title="Instagram">
                                                <img
                                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAA4xJREFUWEftWLFSFEEQ7V6KS8HMMvEMjYAP4G4mM/P4AuEHlNhAITAWiw/w/ALPyHBmQyPhC8TIwECoMr1p6131UMvuzu7tsVYRMFVUUexs99s33a/fwHRHF99RXHQPrOvJrMSYc24oIo+XScbMV9bas2X2FvcsBcw5Z5j5BRFNiGiza5LCfs/MsxDCJ2vtZVOcRmDOuU1mfk9E+7cAU/fqhYgcWGt9Km4SmIL6UWDoipl9CCEeywUR4adtGd0wZGb8fl0CCm5aF6AJ2FSPj0TkAxEdtdHfhhDPnXNHzHxIRBtEdCkiT+ri1gLTmnIIBFDWWgRaeeV5/nQ+nz9aX1//u7u7+805N2HmzxpwZozZKwdPAYtsXYnI8LZMee+PiegNkmdZdjAajaZ5ns9E5Ll+/INyjlpg3nt0zIaIoHuWKnzUJOrRWlupO+/9VyJ6pqycGmNeOuf2mfmjArPlRkgBE33h2Fp7lDpD6Jl27TYRDYuyoCUww9+89++I6LU+f2mMOS2VSyVPBZgmQzeivtDStV3jnDtk5rctuobjOhgMBoP5fP6QiH6PRqNf8QO890kC6oBBTGPhVyjWzgIo6Ftc5yKyYAfMMTOEGF23IMwYY+tY7xWYMvpdmUJz7FtrI6hFfuzJsmwqIuOmkugVWKmb9sqgIjMq0BDjhaCKSKXzegXmvUfXIdm5MQZFn1xFvRKRSln0BkxZ+LNMx8YjZebYSJXO6xMYCjuZqExd24f0Bkw1KbZ4q/iWtKpSj70Cy/Pca7dhAO/UKX1krtQo2HvDMPYKrDSAARJMVExfceQwcz4ej6P9uT7xXoEhapEJeLIQAgT3XG3MVpZlcCMQWSxo3XZihvau/HC2cJ9bTXKhoA5TY60TY6UCbxviMH2Yl5WF4wshYCrUulzn3DYzY4JAfNuHeAlYq0lUuwOhjTWEAr9ouxmVOrZiFmptT6HzzowxOy3HtdJj59wJM79Sxiodm3Kw1+6hyfqshEiHvB4jzOVPY0zRyy3CpoChuOMAhl5BEpJXrS4A1Z3A7y/mrMa+4U6SwHTOXfsyTTwNIcwgC02iWgcSdSgiW2traxPYpGgumfnLeDyOsnLj1bYLL3z5ScH0dSGnca927SR10Wn9FwG+Vk3f4kbTw6o1l+W4rcDiCyoLoD0WKlxqpWjLCUIIxdqctclIfH9pYD0w1SnEPbBOdKV0rGuQ/7H/HySusUUPnFP5AAAAAElFTkSuQmCC" />
                                          </a>
                                    </div>
                              </div>
                        </div>



                  </div >
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="footer-row-center">

                        <div>
                              ©Melarix - 2022-2023 - All Rights Reserved.
                        </div>
                        <div className="col-sm-12 justify-content-center darker-bg">

                              <div className="CR">
                                    <span>Designed and Developed by:
                                          <br className="only-phone" />
                                          <a href="mailto:matthewshelb@gmail.com" className="foot-link">MatthewShelB@gmail.com</a>
                                    </span>
                              </div>
                        </div>


                  </div>
            </div >
      )

}

export default Footer;