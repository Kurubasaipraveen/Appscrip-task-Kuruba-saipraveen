import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>BE THE FIRST TO KNOW</h2>
                        <p>Sign up for updates from metta use.</p>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Enter your e-mail..." />
                            </div>
                            <button type="submit" className="btn btn-primary">SUBSCRIBE</button>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <h2>CONTACT US</h2>
                        <p>+44 221 133 5380</p>
                        <p><a href="mailto:customercare@mettamuse.com" className="text-white">customercare@mettamuse.com</a></p>
                    </div>
                    <div className="col-md-3">
                        <h2>CURRENCY</h2>
                        <p>USD</p>
                        <p>Transactions will be completed in Euros and currency release is available on request.</p>
                    </div>
                    <div className="col-md-3">
                        <h2>metta use</h2>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">About Us</a></li>
                            <li><a href="#" className="text-white">Stories</a></li>
                            <li><a href="#" className="text-white">Artisans</a></li>
                            <li><a href="#" className="text-white">Boutiques</a></li>
                            <li><a href="#" className="text-white">Contact Us</a></li>
                            <li><a href="#" className="text-white">EU Compliances Docs</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2>QUICK LINKS</h2>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Orders & Shipping</a></li>
                            <li><a href="#" className="text-white">Join/Login as a Seller</a></li>
                            <li><a href="#" className="text-white">Payment & Pricing</a></li>
                            <li><a href="#" className="text-white">Return & Refunds</a></li>
                            <li><a href="#" className="text-white">FAQs</a></li>
                            <li><a href="#" className="text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-white">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2>FOLLOW US</h2>
                        <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
                    </div>
                    <div className="col-md-3">
                        <h2>metta use ACCEPTS</h2>
                        <i className="bi bi-credit-card-2-front me-2"></i>
                        <i className="bi bi-paypal me-2"></i>
                        <i className="bi bi-apple-pay"></i>
                    </div>
                    <div className="col-12 text-center mt-3">
                        <p>Copyright © 2024 mettamuse. All rights reserved By Kuruba saipraveen.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
