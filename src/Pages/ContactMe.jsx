import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_sudgfhq', 'template_j3oj8rf', formData, 'LwUAU6mNe-aioatAP')
            .then((result) => {
                console.log(result.text);
                // add a success message
                setFormData({ user_name: '', user_email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                // add an error message
            });
    };

    return(
        <section className="d-flex" id="contact-me">
            <div className="container d-flex flex-column align-items-between justify-content-center">
                <div className="row d-flex p-3">
                    <div className="col-6">
                        <h2>Contact Me</h2>
                    </div>
                    <div className="col-6">
                        <div className="contact-form">
                            <form onSubmit={sendEmail}>
                                <div className="mb-3">
                                    <label htmlFor="user_name" className="form-label">name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="user_name"
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="user_email" className="form-label">email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="user_email"
                                        name="user_email"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-secondary">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
