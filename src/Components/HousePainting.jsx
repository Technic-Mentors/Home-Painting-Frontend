import React from 'react'
import villaPainting from '../img/villa-painting-service.jpeg'
import ClientReviews from './ClientReviews'
import { Link } from 'react-router-dom'
import CallToAction from './CallToAction'

export default function HousePainting() {
  return (
    <div>
      {/* haeder start */}
      <div className="all-header-bg">
        <div className="all-header-overlay">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-4 py-6">
                <h1 className='text-center'>House Painting Services</h1>
                <p className='text-white text-center'>Transform your home with expert House Painting Services by Home Painting, adding vibrancy and elegance to every stroke.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* haeder end */}

      {/* start */}
      <div className="container pt-3">
        <h1 className='text-center'>Professional House Painting Services</h1>
        <div className="row">
          <div className="col-md-12">
            <p>Welcome to Home Painting, your trusted partner for House Painting Services. Unlock the full potential of your living spaces with our expert craftsmanship and a palette of colors that breathe life into your home. Whether you’re seeking a refreshing change or preparing your property for a new chapter, our skilled team is dedicated to turning your house into a canvas of beauty.</p>
            <p>Discover a realm of creativity and precision with Home Painting's bespoke Interior Design Consultation services. Our seasoned designers collaborate closely with you to understand your vision, lifestyle, and preferences, crafting personalized design concepts that reflect your individuality. From selecting the perfect color palette to integrating architectural elements seamlessly, our meticulous approach ensures every detail aligns harmoniously, resulting in interiors that resonate with warmth, sophistication, and timeless appeal.</p>
          </div>
        </div>
      </div>
      {/* end */}

      {/* start */}
      <div className="container pt-3">
        <h1 className='text-center'>Why Us For House Painting?</h1>
        <div className="row align-items-center pt-3">
          <div className="col-md-6">
            <div className="row g-3 pseduoCardRow">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Expert Craftsmanship</h3>
                    <p>Experience the artistry of our skilled painters who bring precision and care to every stroke. We go beyond painting walls – we create an ambiance that reflects your style and personality.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Perfect Solutions</h3>
                    <p>Understanding the unique climate challenges, our house painting services are tailored to withstand the heat, humidity, and sand, ensuring lasting beauty and protection.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Comprehensive Services</h3>
                    <p>From interior makeovers that elevate your daily living to exterior coatings that enhance curb appeal, our services cover every aspect of house painting to meet your specific needs.</p>
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
              <h1 className='text-center' style={{ color: "var(--grayish-color)" }}>Benefits of House Painting</h1>
              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Visual Refresh</h3>
                      <p>Give your home an instant facelift with a fresh coat of paint. Our services are designed to revitalize your living spaces, creating an atmosphere that feels new and inviting.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Increased Property Value</h3>
                      <p>Well-maintained and aesthetically pleasing homes have higher property values. Our house painting services contribute to the overall appeal and market value of your property.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Customized Color Schemes</h3>
                      <p>Express your personality through color. Choose from a diverse range of hues, shades, and finishes to customize the look of your home according to your taste and style.</p>
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
                      <p>Begin with a consultation to discuss your preferences, vision, and any specific requirements for your apartment painting project.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Surface Preparation</h3>
                      <p>Our expert team assesses and prepares surfaces meticulously, addressing any imperfections to ensure a smooth and even finish.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Color Selection</h3>
                      <p>Choose from a wide range of colors and finishes. Our experts assist in selecting the perfect palette to complement your home’s architecture and your personal style.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Professional Painting</h3>
                      <p>Our skilled painters execute the project with precision, using high-quality paints to achieve a stunning and enduring finish.</p>
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
                <h3 className='text-center'>Com. Painting</h3>
                <div className="d-flex justify-content-center">
                  <Link to="/commercial-painting"><i className='fas fa-arrow-right'></i> Commercial Painting</Link>
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
