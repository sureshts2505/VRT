
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Routing from './Components/Routing';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
    <Header/>
    <Routing/>
    <Footer/>
  
    </>
  );
}

export default App;
