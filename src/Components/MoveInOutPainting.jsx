import React from 'react'
import villaPainting from '../img/villa-painting-service.jpeg'
import ClientReviews from './ClientReviews'
import { Link } from 'react-router-dom'
import CallToAction from './CallToAction'

export default function MoveInOutPainting() {
  return (
    <div>
      {/* haeder start */}
      <div className="all-header-bg">
        <div className="all-header-overlay">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-4 py-6">
                <h1 className='text-center'>Move In/Out Painting</h1>
                <p className='text-white text-center'>Seamlessly transform your new or vacated space with our Move In & Move Out Painting Services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* haeder end */}

      {/* start */}
      <div className="container pt-3">
        <h1 className='text-center'>Move In/Out Painting Services</h1>
        <div className="row">
          <div className="col-md-12">
            <p>At Home Painting, we understand that moving into a new space or preparing to leave is a significant transition. Our Move-In & Move-Out Painting Services are tailored to make these transitions seamless and stress-free. Whether you’re settling into a new home or preparing a property for its next occupants, we’re here to bring a fresh and welcoming touch to every space.</p>
            <p>Discover a realm of creativity and precision with Home Painting's bespoke Interior Design Consultation services. Our seasoned designers collaborate closely with you to understand your vision, lifestyle, and preferences, crafting personalized design concepts that reflect your individuality. From selecting the perfect color palette to integrating architectural elements seamlessly, our meticulous approach ensures every detail aligns harmoniously, resulting in interiors that resonate with warmth, sophistication, and timeless appeal.</p>
          </div>
        </div>
      </div>
      {/* end */}

      {/* start */}
      <div className="container pt-3">
        <h1 className='text-center'>Why Us For Move In/Out Painting?</h1>
        <div className="row align-items-center pt-3">
          <div className="col-md-6">
            <div className="row g-3 pseduoCardRow">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Fresh Beginnings</h3>
                    <p>Moving into a new home is an exciting journey, and our painting services are designed to give your space a fresh, welcoming look from the very start.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Enhancing Property Value</h3>
                    <p>For property owners preparing a space for new occupants, our services can enhance the property’s appeal and value, making it more attractive to potential renters or buyers.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Efficient Turnaround</h3>
                    <p>We understand the importance of timing in move-in and move-out scenarios. Our efficient turnaround ensures that your space is ready for the next chapter in no time.</p>
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
              <h1 className='text-center' style={{ color: "var(--grayish-color)" }}>Benefits of In/Out Painting</h1>
              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Customized Solutions</h3>
                      <p>Our team works closely with you to understand your preferences, whether it’s creating a cozy atmosphere for a new home or maintaining a neutral palette for potential buyers.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Thorough Preparation</h3>
                      <p>We go beyond the paint, ensuring surfaces are properly prepared for a flawless finish. This includes addressing any imperfections and ensuring a smooth application.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Flexible Scheduling</h3>
                      <p>We accommodate your timeline, working efficiently to meet your move-in or move-out schedule without compromising on the quality of our services.</p>
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
                      <p>Begin with a consultation to discuss your vision, preferences, and any specific requirements for your move-in or move-out painting project.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Surface Preparation</h3>
                      <p>Our team conducts a thorough assessment of the space, addressing any necessary preparations to ensure a pristine finish.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Color Selection</h3>
                      <p>Choose from a range of colors or receive guidance on creating a palette that suits your goals, whether it’s adding a personal touch or appealing to a broader audience.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Efficient Painting</h3>
                      <p>Our skilled painters work efficiently to transform your space, delivering a polished look that aligns with your objectives.</p>
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
