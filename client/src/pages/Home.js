import React from 'react';
import '../styles/style.css';

const Home = () => {
return (
    <div className="page-container">
    <main className="content-container">
    <div className="large-box">Large Box</div>
            <div className="row">
                <div className="box">
                    <div className="small-box">Small Box 1</div>
                    <div className="small-box">Small Box 2</div>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <div className="small-box">Small Box 3</div>
                    <div className="small-box">Small Box 4</div>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <div className="small-box">Small Box 5</div>
                    <div className="small-box">Small Box 6</div>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <div className="small-box">Small Box 7</div>
                    <div className="small-box">Small Box 8</div>
                </div>
            </div>
    </main>
    </div>
    );
};

export default Home;