import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer";

const MainLayout = ({ children }) => {
      return (
            <div>
                  <NavBar />
                  {children}
                  {/* <h1>In MAIN</h1> */}
                  <Footer />
            </div>
      )
};

export default MainLayout;
