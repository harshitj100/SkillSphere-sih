import react from "react";


function Header(){
    return(
        <div>
            <header  className="p-3 text-bg-light" >

                <div className="container" >
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">

                            </svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 text-black">Home</a></li>
                            <li><a href="#" className="nav-link px-2 text-black">Features</a></li>
                            <li><a href="#" className="nav-link px-2 text-black">Pricing</a></li>
                            <li><a href="#" className="nav-link px-2 text-black">FAQs</a></li>
                            <li><a href="#" className="nav-link px-2 text-black">About</a></li>
                        </ul>



                        <div className="text-end">
                            <button type="button" className="btn btn-outline-dark me-2">Login</button>
                            <button type="button" className="btn btn-dark">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;

