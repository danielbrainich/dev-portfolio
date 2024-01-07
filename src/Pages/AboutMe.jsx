export default function AboutMe() {
    return(
        <section className="d-flex" id="about-me">
            <div className="container d-flex flex-column align-items-between justify-content-center">
                <div className="row d-flex p-3">
                    <h2 className="section-title">About Me</h2>
                    <p>
                    Hi, I'm Daniel, a recent Hack Reactor bootcamp graduate and a full-stack software engineer. What excites me most about coding? Its limitless potential
                    to solve problems, drive innovation, and create amazing things.
                    <br></br>                    <br></br>
                    At bootcamp, I fine-tuned my programming skills and built some fantastic projects, preparing myself for an exciting career in software development.
                    However, my coding journey began a bit earlier than that.
                    <br></br>                    <br></br>
                    While completing an MA in International Affairs, I often relied on SQL to analyze and manipulate complex datasets related to global development issues. This is
                    where I first discovered that coding can be powerful, impactful, and also fun!
                    <br></br>                    <br></br>
                    My path from SQL to software engineering wasn't direct, though. Before devoting myself full-time to coding, I first completed my Master's degree and then held
                    a number of management roles in international development and the hospitality industry.
                    <br></br>                    <br></br>
                    My diverse academic and professional experience has been both challenging and rewarding. And now, I'm thrilled to bring this unique blend of skills and
                    perspectives to the world of software engineering!

                    </p>
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
                </div>
            </div>
        </section>
    );
}
