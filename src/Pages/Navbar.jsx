export default function Navbar() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <section id="navbar">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg pt-4 pb-4 sticky-top">
                <div className="container">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <span
                    className="nav-link px-4 nav-link-pointer"
                          onClick={() => scrollToSection("about-me")}
                        >
                          ABOUT
                        </span>
                      </li>
                      <li className="nav-item">
                        <span
                    className="nav-link px-4 nav-link-pointer"
                          onClick={() => scrollToSection("my-projects")}
                        >
                          PROJECTS
                        </span>
                      </li>
                      <li className="nav-item">
                        <span
                    className="nav-link px-4 nav-link-pointer"
                          onClick={() => scrollToSection("contact-me")}
                        >
                          CONTACT
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
