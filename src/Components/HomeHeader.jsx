import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headerImg from "../img/main-header.png";
import transformImg from "../img/transform-space.png";

export default function HomeHeader() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        speed: 1500,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {/* 1st slider */}
                <div className="mainHeader-bg1">
                    <div className="mainHeader-overlay">
                        <div className="container-fluid">
                            <div className="row py-6 align-items-center justify-content-between">
                                <div className="col-md-5 px-md-5">
                                    <h1 style={{ color: "var(--yellowish-color)" }}>We Bring Your Home To Lively Colors</h1>
                                    <p className='text-white'>Welcome to Home Painting, your premier destination for all your painting needs! Whether you're refreshing your home's interior, adding curb appeal with an exterior makeover, or tackling a fun DIY project, we've got you covered.</p>
                                </div>
                                <div className="col-md-6">
                                    <img src={transformImg} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd slider */}
                <div className="mainHeader-bg">
                    <div className="mainHeader-overlay">
                        <div className="container-fluid">
                            <div className="row py-6 align-items-center justify-content-between">
                                <div className="col-md-5 px-md-5">
                                    <h1 style={{ color: "var(--yellowish-color)" }}>Transform Your Space with Precision</h1>
                                    <p className='text-white'>At Home Painting, we combine expertise with creativity to give your space a fresh, vibrant look. Our professional painters use high-quality materials and the latest techniques to ensure a flawless finish that will make your home stand out.</p>
                                </div>
                                <div className="col-md-6">
                                    <img src={headerImg} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
}