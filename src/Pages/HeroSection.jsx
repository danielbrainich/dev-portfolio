export default function HeroSection() {

    return (
        <section className="d-flex" id="hero-section">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="row d-flex py-3">
                    <div className="col-lg-6 d-flex flex-column justify-content-center mb-2">
                        <h1>Daniel Brainich</h1>
                        <h2>Full-stack Developer</h2>
                        <p className="sub-header">Passionate about coding ideas into experiences</p>
                        <div className="pb-4">
                            <a className="p-2" href="https://www.linkedin.com/in/danielbrainich" target="_blank" rel="noopener noreferrer">
                                <img src="img/linkedin.png" alt="linkedin icon" width="22px" />
                            </a>
                            <a className="p-2" href="https://www.github.com/danielbrainich" target="_blank" rel="noopener noreferrer">
                                <img src="img/github.png" alt="github icon" width="22px" />
                            </a>
                            <a className="p-2" href="mailto:danielbrainich@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src="img/email.png" alt="mail icon" width="22px" />
                            </a>
                        </div>
                        <li className="nav-item">
                            <a href="../daniel-brainich-resume.pdf" className="btn btn-sm btn-hero px-3 flex-grow-1" role="button" target="_blank">View resume</a>
                        </li>
                    </div>
                    <div className="mt-2 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <img className="img-fluid profile-pic" src="./img/profile-pic.png" alt="Profile pic" />
                    </div>
                </div>
            </div>
        </section>
    );
}
