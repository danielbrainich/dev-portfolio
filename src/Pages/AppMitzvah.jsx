export default function AppMitzvah() {
    return (
        <section className="d-flex" id="app-mitzvah">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="row d-flex py-3">
                    <div className="col-lg-6 d-flex flex-column justify-content-center mb-2">
                        <p className="app-mitzvah-header">AppMitzvah</p>
                        <p className="app-mitzvah-subheader">
                            AppMitzvah is your all-in-one guide to Shabbat and
                            Jewish holidays. Here's how you can get started:
                        </p>
                        <ul>
                            <li>
                                <strong>Step 1:</strong> Make sure you have Expo
                                Go installed on your iOS device.
                            </li>
                            <li>
                                <strong>Step 2:</strong> If not, download Expo
                                Go from the{" "}
                                <a
                                    href="https://apps.apple.com/us/app/expo-go/id982107779"
                                    target="_blank"
                                >
                                    App Store
                                </a>
                            </li>
                            <li>
                                <strong>Step 3:</strong> Once you have Expo Go
                                installed, you can launch AppMitzvah by tapping{" "}
                                <a href="exp://u.expo.dev/update/174c8178-f82b-468c-aa77-13b670f14000">
                                    this link
                                </a>{" "}
                                on your iOS device or scanning the QR code
                                below.
                            </li>
                            <img
                                className="img-fluid m-3"
                                width={200}
                                src="./img/eas-update.svg"
                                alt="QR code for AppMitzvah"
                            />
                        </ul>
                        <p className="app-mitzvah-subheader">
                            Enjoy exploring with
                            AppMitzvah!
                        </p>
                    </div>
                    <div className="mt-2 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex">
                            <img
                                className="img-fluid app-mitzvah-screenshot"
                                width={1000}
                                src="./img/app-mitzvah-screenshot.png"
                                alt="AppMitzvah screenshot"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
