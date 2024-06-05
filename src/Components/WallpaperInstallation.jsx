import React from 'react'
import villaPainting from '../img/villa-painting-service.jpeg'
import ClientReviews from './ClientReviews'
import { Link } from 'react-router-dom'
import CallToAction from './CallToAction'

export default function WallpaperInstallation() {
  return (
    <div>
      {/* haeder start */}
      <div className="all-header-bg">
        <div className="all-header-overlay">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-4 py-6">
                <h1 className='text-center'>Wallpaper Services</h1>
                <p className='text-white text-center'>Elevate your space with precision and expertise – seamless Wallpaper Installation & Fixing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* haeder end */}

      {/* start */}
      <div className="container pt-3">
        <h1 className='text-center'>Wallpaper Installation Services</h1>
        <div className="row">
          <div className="col-md-12">
            <p>Welcome to Home Painting, your go-to destination for expert Wallpaper Installation & Fixing Services in Dubai. Transform your spaces with our meticulous craftsmanship, turning ordinary walls into stunning showcases of your style and personality. Whether it’s a residential home or a commercial space, our skilled team is dedicated to bringing your vision to life.</p>
            <p>Discover a realm of creativity and precision with Home Painting's bespoke Interior Design Consultation services. Our seasoned designers collaborate closely with you to understand your vision, lifestyle, and preferences, crafting personalized design concepts that reflect your individuality. From selecting the perfect color palette to integrating architectural elements seamlessly, our meticulous approach ensures every detail aligns harmoniously, resulting in interiors that resonate with warmth, sophistication, and timeless appeal.</p>
          </div>
        </div>
      </div>
      {/* end */}

      {/* start */}
      <div className="container pt-3">
        <h1 className='text-center'>Why Us For Wallpaper Installation?</h1>
        <div className="row align-items-center pt-3">
          <div className="col-md-6">
            <div className="row g-3 pseduoCardRow">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Precise Craftsmanship</h3>
                    <p>Experience the art of wallpaper installation done with precision and care. Our skilled team ensures seamless alignment and flawless finishes for a polished and professional look.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Wide Range of Options</h3>
                    <p>Explore a vast selection of wallpapers, from classic patterns to modern designs. Our collection caters to various styles, allowing you to find the perfect match for your interior theme.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Professional Fixing</h3>
                    <p>Beyond installation, our team provides expert fixing services, addressing any issues promptly and ensuring a long-lasting and beautiful result.</p>
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
              <h1 className='text-center' style={{ color: "var(--grayish-color)" }}>Benefits of Wallpaper Installation</h1>
              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Instant Transformation</h3>
                      <p>Wallpaper offers a quick and effective way to transform your space, adding character and personality without the need for extensive renovations.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Customization for Every Space</h3>
                      <p>Whether it’s a feature wall, an entire room, or a commercial space, wallpapers allow for endless customization. Tailor the look to suit your taste and the unique characteristics of each room.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Durability and Easy Maintenance</h3>
                      <p>Modern wallpapers are designed for durability and easy maintenance. Enjoy a long-lasting, vibrant look with minimal effort.</p>
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
                      <p>Begin with a consultation to discuss your vision, preferred wallpaper styles, and any specific requirements for your project.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Selection of Wallpaper</h3>
                      <p>Choose from our extensive collection of wallpapers, or bring your own. Our experts assist in selecting designs that align with your aesthetic preferences.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Professional Installation</h3>
                      <p>Our skilled team ensures precise installation, taking care of every detail to achieve a seamless and visually appealing result.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Fixing and Final Touches</h3>
                      <p>After installation, our team conducts a thorough fixing process, addressing any issues and ensuring that the wallpaper is perfectly in place.</p>
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
                <h3 className='text-center'>Exterior Painting</h3>
                <div className="d-flex justify-content-center">
                  <Link to="/exterior-painting"><i className='fas fa-arrow-right'></i> Exterior Painting</Link>
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
