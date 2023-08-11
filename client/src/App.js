import React from "react";
import Header from './components/Header/index';
//import BodyContainer from "./components/bodyContainer";
import Footer from './components/Footer/index';
import './styles/style.css';

const App = () => {
    return(
        <div>
            <Header/>
            {/* <BodyContainer/> */}
            <Footer/>
        </div>
    );
};

export default App;