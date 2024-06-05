import React from 'react'
import villaPainting from '../img/villa-painting-service.jpeg'
import ClientReviews from './ClientReviews'
import { Link } from 'react-router-dom'
import CallToAction from './CallToAction'

export default function CommercialPainting() {
  return (
    <div>
      {/* haeder start */}
      <div className="all-header-bg">
        <div className="all-header-overlay">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-4 py-6">
                <h1 className='text-center'>Comm. Painting Services</h1>
                <p className='text-white text-center'>Transforming commercial spaces with precision and expertise – your trusted partner for commercial painting services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* haeder end */}

      {/* start */}
      <div className="container pt-3">
        <h1 className='text-center'>Professional Commercial Painting Services</h1>
        <div className="row">
          <div className="col-md-12">
            <p>Welcome to Home Painting, your trusted partner for Commercial Painting Services. We understand the importance of a well-maintained and visually appealing commercial space. Our skilled team is dedicated to enhancing the aesthetics of your business environment while providing durable and tailored solutions to meet the unique demands of the dynamic market.</p>
            <p>Discover a realm of creativity and precision with Home Painting's bespoke Interior Design Consultation services. Our seasoned designers collaborate closely with you to understand your vision, lifestyle, and preferences, crafting personalized design concepts that reflect your individuality. From selecting the perfect color palette to integrating architectural elements seamlessly, our meticulous approach ensures every detail aligns harmoniously, resulting in interiors that resonate with warmth, sophistication, and timeless appeal.</p>
          </div>
        </div>
      </div>
      {/* end */}

      {/* start */}
      <div className="container pt-3">
        <h1 className='text-center'>Why Us For Commercial Painting?</h1>
        <div className="row align-items-center pt-3">
          <div className="col-md-6">
            <div className="row g-3 pseduoCardRow">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Expertise in Commercial Spaces</h3>
                    <p>With years of experience, our team is well-versed in the intricacies of commercial painting. From offices and retail spaces to hospitality and industrial establishments, we tailor our services to meet the specific needs of your business.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Minimizing Disruption</h3>
                    <p>We understand the importance of minimal disruption to your business operations. Our efficient painting processes are designed to complete projects swiftly without compromising on quality.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>Perfect Solutions</h3>
                    <p>Climate and unique architectural styles require specialized painting solutions. Our services are crafted to withstand the challenging weather conditions, providing long-lasting results.</p>
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
            <div className="col-md-12 benefits-section">
              <h1 className='text-center' style={{ color: "var(--grayish-color)" }}>Benefits of Commercial Painting</h1>
              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Professional Image</h3>
                      <p>A well-painted and maintained commercial space conveys professionalism and leaves a positive impression on clients, customers, and employees.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Brand Enhancement</h3>
                      <p>Customized color schemes and branding elements can be incorporated into the paintwork, enhancing your brand identity and creating a cohesive visual experience.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Durability for High-Traffic Areas</h3>
                      <p>Commercial spaces often experience high foot traffic. Our durable paints and finishes ensure that your painted surfaces can withstand the demands of daily use.</p>
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
                      <p>Begin with detailed consultation to discuss your business needs, brand image, and any specific requirements for your commercial painting project.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Planning and Preparation</h3>
                      <p>Our team plans the project timeline, coordinating with your business schedule to minimize disruption. We conduct thorough surface preparation to ensure flawless finish.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Professional Painting</h3>
                      <p>Our skilled painters execute the project with precision, using high-quality paints and techniques to achieve a polished and durable result.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3>Efficient Completion</h3>
                      <p>We work efficiently to complete the project on time, allowing your business to resume normal operations with minimal downtime.</p>
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
