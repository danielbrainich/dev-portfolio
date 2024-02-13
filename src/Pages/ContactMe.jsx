import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_USER_ID
          )
            .then((result) => {
                setShowToast(true);
                setFormData({ user_name: '', user_email: '', message: '' });
                setTimeout(() => setShowToast(false), 5000);

            }, (error) => {
                console.log(error.text);
                // add an error message
            });
    };

    return(
        <section className="d-flex" id="contact-me">
            <div>
                {showToast && (
                    <div className="custom-toast toast show position-fixed top-0 end-0" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="me-auto">Success</strong>
                            <button type="button" className="btn-close" onClick={() => setShowToast(false)} aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            Your message was sent successfully!
                        </div>
                    </div>
                )}
            </div>
            <div className="container d-flex flex-column align-items-between justify-content-center my-5">
                <div className="row d-flex p-3">
                    <div className="col-xs-12 col-lg-3">
                        <h3 className="mb-5">Contact</h3>
                    </div>
                    <div className="col-xs-12 col-lg-8 offset-lg-1">
                                <div className="contact-form">
                                    <form onSubmit={sendEmail}>
                                        <div className="mb-3">
                                            <label htmlFor="user_name" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control custom-input"
                                                id="user_name"
                                                name="user_name"
                                                value={formData.user_name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="user_email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control custom-input"
                                                id="user_email"
                                                name="user_email"
                                                value={formData.user_email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Message</label>
                                            <textarea
                                                className="form-control custom-input"
                                                id="message"
                                                name="message"
                                                rows="8"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-contact-me">Send</button>
                                    </form>
                                </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
