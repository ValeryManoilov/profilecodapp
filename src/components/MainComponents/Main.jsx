import Description from "./Description"
import Footer from "./Footer"
import Info from "./Info"
import MainContainer from "./MainContainer"
import "./css/main.css"


const Main= () => {
  
  
    return (
      <>
      <div className="Wrapper">
        <div className="Container">
        <Info
            name="Иванов Иван Иванович"
            details="Студент, 3 курс"
            bio="Мне 18 лет, я fullstack-разработчик"
            frontendRank="Топ-1 frontend"
            backendRank="Топ-6 backend"
          />
          <Description
          infa="Я программист из Санкт-Петербурга, Люблю работать круглыми
сутками. Увлечений много,
есть много планов по развитию в ИТ и саморазвитию.
"/>
          <MainContainer/>
         

        </div>
        <Footer/>
        </div>

      </>
    )
  }
  
  export default Main
  