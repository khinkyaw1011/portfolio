import Footer from "./comonents/Footer/Footer";
import Hero from "./comonents/Hero/Hero";
import Portfolio from "./comonents/Portfolio/Portfolio";
import Work from "./comonents/Works/Work";
import Expertise from "./comonents/expertise/Expertise";
import Header from "./comonents/header/Header";
import People from "./comonents/people/People";
import css from './styles/app.module.scss'
const App = () => {
  //don't forget to add font link in index.html
  return <div className={`bg-primary ${css.container}`}>
     <Header/>
     <Hero/>
     <Expertise/>
     <Work/>
     <Portfolio/>
     <People/>
     <Footer/>
  </div>;
};

export default App;
