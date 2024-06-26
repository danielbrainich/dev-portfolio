import { Link } from "react-router-dom";


export default function MyProjects() {
    return (
        <section className="d-flex" id="my-projects">
            <div className="container d-flex flex-column align-items-between justify-content-center my-5">
                <div className="row d-flex p-3">
                    <h3 className="mb-5">My Projects</h3>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div className="card h-100">
                            <div className="row g-0">
                                <img
                                    src="../img/app-mitzvah-screenshot.png"
                                    className="img-fluid rounded-start p-4"
                                    alt="Test"
                                />
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        <Link
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            to="/app-mitzvah"
                                            type="button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live App
                                        </Link>
                                        <a
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            href="https://github.com/danielbrainich/app-mitzvah"
                                            role="button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Codebase
                                        </a>
                                    </div>
                                    <h5 className="card-title">AppMitzvah</h5>
                                    <p className="card-text small">
                                        A fun and user-centric React Native app
                                        that calculates and displays information
                                        related to Jewish holiday and Shabbat
                                        schedules. It incorporates Redux for
                                        efficient state management and uses the
                                        Expo Location API to calculate
                                        personalized times based on the user's
                                        coordinates and altitude.
                                    </p>
                                    <div>
                                        <span className="badge me-2">
                                            JavaScript
                                        </span>
                                        <span className="badge me-2">
                                            React Native
                                        </span>
                                        <span className="badge me-2">
                                            Redux
                                        </span>
                                        <span className="badge me-2">Expo</span>
                                        <span className="badge me-2">Mobile Apps</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div className="card h-100">
                            <div className="row g-0">
                                <img
                                    src="../img/trail-people-screenshot.png"
                                    className="img-fluid rounded-start p-4"
                                    alt="Test"
                                />
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        <a
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            href="https://trail-people-06a6eafa5395.herokuapp.com/"
                                            role="button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live App
                                        </a>
                                        <a
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            href="https://github.com/danielbrainich/trail-people"
                                            role="button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Codebase
                                        </a>
                                    </div>
                                    <h5 className="card-title">Trail People</h5>
                                    <p className="card-text small">
                                        A full-stack Django/React social
                                        platform designed for trail runners.
                                        Users can post, comment, and like, as
                                        well as create, share, and save custom
                                        Google Maps API-powered trail maps.
                                        Trail People leverages React for
                                        seamless interactivity and Bootstrap for
                                        responsiveness across devices. Secure
                                        frontend and backend authentication
                                        ensures a secure user experience.
                                    </p>
                                    <div>
                                        <span className="badge me-2">
                                            Python
                                        </span>
                                        <span className="badge me-2">
                                            Django
                                        </span>
                                        <span className="badge me-2">
                                            React
                                        </span>
                                        <span className="badge me-2">
                                            JavaScript
                                        </span>
                                        <span className="badge me-2">
                                            Bootstrap
                                        </span>
                                        <span className=" badge me-2">JSX</span>
                                        <span className="badge me-2">CSS</span>
                                        <span className="badge me-2">
                                            Google Maps JavaScript API
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div className="card h-100">
                            <div className="row g-0">
                                <img
                                    src="../img/rep-radar-screenshot.png"
                                    className="img-fluid rounded-start p-4"
                                    alt="Test"
                                />
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        <a
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            href="https://main--rep-radar.netlify.app/"
                                            role="button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live App
                                        </a>
                                        <a
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            href="https://github.com/danielbrainich/rep-radar"
                                            role="button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Codebase
                                        </a>
                                    </div>
                                    <h5 className="card-title">Rep Radar</h5>
                                    <p className="card-text small">
                                        A fullstack React/FastAPI app that finds
                                        a user's member of Congress and serves
                                        up campaign and legislative information
                                        from multiple public APIs. Rep Radar
                                        uses complex data parsing and React
                                        state management and hooks to present
                                        information in a dynamic and engaging
                                        interface. Server-side caching and
                                        concurrent API calls optimize
                                        performance.
                                    </p>
                                    <div>
                                        <span className="badge me-2">
                                            Python
                                        </span>
                                        <span className="badge me-2">
                                            FastAPI
                                        </span>
                                        <span className="badge me-2">
                                            React
                                        </span>
                                        <span className="badge me-2">
                                            JavaScript
                                        </span>
                                        <span className="badge me-2">
                                            Bootstrap
                                        </span>
                                        <span className=" badge me-2">JSX</span>
                                        <span className="badge me-2">CSS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div className="card h-100">
                            <div className="row g-0">
                                <img
                                    src="../img/race-tracker-screenshot.png"
                                    className="img-fluid rounded-start p-4"
                                    alt="Test"
                                />
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        <a
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            href="https://race-tracker-e0e5cf38a81d.herokuapp.com/"
                                            role="button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live App
                                        </a>
                                        <a
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            href="https://github.com/danielbrainich/race-tracker"
                                            role="button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Codebase
                                        </a>
                                    </div>
                                    <h5 className="card-title">Race Tracker</h5>
                                    <p className="card-text small">
                                        A Django-powered full-stack web app that
                                        allows runners to manage and analyze
                                        their race data. RaceTracker
                                        demonstrates my ability to build
                                        polished and intuitive full-stack web
                                        applications with user-friendly and
                                        responsive designs.
                                    </p>
                                    <div>
                                        <span className="badge me-2">
                                            Python
                                        </span>
                                        <span className="badge me-2">
                                            Django
                                        </span>
                                        <span className="badge me-2">HTML</span>
                                        <span className="badge me-2">CSS</span>
                                        <span className="badge me-2">
                                            Bootstrap
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div className="card h-100">
                            <div className="row g-0">
                                <img
                                    src="../img/insults-screenshot.png"
                                    className="img-fluid rounded-start p-4"
                                    alt="Test"
                                />
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        <a
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            href="https://www.siliconvalleyinsults.com"
                                            role="button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live App
                                        </a>
                                        <a
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            href="https://github.com/danielbrainich/silicon-valley-insults"
                                            role="button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Codebase
                                        </a>
                                    </div>
                                    <h5 className="card-title">
                                        Silicon Valley Insults
                                    </h5>
                                    <p className="card-text small">
                                        A public API with meticulous
                                        documentation that adheres to RESTful
                                        principles. This FastAPI-powered service
                                        delivers up humorous tech-themed insults
                                        from the television show "Silicon
                                        Valley" to multiple endpoints, where
                                        users are able to request content by
                                        season, episode, and character.
                                    </p>
                                    <div>
                                        <span className="badge me-2">
                                            Python
                                        </span>
                                        <span className="badge me-2">
                                            FastAPI
                                        </span>
                                        <span className="badge me-2">HTML</span>
                                        <span className="badge me-2">CSS</span>
                                        <span className="badge me-2">
                                            Bootstrap
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div className="card h-100">
                            <div className="row g-0">
                                <img
                                    src="../img/portfolio-screenshot.png"
                                    className="img-fluid rounded-start p-4"
                                    alt="Test"
                                />
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        <a
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            href="#"
                                        >
                                            Live App
                                        </a>
                                        <a
                                            className="btn btn-sm btn-projects px-3 mx-1 flex-grow-1"
                                            href="https://github.com/danielbrainich/dev-portfolio"
                                            role="button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Codebase
                                        </a>
                                    </div>
                                    <h5 className="card-title">
                                        Dev Portfolio
                                    </h5>
                                    <p className="card-text small">
                                        A React single-page application that
                                        showcases my proficiency in modern web
                                        development and SPA architecture. I
                                        applied Bootstrap for responsive design
                                        and crafted a minimalist theme for a
                                        clean and user-friendly interface.
                                    </p>
                                    <div>
                                        <span className="badge me-2">
                                            JavaScript
                                        </span>
                                        <span className="badge me-2">
                                            React
                                        </span>
                                        <span className="badge me-2">JSX</span>
                                        <span className="badge me-2">CSS</span>
                                        <span className="badge me-2">
                                            Bootstrap
                                        </span>
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
