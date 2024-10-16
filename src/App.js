import Header from "./Header.js";
import Greetings from "./Greetings.js"
import MainContent from "./MainContent.js";
import Description from "./Description.js";
import Footer from "./Footer.js";
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Greetings user="Viernes Jannlenn & Christian Maglangit"/>
    <MainContent/>
    <Footer/>
    </>
  );
}

export default App;
