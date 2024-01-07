export default function HeroSection() {
    return (
        <section className="d-flex" id="hero-section">
            <div className="container d-flex flex-column align-items-between justify-content-center">
                <div className="row d-flex p-3">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h1>Daniel Brainich</h1>
                        <h2>Full-stack Developer</h2>
                        <p className="sub-header">passionate about coding ideas into experiences</p>
                        <div className="pt-1">
                            <a className="pe-2" href="https://www.danielbrainich.com"><img src="./img/homepage.png" width="21" height="21" alt="Homepage icon" /></a>
                            <a className="p-2" href="mailto: danielbrainich@gmail.com"><img src="./img/email.png" width="21" height="21" alt="Email icon" /></a>
                            <a className="p-2" href="https://www.linkedin.com/in/danielbrainich"><img src="./img/linkedin.png" width="21" height="21" alt="Linkedin icon" /></a>
                            <a className="p-2" href="https://www.github.com/danielbrainich"><img src="./img/github.png" width="21" height="21" alt="Github icon" /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <img className="profile-pic" src="./img/profile-pic.png" alt="Profile pic" />
                    </div>
                </div>
            </div>
        </section>
    );
}
