import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1Img from "../img/client1.jpg"
import client2Img from "../img/client2.png"

export default function ClientReviews() {
    const [showSlides, setShowSlides] = useState(3)
    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth < 768) {
                setShowSlides(1)
            } 
            if(window.innerWidth>768){
                setShowSlides(3)
            }
        }
        handleSize()
        window.addEventListener("resize",handleSize)
        return(()=>{
            window.removeEventListener("resize",handleSize)
        })
    }, [showSlides])
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        centerPadding: "0px",
        slidesToShow: showSlides,
        speed: 500
    };
    return (
        <div>
            <div className="container pt-5">
                <h1 className='text-center'>Client Feedback</h1>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='p-3'>
                            <div className="d-flex justify-content-center">
                                <img src={client1Img} alt="" className='img-fluid' style={{ width: "70px" }} />
                            </div>
                            <p>Outstanding service! Home Painting revitalized our villa with precision and care. The meticulous attention to detail was remarkable, and the outcomes surpassed our expectations"</p>
                            <h3 className='text-center'>Client Name</h3>
                            <h6 className='text-center'>Client role</h6>
                        </div>
                        <div className='p-3'>
                            <div className="d-flex justify-content-center">
                                <img src={client2Img} alt="" className='img-fluid' style={{ width: "70px" }} />
                            </div>
                            <p>"Exemplary professionalism! The Home Painting team showcased exceptional skills, employing high-quality materials to rejuvenate our villa. Delighted with the outcome!"</p>
                            <h3 className='text-center'>Client Name</h3>
                            <h6 className='text-center'>Client role</h6>
                        </div>
                        <div className='p-3'>
                            <div className="d-flex justify-content-center">
                                <img src={client1Img} alt="" className='img-fluid' style={{ width: "70px" }} />
                            </div>
                            <p>Absolutely thrilled with the work done by Home Painting! They were efficient, reliable, and left our villa looking fabulous. Will definitely use their villa painting services again!</p>
                            <h3 className='text-center'>Client Name</h3>
                            <h6 className='text-center'>Client role</h6>
                        </div>
                        <div className='p-3'>
                            <div className="d-flex justify-content-center">
                                <img src={client2Img} alt="" className='img-fluid' style={{ width: "70px" }} />
                            </div>
                            <p>A massive thank you to Home Painting for their expertise! They delivered a flawless finish and transformed our villa into a beautiful, refreshed home. Highly satisfied!</p>
                            <h3 className='text-center'>Client Name</h3>
                            <h6 className='text-center'>Client role</h6>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );

}
