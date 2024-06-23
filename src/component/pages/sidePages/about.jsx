import MainLayout from "../template/MainLayout"
import { AboutHelmet } from "../template/helmet"


function About() {

      return (
            <MainLayout>

                  <>
                        <AboutHelmet />
                        <div className="page-body">
                              <div className="page-head">
                                    <h1>About Melarix</h1>
                              </div>
                              <div className="page-content">
                                    <div className="page-part">
                                          <div className="part-head">
                                                <h2>Welcome to Melarix</h2>
                                          </div>
                                          <div className="part-body">
                                                <p>
                                                      It's your go-to platform for learning in the digital age. We're here to break the barriers of traditional education, providing you with essential skills to craft your own path in blockchain-based development.
                                                </p><p>
                                                      In these early stages, Melarix is diving deep into dApps and web3 development. As we grow, we'll expand our horizons to cover a variety of exciting topics. Join us on this journey, and let's redefine online learning together.
                                                </p><p>

                                                      Melarix is more than a platform; it's your key to unlocking the vast potential of blockchain development. Get ready to learn, create, and innovate with us!
                                                </p>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </>
            </MainLayout>
      )
}

export default About