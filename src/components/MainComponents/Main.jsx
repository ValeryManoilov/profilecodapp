import Description from "./Description"
import Footer from "./Footer"
import Info from "./Info"
import MainContainer from "./MainContainer"
import "../../../src/css/Main.css"


const Main= () => {
  
  
    return (
      <>
      <div className="Wrapper">
        <div className="Container">
        <Info/>
          <Description/>
          <MainContainer/>
         

        </div>
        <Footer/>
        </div>

      </>
    )
  }
  
  export default Main
  