export default function AboutMe() {
    return(
        <section className="d-flex" id="about-me">
            <div className="container d-flex flex-column align-items-between justify-content-center my-5">
                <div className="row d-flex p-3">
                    <h3 className="section-title mb-5">About</h3>
                    <p className="mb-3 bigger">
                    Hi, I'm Daniel.
                    </p>
                    <p className="mb-3 bigger">
                    I'm an avid trail runner and a full-stack software engineer. I'm passionate about developing ideas into efficient and user-friendly web applications, and I love the challenge
                    of learning new tools, frameworks, and programming languages.
                    </p>
                    <p className="mb-3 bigger">
                    As a professional and as a teammate, I'm collaborative, motivated, and committed to finding the best solutions to engineering problems. In my free time, I have a blast building
                    apps that are fun and unique, and finding new ways to optimize them for better performance and a more engaging user experience.
                    </p>
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-2">
                            <div className="card p-2 m-2 h-100">
                                <div className="card-body">
                                    <h4>Languages</h4>
                                    <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap">
                                        <li className="me-md-3 mb-2 mb-md-0">Python</li>
                                        <li className="me-md-3 mb-2 mb-md-0">JavaScript</li>
                                        <li className="me-md-3 mb-2 mb-md-0">SQL</li>
                                        <li className="me-md-3 mb-2 mb-md-0">HTML</li>
                                        <li className="me-md-3 mb-2 mb-md-0">CSS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-2">
                            <div className="card p-2 m-2 h-100">
                                <div className="card-body">
                                    <h4>Backend</h4>
                                    <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap">
                                        <li className="me-md-3 mb-2 mb-md-0">Django</li>
                                        <li className="me-md-3 mb-2 mb-md-0">FastAPI</li>
                                        <li className="me-md-3 mb-2 mb-md-0">PostgreSQL</li>
                                        <li className="me-md-3 mb-2 mb-md-0">MongoDB</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-2">
                            <div className="card p-2 m-2 h-100">
                                <div className="card-body">
                                <h4>Frontend</h4>
                                <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap">
                                        <li className="me-md-3 mb-2 mb-md-0">React</li>
                                        <li className="me-md-3 mb-2 mb-md-0">JSX</li>
                                        <li className="me-md-3 mb-2 mb-md-0">Bootstrap</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-2">
                            <div className="card p-2 m-2 h-100">
                                <div className="card-body">
                                    <h4>DevOps and Deployment</h4>
                                    <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap">
                                        <li className="me-md-3 mb-2 mb-md-0">Docker</li>
                                        <li className="me-md-3 mb-2 mb-md-0">Git</li>
                                        <li className="me-md-3 mb-2 mb-md-0">CI/CD</li>
                                        <li className="me-md-3 mb-2 mb-md-0">Heroku</li>
                                        <li className="me-md-3 mb-2 mb-md-0">Netlify</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
