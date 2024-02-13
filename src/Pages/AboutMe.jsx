export default function AboutMe() {
    return(
        <section className="d-flex" id="about-me">
            <div className="container d-flex flex-column align-items-between justify-content-center my-5">
                <div className="row d-flex p-3">
                    <h3 className="section-title mb-5">About</h3>
                    <p className="mb-2">
                    Hi, I'm Daniel Brainich. I'm an avid trail runner and a software developer searching for my first role. I recently graduated from an immersive software engineering bootcamp,
                    where I honed my programming skills and built some awesome full-stack apps. I'm having a blast building apps that are fun and unique, and figuring out new ways to optimize
                    them for better performance and a more engaging user experience.
                    </p>
                    <p className="mb-2">
                    My coding journey actually began years earlier, when I first used SQL to work with large datasets related to global development while pursuing an MA in international affairs.
                    I didn't think of myself as a coder at the time, but this is where I first discovered that coding can be powerful, impactful, and also fun! Before devoting myself full-time to
                    software engineering, I completed my MA and then held a number of management roles in the international development and hospitality industries.
                    </p>
                    <p className="mb-5">
                    Now, I'm thrilled to bring my unique blend of skills, perspectives, and passions to the world of software engineering!
                    </p>
                    <div className="col-12 col-md-6 col-lg-4 my-2">
                        <div className="card p-2">
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
                    <div className="col-12 col-md-6 col-lg-4 my-2">
                    <div className="card p-2">
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
                    <div className="col-12 col-md-6 col-lg-4 my-2">
                    <div className="card p-2">
                            <div className="card-body">
                            <h4>Frontend</h4>
                            <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap">
                                    <li className="me-md-3 mb-2 mb-md-0">React</li>
                                    <li className="me-md-3 mb-2 mb-md-0">Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-2">
                    <div className="card p-2">
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
                    <div className="col-12 col-md-6 col-lg-4 my-2">
                    <div className="card p-2">
                            <div className="card-body">
                                <h4>CMS</h4>
                                <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap">
                                    <li className="me-md-3 mb-2 mb-md-0">WordPress</li>
                                    <li className="me-md-3 mb-2 mb-md-0">Squarespace</li>
                                    <li className="me-md-3 mb-2 mb-md-0">Wix</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-2">
                    <div className="card p-2">
                            <div className="card-body">
                                <h4>Project Management</h4>
                                <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap">
                                    <li className="me-md-3 mb-2 mb-md-0">Trello</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
