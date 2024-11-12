import React from 'react'
import {Link} from "react-router-dom";
import TelegramIcon from "../assets/images/512px-Instagram_icon.png";
import InstagramIcon from "../assets/images/Telegram_logo.svg.png";
import XIcon from "../assets/images/twiter.png";
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top mx-4">
    <div className="col-md-4 d-flex align-items-center mx-4">
      <span className="mb-3 mb-md-0 text-body-secondary">© {new Date().getFullYear()} SuperKebab, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-4">
      <Link className="ms-3 text-body-secondary" to="/" ><img src={InstagramIcon} alt="instagram" style={{width: '30px'}}/></Link>
      <Link className="ms-3 text-body-secondary" to="/" ><img src={TelegramIcon} alt="telegram" style={{width: '30px'}}/></Link>
      <Link className="ms-3 text-body-secondary" to="/" ><img src={XIcon} alt="x" style={{width: '30px'}}/></Link>
    </ul>
  </footer>
  )
}

export default Footer