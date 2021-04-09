import React from 'react';
import './AboutComponent.css'

const AboutComponent = () => {
    return(
        <div className="about-section">
            <div className="container">
                <div className="about">
                    <div className="about-content">
                        <h1>This is a Fake site</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum blanditiis, perferendis officia quod suscipit illo vero voluptatibus quis quidem, eius at provident consectetur iste ullam accusantium quasi. Sunt excepturi eum asperiores explicabo harum aliquid, perspiciatis aliquam ipsam, dolorem vitae ipsa, sed voluptas fugit vero fuga nam? Nemo, hic ea.   
                        </p>
                    </div>
                    <footer className="about-footer">
                            <p>All Right Reserve by Fake Name</p>
                    </footer>
                    
                </div>
            </div>
        </div>
    );
}


export default AboutComponent;