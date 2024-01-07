export default function Footer() {

    return (
        <footer>
            <section id="footer">
                <div className="container">
                    <div className="row">
                            <div className="col d-flex flex-column align-items-center p-3">
                            <div className="pt-1">
                                <a className="pe-2" href="https://www.danielbrainich.com"><img src="./img/homepage.png" width="21" height="21" alt="Homepage icon" /></a>
                                <a className="p-2" href="mailto: danielbrainich@gmail.com"><img src="./img/email.png" width="21" height="21" alt="Email icon" /></a>
                                <a className="p-2" href="https://www.linkedin.com/in/danielbrainich"><img src="./img/linkedin.png" width="21" height="21" alt="Linkedin icon" /></a>
                                <a className="p-2" href="https://www.github.com/danielbrainich"><img src="./img/github.png" width="21" height="21" alt="Github icon" /></a>
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
