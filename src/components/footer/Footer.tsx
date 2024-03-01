import './Footer.scss';
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter, FaSquareYoutube   } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__socials">
                <a href="/" className="footer__social"><FaSquareFacebook /></a>
                <a href="/" className="footer__social"><FaSquareInstagram  /></a>
                <a href="/" className="footer__social"><FaSquareTwitter  /></a>
                <a href="/" className="footer__social"><FaSquareYoutube /></a>
            </div>
            <ul className='footer__links'>
                <li className="footer__link"><a href="/">Lien footer</a></li>
                <li className="footer__link"><a href="/">Lien footer</a></li>
                <li className="footer__link"><a href="/">Lien footer</a></li>
                <li className="footer__link"><a href="/">Lien footer</a></li>
                <li className="footer__link"><a href="/">Lien footer</a></li>
                <li className="footer__link"><a href="/">Lien footer</a></li>
                <li className="footer__link"><a href="/">Lien footer</a></li>
                <li className="footer__link"><a href="/">Lien footer</a></li>
            </ul>
            <div className="footer__copy">
                VideosPlatform - tous droits réservés 2024
            </div>
        </div>
    </div>
  )
}

export default Footer