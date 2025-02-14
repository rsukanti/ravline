import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Header() {
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation(); // Get current location to check the active page

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    useEffect(() => {
        document.body.classList.toggle('mobile-menu-visible', isMobileMenuOpen);
    }, [isMobileMenuOpen]);

    // Function to check if a route is active
    const isActive = (path) => location.pathname === path;

    const headerStyles = {
        mainHeader: {
            top: '17px',
        },
        mobileMenu: {
            display: isMobileMenuOpen ? 'block' : 'none',
            position: 'fixed',
            zIndex: 999999,
        },
        menuBackdrop: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
    };

    return (
        <div>
            <header className="main-header header-style-one" style={headerStyles.mainHeader}>
                <div className="header-lower">
                    <div className="outer-box">
                        <div className="left-column">
                            <div className="nav-btn nav-toggler navSidebar-button clearfix" onClick={toggleSidebar}>
                                <img src="assets/images/icons/icon-1.png" alt="img" />
                            </div>
                            <div className="logo-box">
                                <figure className="logo"><Link to="/"><img src="assets/images/logo.png" alt="img" /></Link></figure>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="menu-area">
                                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li className={isActive("/") ? "current" : ""}><Link to="/">Home</Link></li>
                                            <li className={isActive("/about") ? "current" : ""}><Link to="/about">About Us</Link></li>
                                            <li className={`dropdown ${isDropdownOpen ? 'open' : ''} ${isActive("/protection-plans") || isActive("/business-funding") ? "current" : ""}`}>
                                                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>Our Services
                                                <div className="dropdown-btn"><span class="fas fa-angle-down"></span></div></a>
                                                <ul style={{ display: isDropdownOpen ? 'block' : 'none' }}>
                                                    <li><Link to="/protection-plans">Protection Plans</Link></li>
                                                    <li><Link to="/business-funding">Business Funding</Link></li>
                                                </ul>
                                            </li>
                                            <li className={isActive("/wealth-education") ? "current" : ""}><Link to="/wealth-education">Wealth Education</Link></li>
                                            <li className={isActive("/contact") ? "current" : ""}><Link to="/contact">Contact Us</Link></li>
                                            
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="menu-right-content">
                                <div class="btn-box">
                                    <button type="button" class="theme-btn btn-one" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Appointments
                                    </button>
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5>Appointments</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <p>Thank you for choosing us—we look forward to connecting with you! To schedule an appointment with a member of our team, call us at <a href="tel:(305) 970-7421">(305) 970-7421</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-header">
                    <div className="outer-container">
                        <div className="outer-box">
                            <div className="left-column">
                                <div className="nav-btn nav-toggler navSidebar-button clearfix" onClick={toggleSidebar}>
                                    <img src="assets/images/icons/icon-1.png" alt="img" />
                                </div>
                                <div className="logo-box">
                                    <figure className="logo"><Link to="/"><img src="assets/images/logo.png" alt="img" /></Link></figure>
                                </div>
                            </div>
                            <div className="right-column">
                                <div className="menu-area">
                                    <nav className="main-menu clearfix">
                                        <ul className="navigation clearfix">
                                            <li className={isActive("/") ? "current" : ""}><Link to="/">Home</Link></li>
                                            <li className={isActive("/about") ? "current" : ""}><Link to="/about">About Us</Link></li>
                                            <li className={`dropdown ${isDropdownOpen ? 'open' : ''} ${isActive("/protection-plans") || isActive("/business-funding") ? "current" : ""}`}>
                                                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>Our Services
                                                <div className="dropdown-btn"><span class="fas fa-angle-down"></span></div></a>
                                                <ul>
                                                    <li><Link to="/protection-plans">Protection Plans</Link></li>
                                                    <li><Link to="/business-funding">Business Funding</Link></li>
                                                </ul>
                                            </li>
                                            <li className={isActive("/wealth-education") ? "current" : ""}><Link to="/wealth-education">Wealth Education</Link></li>
                                            <li className={isActive("/contact") ? "current" : ""}><Link to="/contact">Contact Us</Link></li>
                                           
                                        </ul>
                                    </nav>
                                </div>
                                <div className="menu-right-content">
                                <div class="btn-box">
                                    <button type="button" class="theme-btn btn-one" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Appointments
                                    </button>
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5>Appointments</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <p>Thank you for choosing us—we look forward to connecting with you! To schedule an appointment with a member of our team, call us at <a href="tel:(305) 970-7421">(305) 970-7421</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar - Conditionally Rendered */}
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-visible' : ''}`} style={headerStyles.mobileMenu}>
                <div className="menu-backdrop" style={headerStyles.menuBackdrop} onClick={toggleMobileMenu}></div>
                <div className="close-btn" onClick={toggleMobileMenu}><i className="fas fa-times"></i></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link to="/"><img src="assets/images/logo.png" alt="" title="" /></Link></div>
                    <div className="menu-outer" style={{ textAlign: 'left' }}>
                        <ul className="navigation clearfix">
                            <li className={isActive("/") ? "current" : ""}><Link to="/">Home</Link></li>
                            <li className={isActive("/about") ? "current" : ""}><Link to="/about">About Us</Link></li>
                            <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>Our Services
                                <div className="dropdown-btn"><span class="fas fa-angle-down"></span></div></a>
                                <ul style={{ display: isDropdownOpen ? 'block' : 'none', transition: 'display 0.3s ease' }}>
                                    <li><Link to="/protection-plans">Protection Plans</Link></li>
                                    <li><Link to="/business-funding">Business Funding</Link></li>
                                </ul>
                            </li>
                            <li className={isActive("/wealth-education") ? "current" : ""}><Link to="/wealth-education">Wealth Education</Link></li>
                            <li className={isActive("/contact") ? "current" : ""}><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>9050 Pines Blvd, SUITE 450-3, Pembroke Pines, FL 33024</li>
                        <li><a href="tel:(305) 970-7421">(305) 970-7421</a></li>
                        <li><a href="mailto:contact@ravlinecorp.com">contact@ravlinecorp.com</a></li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul className="clearfix">
                        <li><a href="index.html"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="index.html"><span class="fab fa-facebook-square"></span></a></li>
                        <li><a href="index.html"><span class="fab fa-pinterest-p"></span></a></li>
                        <li><a href="index.html"><span class="fab fa-instagram"></span></a></li>
                        <li><a href="index.html"><span class="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
    );
}
