export default function MySkills(){
    return(
        <section className="d-flex" id="my-skills">
            <div className="container d-flex flex-column align-items-between justify-content-center">
                <div className="row d-flex p-3">
                    <h2>My Skills</h2>
                    <div className="col-12 col-lg-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5>Front End</h5>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5>Back End</h5>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5>Wordpress</h5>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
