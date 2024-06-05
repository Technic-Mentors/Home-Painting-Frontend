import React from 'react'
import villaPainting from '../img/villa-painting-service.jpeg'
import ClientReviews from './ClientReviews'
import { Link } from 'react-router-dom'
import CallToAction from './CallToAction'

export default function ExteriorFacadePainting() {
    return (
        <div>
            {/* haeder start */}
            <div className="all-header-bg">
                <div className="all-header-overlay">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-4 py-6">
                                <h1 className='text-center'>Ext. Facade Painting</h1>
                                <p className='text-white text-center'>Transform your property’s first impression specialized Exterior Facade Painting Services and blending aesthetics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* haeder end */}

            {/* start */}
            <div className="container pt-3">
                <h1 className='text-center'>Exterior Facade Painting Services</h1>
                <div className="row">
                    <div className="col-md-12">
                        <p>Welcome to Home Painting, where we redefine the face of your property with our specialized Exterior Facade Painting Services. Transforming exteriors into vibrant, enduring masterpieces is our expertise. Whether it’s a residential villa or a commercial establishment, our skilled team is dedicated to enhancing the aesthetic appeal and protecting the structural integrity of your building.</p>
                        <p>Discover a realm of creativity and precision with Home Painting's bespoke Interior Design Consultation services. Our seasoned designers collaborate closely with you to understand your vision, lifestyle, and preferences, crafting personalized design concepts that reflect your individuality. From selecting the perfect color palette to integrating architectural elements seamlessly, our meticulous approach ensures every detail aligns harmoniously, resulting in interiors that resonate with warmth, sophistication, and timeless appeal.</p>
                    </div>
                </div>
            </div>
            {/* end */}

            {/* start */}
            <div className="container pt-3">
                <h1 className='text-center'>Why Us For Exterior Facade Painting?</h1>
                <div className="row align-items-center pt-3">
                    <div className="col-md-6">
                        <div className="row g-3 pseduoCardRow">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Specialized Expertise</h3>
                                        <p>Our team possesses specialized expertise in exterior facade painting, understanding the unique demands of Dubai’s climate. We combine precision and care to create a lasting impact.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>High-Quality Materials</h3>
                                        <p>We use top-tier paints and coatings specifically designed for exterior surfaces. This ensures not only a visually stunning facade but also robust protection against the elements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Personalized Color Consultations</h3>
                                        <p>Choose from a diverse palette or receive expert guidance on selecting colors that harmonize with your style and the surrounding environment. Our personalized consultations ensure a perfect match.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={villaPainting} alt="villa painting services" className='img-fluid' />
                    </div>
                </div>
            </div>
            {/* end */}

            {/* start */}
            <div className='mt-3 benefits-work-bg'>
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-12">
                            <h1 className='text-center' style={{ color: "var(--grayish-color)" }}>Benefits of Exterior Facade Painting</h1>
                            <div className="row g-3 mt-2">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>Enhanced Aesthetic Appeal</h3>
                                            <p>Transform the look of your property with a fresh and vibrant exterior. Our facade painting services elevate curb appeal, leaving a lasting positive impression.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>Structural Protection</h3>
                                            <p>Beyond aesthetics, our paints act as a shield, protecting your building from sun exposure, weathering, and other external factors. Preserve the integrity of your structure with our expert solutions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>Increased Property Value</h3>
                                            <p>A well-maintained and aesthetically pleasing exterior significantly contributes to the overall value of your property, making it more appealing to residents, tenants, or clients.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h1 className='text-center' style={{ color: "var(--grayish-color)" }}>How It Works?</h1>
                            <div className="row g-3 mt-2">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>Consultation</h3>
                                            <p>Start with a consultation to discuss your vision, preferred color schemes, and any specific requirements for your exterior facade painting project.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>Surface Preparation</h3>
                                            <p>Our team conducts a thorough assessment and prepares the exterior surfaces meticulously, ensuring they are ready for the painting process.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>Color Selection</h3>
                                            <p>Choose from a range of colors and finishes to create the desired look for your facade. Our experts assist in making selections that enhance the overall appeal.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>Expert Painting Execution</h3>
                                            <p>Our skilled painters execute the project with precision, applying the chosen paint with expertise to achieve a stunning and enduring finishOur skilled painters execute the project with precision, delivering a flawless finish that revitalizes the facade and ensures long-lasting beauty.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end */}

            {/* start */}
      <div className="container pt-3">
        <div className="row">
          <h1 className='text-center'>Painting Services</h1>
          <p className='text-center'>Transform your spaces with precision and artistry through Home Painting expert painting services.</p>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h3 className='text-center'>Office Painting</h3>
                <div className="d-flex justify-content-center">
                  <Link to='/office-painting'><i className='fas fa-arrow-right'></i> Office Painting</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h3 className='text-center'>House Painting</h3>
                <div className="d-flex justify-content-center">
                  <Link to="/house-painting"><i className='fas fa-arrow-right'></i> House Painting</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h3 className='text-center'>Epoxy Floring</h3>
                <div className="d-flex justify-content-center">
                  <Link to="/epoxy-floring"><i className='fas fa-arrow-right'></i> Epoxy Floring</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h3 className='text-center'>Wallpaper Install</h3>
                <div className="d-flex justify-content-center">
                  <Link to="/wallpaper-installation"><i className='fas fa-arrow-right'></i> Wallpaper Install</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end */}

            <ClientReviews />
            <CallToAction />
        </div >
    )
}
