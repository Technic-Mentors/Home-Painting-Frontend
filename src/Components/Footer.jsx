import React from 'react'

export default function Footer() {
    return (
        <div className='footer-bg'>
            <div className="container pt-3">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className='footer-heading mb-3'>Paint Website</h2>
                        <p>A great paint job can transform the look and feel of your home while selecting the right colours can make it feel personal and in-keeping with your desired ‘mood’.Using high quality paints and skilled personnel for wall painting is essential.</p>
                    </div>
                    <div className="col-md-5">
                    
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1748856177996!2d55.276438674154996!3d25.23103393033173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43135ccc00dd%3A0x48f1737b8551ca38!2sAl%20Tayer%20Building!5e0!3m2!1sen!2s!4v1715689443542!5m2!1sen!2s" style={{ border: 0, width: "100%", height: "100%" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Office Map'></iframe>
                    </div>
                    <div className="col-md-3">
                        <h2 className='footer-heading mb-3'>Get In Touch</h2>
                        <p><i className='fas fa-map-marker-alt'></i> Al Tayer Building Office 69 Satwa Dubai UAE</p>
                        <a href="tel:+971567453487" target="blank" style={{color:"initial"}}><i className='fas fa-phone'></i> 0567453487</a>
                        <p><i className='fas fa-envelope'></i> info@hometohomepainting.com</p>
                        <h2 className='footer-heading'>Social Links</h2>
                        <div className="social-links mt-3">
                            <i className='fab fa-facebook me-2'></i>
                            <i className='fab fa-twitter me-2'></i>
                            <i className='fab fa-instagram me-2'></i>
                            <i className='fab fa-whatsapp'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom mt-2">
                <p className='text-center text-white'>Copyright © All rights reserved. Developed with love by <a href="https://technicmentors.com" target='blank' className='text-white' style={{ textDecoration: "underline" }}> Technic Mentors</a></p>
            </div>
        </div>
    )
}                                    
