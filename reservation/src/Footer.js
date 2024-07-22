const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-links-left">
                <div className='contacts'>
                    <p>Contacts</p>
                </div>
                <div className="footer-contacts">
                    <p>Address</p>
                    <p>Contact Number</p>
                    <p>Email</p>
                </div>
            </div>
            <div className="footer-title">
                <h1>iReserba</h1>
            </div>
            <div className="footer-links-right">
                <div className="footer-links-container">
                    <ul className="footer-links-no1">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Facilities</a></li>
                    </ul>
                    <ul className="footer-links-no2">
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
