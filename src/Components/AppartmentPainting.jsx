import React from 'react'
import villaPainting from '../img/villa-painting-service.jpeg'
import ClientReviews from './ClientReviews'
import { Link } from 'react-router-dom'
import CallToAction from './CallToAction'

export default function AppartmentPainting() {
  return (
    <div>
      {/* haeder start */}
      <div className="all-header-bg">
        <div className="all-header-overlay">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-4 py-6">
                <h1 className='text-center'>Apart. Painting Services</h1>
                <p className='text-white text-center'>Transform your apartment into a personalized haven with our expert painting services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* haeder end */}

      {/* start */}
      <div className="container pt-3">
        <h1 className='text-center'>Professional Apartment Painting Services</h1>
        <div className="row">
          <div className="col-md-12">
            <p>Welcome to Home Painting, your dedicated partner for Apartment Painting Services. Elevate your living space with our expert painting solutions, designed to add vibrancy, style, and a touch of personality to your apartment. Whether you’re looking to refresh your current home or create a welcoming atmosphere in a new space, our skilled team is here to bring your vision to life.</p>
            <p>Discover a realm of creativity and precision with Home Painting's bespoke Interior Design Consultation services. Our seasoned designers collaborate closely with you to understand your vision, lifestyle, and preferences, crafting personalized design concepts that reflect your individuality. From selecting the perfect color palette to integrating architectural elements seamlessly, our meticulous approach ensures every detail aligns harmoniously, resulting in interiors that resonate with warmth, sophistication, and timeless appeal.</p>
          </div>
        </div>
      </div>
      {/* end */}

      {/* start */}
      <div className="container pt-3">
        <h1 className='text-center'>Why Us For Apartment Painting?</h1>
        <div className="row align-items-center pt-3">
          <div className="col-md-6">
            <div className="row g-3 pseduoCardRow">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Personalized Color Schemes</h3>
                    <p>Tailor the ambiance of your apartment to your unique style. Our team assists you in selecting the perfect color scheme, ensuring a harmonious and inviting atmosphere.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Efficient Turnaround</h3>
                    <p>We understand the importance of your time. Our efficient painting services are designed to deliver stunning results without unnecessary delays, allowing you to enjoy your transformed space sooner.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Perfect Solutions</h3>
                    <p>With a deep understanding of climate, our painting solutions are crafted to withstand the heat, humidity, and unique environmental factors, ensuring longevity and resilience.</p>
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
              <h1 className='text-center' style={{ color: "var(--grayish-color)" }}>Benefits of Apart. Painting</h1>
              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Visual Refresh</h3>
                      <p>Experience the instant visual refresh that a new coat of paint brings to your apartment. Enhance both aesthetics and mood with a color palette that resonates with your lifestyle.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Increased Property Value</h3>
                      <p>Well-maintained and aesthetically pleasing apartments often have higher property values. Our services contribute to the overall appeal and market value of your space.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Personalized Expression</h3>
                      <p>Your apartment is your canvas. Express your personality and preferences through our tailored painting services, creating a space that truly feels like home.</p>
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
                      <h3>Color Selection</h3>
                      <p>Choose from a wide range of colors and finishes, with guidance from our experts if needed, to create a personalized color palette for your apartment.Whether you prefer modern neutrals, vibrant hues.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Efficient Painting</h3>
                      <p>Our skilled painters execute the project with precision, ensuring an efficient process that delivers flawless results.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Final Walkthrough</h3>
                      <p>Conclude with a final walkthrough to ensure your complete satisfaction. We address any concerns and make the final touches to perfect your apartment’s new look.</p>
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
