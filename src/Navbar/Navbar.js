import React, { useState, useEffect, useRef } from "react";
import { FaBell, FaUserCircle, FaSearch, FaChevronDown, FaUser } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

import logo from "../assest/Logo design (1).png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [stockDropdownOpen, setStockDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [footerStockDropdownOpen, setFooterStockDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [mutualFundsDropdownOpen, setMutualFundsDropdownOpen] = useState(false);
  const stockDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const footerStockDropdownRef = useRef(null);
  const portfolioDropdownRef = useRef(null);
  const mutualFundsDropdownRef = useRef(null);

  const toggleStockDropdown = () => {
    setStockDropdownOpen(!stockDropdownOpen);
  };

  const toggleFooterStockDropdown = () => {
    setFooterStockDropdownOpen(!footerStockDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };
  const toggleMutualFundsDropdown = () => {
    setMutualFundsDropdownOpen(!mutualFundsDropdownOpen);
  };
  const togglePortfolioDropdown = () => {
    setPortfolioDropdownOpen(!portfolioDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stockDropdownRef.current && !stockDropdownRef.current.contains(event.target)) {
        setStockDropdownOpen(false);
      }
      if (mutualFundsDropdownRef.current && !mutualFundsDropdownRef.current.contains(event.target)) {
        setMutualFundsDropdownOpen(false);
      }
      if (footerStockDropdownRef.current && !footerStockDropdownRef.current.contains(event.target)) {
        setFooterStockDropdownOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
      if (portfolioDropdownRef.current && !portfolioDropdownRef.current.contains(event.target)) {
        setPortfolioDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderStockDropdown = () => (
    <div className="stockmenu">
      <div className="stockmenu-column">
        <ul>
          <li>
             <div className="dropdown-item">
            <Link to="/stock">Stock Screener</Link>
            <p>Discover stocks based on various filters and criteria to make informed decisions.</p>
            </div>
          </li>
          <li>
          <div className="dropdown-item">
            <Link to="/beststock">Best Stock</Link>
            <p>Explore the best stocks for investment based on analysis and trends.</p>
            </div>
          </li>
          <li>
          <div className="dropdown-item">
            <Link to="/highgrowth">High Growth Stocks</Link>
            <p>Find stocks that are expected to grow rapidly in the upcoming years.</p>
            </div>
          </li>
          <li>
          <div className="dropdown-item">
            <Link to="/niftystock">Nifty 50 Companies</Link>
            <p>Track the top 50 companies listed on the National Stock Exchange of India.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="stockmenu-column">
        <ul>
          <li>
          <div className="dropdown-item">
            <Link to="/nifty">Nifty 100 Companies</Link>
            <p>Explore all 500 companies listed on the Nifty index to diversify your portfolio.</p>
            </div>
          </li>
          <li>
          <div className="dropdown-item">
            <Link to="/smallcap">Small Cap</Link>
            <p>Invest in smaller companies with high potential for growth.</p>
            </div>
          </li>
          <li>
          <div className="dropdown-item">
            <Link to="/midcap">Mid Cap</Link>
            <p>Discover mid-sized companies with a strong growth trajectory.</p> 
            </div>
          </li>
          <li>
          <div className="dropdown-item">
            <Link to="/largecap">Large Cap</Link>
            <p>Focus on large, established companies with stable returns.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderPortfolioDropdown = () => (
    <div className="dropdown-menu">
      <div className="dropdown-item">
        <Link to="/portfolio">My Portfolio</Link>
        <p>Your financial navigator</p>
      </div>
      <div className="dropdown-item">
        <Link to="/portfolio-risk">Portfolio Risk Analysis</Link>
        <p>Risk evaluation and insights</p>
      </div>
      <div className="dropdown-item">
        <Link to="/stockwatchlist">Watchlist</Link>
        <p>Monitor, assess, and improve</p>
      </div>
    </div>
  );



  const renderMutualFundsDropdown = () => (
    <div className="stockmenu">
      <div className="stockmenu-column">
      <ul>
      <li>
      <div className="dropdown-item">
        <Link to="/mutualfund">Top Rated Funds</Link>
        <p>Focus on risk management and long-term growth.</p>
        </div>
      </li>
    <li>
    <div className="dropdown-item">
        <Link to="/fund-screener">Fund Screener</Link>
        <p>Efficient filter and compare investment options.</p>
        </div>
        </li>
        <li>
        <div className="dropdown-item">
      
        <Link to="/bestsmallcapregular">Best Small Cap Fund</Link>
        <p>Strong returns by investing in high-growth opportunities.</p>
        </div>
        </li>
        </ul>
        </div>
      <div className="stockmenu-column">
        <ul>
      <li>
      <div className="dropdown-item">
        <Link to="/growth-funds">Best Growth Fund</Link>
        <p>Focus on high-potential growth.</p>
        </div>
        </li>
      <li>
      <div className="dropdown-item">
        <Link to="/flex-cap-funds">Best Flex Cap Fund</Link>
        <p>Invest in companies poised for future and today’s growth.</p>
        </div>
        </li>
      <li>
      <div className="dropdown-item">
        <Link to="/etf-funds">Best ETF Fund</Link>
        <p>Diverse and cost-effective investment strategy.</p>
        </div>
        </li>
        </ul>
    </div>
    </div>
   
  );
 
    const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="FinanceShastra Logo" className="logo-image" />
        </div>

        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/market">Markets <FaChevronDown className="chevron-icon" /></Link></li>

          <li className="stock-dropdown" ref={stockDropdownRef}>
            <Link to="#"onClick={toggleStockDropdown}>
              Stocks
              <FaChevronDown onClick={toggleStockDropdown} className="chevron-icon" />
            </Link>
            {stockDropdownOpen && renderStockDropdown()}
          </li>
          <li className="mutualfunds-dropdown" ref={mutualFundsDropdownRef}>
  <Link to="#"onClick={toggleMutualFundsDropdown}>
    Mutual Funds
    <FaChevronDown onClick={toggleMutualFundsDropdown} className="chevron-icon" />
  </Link>
  {mutualFundsDropdownOpen && renderMutualFundsDropdown()}
</li>

          <li className="portfolio-dropdown" ref={portfolioDropdownRef}>
          <Link to="#" onClick={togglePortfolioDropdown}>
          Portfolio Manager
              
              <FaChevronDown onClick={togglePortfolioDropdown} className="chevron-icon" />
            </Link>
            {portfolioDropdownOpen && renderPortfolioDropdown()}
          </li>
        </ul>

        <div className="navbar-search">
          <input type="text" placeholder="Search" />
          <FaSearch className="search-icon" />
        </div>
        <h4 onClick={() => navigate('/pricehalf')} style={{ cursor: 'pointer' }}>
            Subscribe
        </h4>
        <div className="navbar-icons">
       
          <FaBell className="icon bell-icon" />

          <div className="profile-section">
            <div className="user-dropdown" onClick={toggleUserDropdown} ref={userDropdownRef}>
              <FaUserCircle className="icon user-icon" />
              {userDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><FaUser className="dropdown-icon" /> <a href="#profile">My Profile</a></li>
                  <li><FaCircleQuestion className="dropdown-icon" /> <a href="#help">Help Center</a></li>
                </ul>
              )}
            </div>
            <span>William</span>
          </div>
        </div>
      </nav>

      <ul className="footer-nav">
        <li><a href="/home">Home</a></li>
        <li className="stock-dropdown" ref={footerStockDropdownRef}>
          <a onClick={toggleFooterStockDropdown} className="footer-link">
            Stocks
            <FaChevronDown className="chevron-icon" />
          </a>
          {footerStockDropdownOpen && renderStockDropdown()}
        </li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#profile">Profile</a></li>
      </ul>
    </>
  );
};

export default Navbar;