import React from 'react'
import Banner from "../assets/images/shawarma_banner.jpg"
import {Link} from "react-router-dom";
import "../styles/home.css"

function Home() {
    return (
        <div className="container-fluid col-xxl-8 px-4 py-5 main_info">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={Banner} alt="Bootstrap Themes" width="400" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Just Eat It</h1>
                    <p className="lead">Savurează gustul autentic al shawormei noastre! Fiecare mușcătură e plină de savoare! Vino și testează acum</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link className="btn btn-lg" to="/menu">Order now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home