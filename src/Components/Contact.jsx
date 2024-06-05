import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
export default function Contact() {
    const [successMessage, setSuccessMessage] = useState("")
    const formRef = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault()
        const nameError = document.getElementById("nameError")
        const emailError = document.getElementById("emailError")
        const numberError = document.getElementById("numberError")
        const serviceError = document.getElementById("serviceError")
        const messageError = document.getElementById("messageError")

        const form = formRef.current
        let hasError;
        if (!form.name.value) {
            nameError.innerText = "please enter name"
            hasError = true
        } else {
            nameError.innerText = ""
        }
        if (!form.email.value) {
            emailError.innerText = "please enter email"
            hasError = true
        } else {
            emailError.innerText = ""
        }
        if (!form.number.value) {
            numberError.innerText = "please enter number"
            hasError = true
        } else {
            numberError.innerText = ""
        }
        if (!form.service.value) {
            serviceError.innerText = "please enter service"
            hasError = true
        } else {
            serviceError.innerText = ""
        }
        if (!form.message.value) {
            messageError.innerText = "please enter message"
            hasError = true
        } else {
            messageError.innerText = ""
        }
        if (hasError) {
            return;
        }
        emailjs.sendForm("service_s8j50uc", "template_b7jsynh", formRef.current, "U2ZIUixumoWqDTBM9").then(
            (response) => {
                setSuccessMessage("email send successfully")
                formRef.current.reset()
                setTimeout(() => {
                    setSuccessMessage("")
                }, 3000)
                console.log("success")
            },
            (error) => {
                console.log(error)
            }
        )
    }
    return (
        <div>
            {/* header start */}
            <div className="all-header-bg">
                <div className="all-header-overlay">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-4 py-6">
                                <h1 className='text-center'>Get in Touch</h1>
                                <p className='text-white text-center'>We're just a click away! Whether you have a question about our services or want to discuss a potential project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header end */}

            <div className="container pt-3">
                <h1 className='text-center mb-3'>Stay In Touch!</h1>
                <div className="row">
                    <div className="col-md-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1748856177996!2d55.276438674154996!3d25.23103393033173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43135ccc00dd%3A0x48f1737b8551ca38!2sAl%20Tayer%20Building!5e0!3m2!1sen!2s!4v1715689443542!5m2!1sen!2s" width="700" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Office Map'></iframe>
                    </div>
                    <div className="col-md-4">
                        <div className="row g-3">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center">
                                            <i class="fas fa-map-marker-alt contact-icon"></i>
                                        </div>
                                        <h6 className='text-center'>Al Tayer Building Office 69 Satwa Dubai UAE</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center">
                                            <i className='fas fa-phone contact-icon'></i>
                                        </div>
                                        <h6 className='text-center'>0567453487</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center">
                                            <i className='fas fa-envelope contact-icon'></i>
                                        </div>
                                        <h6 className='text-center'>info@hometohomepainting.com</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* form */}
            <div className="container py-3 contactForm">
                <form onSubmit={sendEmail} ref={formRef}>
                    <div className="row g-3">
                        {successMessage && (
                            <div className='d-flex justify-content-center'>
                                <h3 style={{ display: "inline-block" }} className='p-1 bg-success text-light'> {successMessage}</h3></div>
                        )}
                        <div className="col-md-6">
                            <input type="text" placeholder='Name' className='form-control' name='name' />
                            <div id="nameError" className='text-danger'></div>
                        </div>
                        <div className="col-md-6">
                            <input type="email" placeholder='Email' className='form-control' name='email' />
                            <div id="emailError" className='text-danger'></div>
                        </div>
                        <div className="col-md-6">
                            <input type="number" placeholder='Contact Number' className='form-control' name='number' />
                            <div id="numberError" className='text-danger'></div>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder='Service Name' className='form-control' name='service' />
                            <div id="serviceError" className='text-danger'></div>
                        </div>
                        <div className="col-md-12">
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='form-control'></textarea>
                            <div id="messageError" className='text-danger'></div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className='btn btn-success' type='submit'>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}
