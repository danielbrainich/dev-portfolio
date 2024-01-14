export default function Footer() {

    return (
        <footer>
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-column align-items-center p-3">
                            <div className="pt-1">
                                <a className="pe-2" href="#">
                                    <img src="img/portfolio.png" alt="portfolio icon" width="22px" />
                                </a>
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
                            <div class="pt-2 small">
                                Designed and coded by me, Daniel.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
  }
