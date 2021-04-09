import React from 'react';
import './ShowcaseComponent.css';


const ShowcaseComponent = () =>{
    return(
        <section className="showcase-section">
            <div className="container">
                <div className="showcase-content">
                    <div className="showcase-image">
                        <div className="box box-01">
                        </div>
                        <div className="box box-02">
                        </div>
                        <div className="box box-03">
                        </div>
                    </div>
                    <div className="about-benefits">
                        <div className="benefit">
                            <h2>Location</h2>
                            <p>Lorem ipsum dolor sit amet,onsectetur adipiscing elit.</p>
                        </div>
                        <div className="benefit">
                            <h2>Photography</h2>
                            <p>Lorem ipsum dolor sit amet,onsectetur adipiscing elit.</p>
                        </div>
                        <div className="benefit">
                            <h2>Payment</h2>
                            <p>Lorem ipsum dolor sit amet,onsectetur adipiscing elit.</p>
                        </div>
                        <div className="benefit">
                            <h2>Film Maker</h2>
                            <p>Lorem ipsum dolor sit amet,onsectetur adipiscing elit.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseComponent;