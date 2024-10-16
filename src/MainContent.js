import React from 'react';
import './App.css';
import Description from './Description';

function MainContent() {
    return (
        <>
            <main>
                <div className="main-content">
                    <img src="" alt="SAMPLE IMAGE" className="main-image" />
                    <Description/>
                </div>

                <div className="main-content">
                    <img src="" alt="SAMPLE IMAGE" className="main-image" />
                    <Description/>
                </div>

                <div className="main-content">
                    <img src="" alt="SAMPLE IMAGE" className="main-image" />
                    <Description/>
                </div>

            </main>
        </>
    );
}

export default MainContent;
