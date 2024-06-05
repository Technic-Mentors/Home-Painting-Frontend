import React from 'react';

import WhyChoseUs from './WhyChoseUs';
import CallToAction from './CallToAction';
import ClientReviews from './ClientReviews';
import { Link } from 'react-router-dom';
import HomeHeader from './HomeHeader';

export default function Home() {
    return (
        <div>
            <HomeHeader/>
            
            {/* services section start */}
            <div className="container pt-5">
                <h1 className='text-center'>Our Painting Services</h1>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <p>A great paint job can transform the look and fell of your home while selecting the right colours can make it feel personal and in-keeping with your desired ‘mood’.
                        </p>
                        <p>
                            Using high quality paints and skilled personnel for wall painting is essential to enjoy a longer lasting finish inside the home and to protect the outside of your property from sun and humid weather conditions. </p>
                    </div>
                    <div className="col-md-12">

                        <div className='row servicesCard g-3'>
                            <div className="col-md-3">
                                <Link to="/villa-painting">  <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> Villa Painting</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/office-painting"> <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> Office Painting</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/appartment-painting"> <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> Aprtment Painting</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/house-painting"> <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> House Painting</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/move-in/out-painting">  <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> Move In/Out Painting</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/anti-fungal-painting"> <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> Antifungal Wall Painting</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="epoxy-floring"> <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> Epoxy Floring</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/interior-parquet-painting"> <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> Interior Parquet Painting</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/exterior-painting"> <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> Exterior painting</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/exterior-metallic-fence-painting">   <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> Exterior Metallic Fence</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/exterior-facade-painting"> <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> Exterior Facade Painting</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/wallpaper-installation"> <div className="card">
                                    <div className="card-body">
                                        <li><i className="fas fa-paint-roller"></i> Wallpaper installation</li>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* services sections end */}

            {/* Benefits Start */}
            <div className="container">
                <div className="row keyFeatures pt-5">
                    <h1 className='text-center'>Benefits Choosing Home Painting</h1>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center">
                                    <i className='fas fa-briefcase'></i>
                                </div>
                                <h6 className='text-center'>12+ years of experience</h6>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-graduation-cap"></i>
                                </div>
                                <h6 className='text-center'>Trained And Expert Professional Staff</h6>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-money-bill"></i>
                                </div>
                                <h6 className='text-center'>Budget-freindly solutions with unbeatable price</h6>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-leaf"></i>
                                </div>
                                <h6 className='text-center'>Eco-friendly pest control & cleaning products</h6>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <h6 className='text-center'>Easy booking over the phone or Visit our website</h6>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <h6 className='text-center'>Convenient Appointment Times</h6>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-star"></i>
                                </div>
                                <h6 className='text-center'>Expert Supervision</h6>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-heart"></i>
                                </div>
                                <h6 className='text-center'>100% Satisfaction Guarantee</h6>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h6 className='text-center'>Trusted by 50,000+ customers</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Benefits end */}

            <WhyChoseUs />

            {/* feature section start */}
            <div className="container pt-5">
                <h1 className='text-center'>Our Features</h1>
                <div className="row pseduoCardRow">
                    <div className="col-md-4 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h3>Wide Selection</h3>
                                <p>Explore our extensive range of paints in every color imaginable, along with primers, sealers, and specialty coatings to suit any project.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h3>Top Brands</h3>
                                <p>Shop with confidence knowing that we offer top-quality paints and accessories from leading brands known for their durability, performance, and color accuracy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h3>Expert Advice</h3>
                                <p>Need help choosing the right paint or tackling a tricky project? Our team of experts is here to provide personalized recommendations and practical tips to ensure your success.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h3>Convenient Shopping</h3>
                                <p>Enjoy the convenience of shopping online from the comfort of your home or office. With fast shipping and easy returns, getting the supplies you need has never been easier.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h3>Inspiration Hub</h3>
                                <p>Get inspired with our collection of project ideas, how-to guides, and tips for achieving professional-looking results on any surface, from walls to furniture and beyond.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h3>Customer Support</h3>
                                <p>Have questions or concerns our friendly customer support is available to assist you every step of the way, ensuring a seamless shopping experience from start to finish.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* feature section end */}

            <ClientReviews />
            <CallToAction />
        </div >
    );
}
