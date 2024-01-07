export default function AboutMe() {
    return(
        <section className="d-flex" id="about-me">
            <div className="container d-flex flex-column align-items-between justify-content-center">
                <div className="row d-flex p-3">
                    <h2 className="section-title">About Me</h2>
                    <p className="mb-4">
                    Hi, I'm Daniel, a Hack Reactor bootcamp graduate and a full-stack software engineer. At Hack Reactor, I fine-tuned my programming skills and built some fantastic projects, preparing myself for an exciting career in software development.
                    But my coding journey began before than that.
                    <br></br>                    <br></br>
                    While completing an MA in International Affairs, I taught myself SQL to analyze and manipulate large datasets related to global development issues. This is
                    where I first discovered that coding can be powerful, impactful, and also fun! My path from SQL to software engineering wasn't direct, though.
                    <br></br>                    <br></br>
                    Before devoting myself full-time to coding, I first completed my Master's degree and then held a number of management roles in the international development and
                    hospitality industries. And now, I'm thrilled to bring my unique blend of skills and perspectives to the world of software engineering!
                    </p>
                    <div className="col-12 col-lg-4 my-2">
                        <div className="card-body ps-0">
                            <h5>languages</h5>
                            <ul className="list-unstyled d-flex flex-column flex-md-row">
                                <li className="me-md-3 mb-2 mb-md-0">Python</li>
                                <li className="me-md-3 mb-2 mb-md-0">JavaScript</li>
                                <li className="me-md-3 mb-2 mb-md-0">SQL</li>
                                <li className="me-md-3 mb-2 mb-md-0">HTML</li>
                                <li className="me-md-3 mb-2 mb-md-0">CSS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 my-2">
                        <div className="card-body">
                            <h5>back-end frameworks</h5>
                            <ul className="list-unstyled d-flex flex-column flex-md-row">
                                <li className="me-md-3 mb-2 mb-md-0">Django</li>
                                <li className="me-md-3 mb-2 mb-md-0">FastAPI</li>
                                <li className="me-md-3 mb-2 mb-md-0">PostgreSQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 my-2">
                        <div className="card-body">
                            <h5>front-end frameworks</h5>
                            <ul className="list-unstyled d-flex flex-column flex-md-row">
                                <li className="me-md-3 mb-2 mb-md-0">React</li>
                                <li className="me-md-3 mb-2 mb-md-0">Bootstrap</li>
                                <li className="me-md-3 mb-2 mb-md-0">Tailwind</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 my-2">
                        <div className="card-body">
                            <h5>dev ops and deployment</h5>
                            <ul className="list-unstyled d-flex flex-column flex-md-row">
                                <li className="me-md-3 mb-2 mb-md-0">Docker</li>
                                <li className="me-md-3 mb-2 mb-md-0">Heroku</li>
                                <li className="me-md-3 mb-2 mb-md-0">Git</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 my-2">
                        <div className="card-body">
                            <h5>cms</h5>
                            <ul className="list-unstyled d-flex flex-column flex-md-row">
                                <li className="me-md-3 mb-2 mb-md-0">WordPress</li>
                                <li className="me-md-3 mb-2 mb-md-0">Squarespace</li>
                                <li className="me-md-3 mb-2 mb-md-0">Wix</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
