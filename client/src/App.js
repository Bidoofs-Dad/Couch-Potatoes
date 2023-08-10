import React from "react";
import Header from './components/header';
import BodyContainer from "./components/bodyContainer";
import Footer from './components/footer';
import './style.css';

const App = () => {
    return(
        <div>
            <Header/>
            <BodyContainer/>
            <Footer/>
        </div>
    );
};

export default App;