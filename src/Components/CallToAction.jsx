import React from 'react'
import callToActionBg from "../img/call-to-action.png"
export default function CallToAction() {
    return (
        <div>
            <div className="container py-5">
                <div className="row" style={{ backgroundColor: "var(--secondary-color)" }}>
                    <div className="col-md-6 p-4">
                        <h1>Contact Us Today For Expert Painting Services </h1>
                        <p style={{color:"var(--grayish-color)"}}>Ready to give your villa a touch of distinction? Contact Home Painting for a free consultation. Let our Villa Painting Services be the brushstroke that transforms your villa into a masterpiece.</p>
                        <button className='btn btn-light'>Contact Now</button>
                    </div>
                    <div className="col-md-6 callToActionBg" style={{ backgroundImage: `url(${callToActionBg})` }}></div>
                </div>
            </div>
        </div>
    )
}
