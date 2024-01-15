export default function MyProjects() {
    return(
        <section className="d-flex" id="my-projects">
            <div className="container d-flex flex-column align-items-between justify-content-center my-5">
                <div className="row d-flex p-3">
                    <h3 className="mb-5">My Projects</h3>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div className="card h-100">
                            <div className="row g-0">
                                <img src="../img/screenshot.png" className="img-fluid rounded-start p-4" alt="Test" />
                                <div className="card-body">
                                <div className="d-flex justify-content-center mb-4">
                                        <a className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1" href="https://race-tracker-e0e5cf38a81d.herokuapp.com/races/"  role="button" target="_blank" rel="noopener noreferrer">Visit deployed app</a>
                                        <a className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1" href="https://github.com/danielbrainich/race-tracker" role="button" target="_blank" rel="noopener noreferrer">Visit codebase</a>
                                    </div>
                                    <h5 className="card-title">Race Tracker</h5>
                                    <p className="card-text small">A Django-powered full-stack web application that allows runners to manage and analyze their race data. RaceTracker
                                    demonstrates my ability to build functional and intuitive full-stack web applications with user-friendly and responsive designs.</p>
                                    <div>
                                        <span className="badge bg-dark text-white me-2">Python</span>
                                        <span className="badge bg-dark text-white me-2">Django</span>
                                        <span className="badge bg-dark text-white me-2">HTML</span>
                                        <span className="badge bg-dark text-white me-2">CSS</span>
                                        <span className="badge bg-dark text-white me-2">Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div className="card h-100">
                            <div className="row g-0">
                                <img src="../img/insults-screenshot.png" className="img-fluid rounded-start p-4" alt="Test" />
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        <a className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1" href="https://www.siliconvalleyinsults.com"  role="button" target="_blank" rel="noopener noreferrer">Visit deployed app</a>
                                        <a className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1" href="https://github.com/danielbrainich/silicon-valley-insults" role="button" target="_blank" rel="noopener noreferrer">Visit codebase</a>
                                    </div>
                                    <h5 className="card-title">Silicon Valley Insults</h5>
                                    <p className="card-text small">A public API with meticulous documentation that adheres to RESTful principles. This FastAPI-powered service delivers up
                                    humorous tech-themed insults from the television show "Silicon Valley" to multiple endpoints, where users are able to request content by season, episode,
                                    and character.</p>
                                    <div>
                                        <span className="badge bg-dark text-white me-2">Python</span>
                                        <span className="badge bg-dark text-white me-2">FastAPI</span>
                                        <span className="badge bg-dark text-white me-2">HTML</span>
                                        <span className="badge bg-dark text-white me-2">CSS</span>
                                        <span className="badge bg-dark text-white me-2">Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div className="card h-100">
                            <div className="row g-0">
                                <img src="../img/portfolio-screenshot.png" className="img-fluid rounded-start p-4" alt="Test" />
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        <a className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1" href="#">Visit deployed app</a>
                                        <a className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1" href="https://github.com/danielbrainich/dev-portfolio" role="button" target="_blank" rel="noopener noreferrer">Visit codebase</a>
                                    </div>
                                    <h5 className="card-title">Dev Portfolio</h5>
                                    <p className="card-text small">A React single-page application that showcases my proficiency in modern web development and SPA architecture. I applied
                                    Bootstrap for responsive design and crafted a minimalist theme for a clean and user-friendly interface.</p>
                                    <div>
                                        <span className="badge bg-dark text-white me-2">JavaScript</span>
                                        <span className="badge bg-dark text-white me-2">React</span>
                                        <span className="badge bg-dark text-white me-2">JSX</span>
                                        <span className="badge bg-dark text-white me-2">CSS</span>
                                        <span className="badge bg-dark text-white me-2">Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12 col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div className="card h-100">
                            <div className="row g-0">
                                <img src="../img/screenshot.png" className="img-fluid rounded-start p-4" alt="Test" />
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        <a href="URL_TO_CODEBASE" className="btn btn-sm btn-nav px-3 mx-1 flex-grow-1" role="button">Visit codebase</a>
                                        <a href="URL_TO_DEPLOYED_APP" className="btn btn-sm btn-nav px-3 mx-1 flex-grow-1" role="button">Visit deployed app</a>
                                    </div>
                                    <h5 className="card-title">Finca Fox Coffee</h5>
                                    <p className="card-text small">An online store on WordPress for Finca Fox Coffee. The site offers a straightforward experience for customers to explore
                                    and purchase the coffee roaster's products. By prioritizing user experience and implementing e-commerce features seamlessly, the Finca Fox Coffee store
                                    not only provides a convenient platform for transactions but also enhances the overall digital presence of the brand.</p>
                                    <div>
                                        <span className="badge bg-dark text-white me-2">WordPress</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div className="card h-100">
                            <div className="row g-0">
                                <img src="../img/screenshot.png" className="img-fluid rounded-start p-4" alt="Test" />
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        {/* <a className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1" href=""  role="button" target="_blank" rel="noopener noreferrer">Visit deployed app</a> */}
                                        <a className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1" href="https://github.com/danielbrainich/politick" role="button" target="_blank" rel="noopener noreferrer">Visit codebase</a>
                                    </div>
                                    <h5 className="card-title">Rep Report</h5>
                                    <p className="card-text small">A React application that enables users to search their House of Representatives member by address and access
                                    campaign and legislative information aggregated from multiple online sources. MeetMyRep integrates data from multiple APIs using effective data
                                    parsing and React state management and hooks to present information in a dynamic and engaging interface.</p>
                                    <div>
                                        <span className="badge bg-dark text-white me-2">Python</span>
                                        <span className="badge bg-dark text-white me-2">FastAPI</span>
                                        <span className="badge bg-dark text-white me-2">React</span>
                                        <span className="badge bg-dark text-white me-2">JavaScript</span>
                                        <span className="badge bg-dark text-white me-2">Bootstrap</span>
                                        <span className=" badge bg-dark text-white me-2">HTML</span>
                                        <span className="badge bg-dark text-white me-2">CSS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
