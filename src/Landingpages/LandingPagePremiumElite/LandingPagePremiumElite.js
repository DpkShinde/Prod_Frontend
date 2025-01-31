import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import "./LandingPagePremiumElite.css";


const LandingPagePremiumElite = () => {
  return (
    <div className="landingpagepremiumelite-container">
      <h2 className="landingpagepremiumelite-heading">
        Find the plan that works best for you and start your trading journey today!
      </h2>
      <div className="most-popular-landingpagepremiumelitecontainer">
  <h2 className="most-popular-textt">Most Popular!</h2>
  <div className="landingpagepremiumelite-plans">
  <div className="landingpagepremiumelite-card">
  <h3 className="landingpagepremiumelite-plan-title">Premium</h3>
  <p className="landingpagepremiumelite-plan-description">
    Invest smarter, invest confidently with the Premium Plan!
  </p>

  <div className="landingpagepremiumelite-content-row">
    {/* Price */}
    <div className="landingpagepremiumelite-price">
      <span className="landingpagepremiumelite-price-amount">₹7,999/</span>
      <span className="landingpagepremiumelite-year">Year</span>
      <span className="landingpagepremiumelite-original-price">  ₹19,999/-</span><br/>
      <span className="landingpagepremiumelite-discount">You save</span>
      <span className="landingpagepremiumelitediscountt">₹12,000 (60%)</span>
      <span className="landingpagepremiumelitediscounttt">a year</span>
    </div>

   

    {/* Features */}
    <div className="landingpagepremiumelite-features">
      <div className="landingpagepremiumelite-column">
        <h4 className='plan-featuressssh4'> <FontAwesomeIcon icon={faCircleCheck} />Features:</h4>
        <ul>
          <li>
            <strong>150 Stock Recommendations:</strong> Expert recommendations on 150 stocks to optimize your portfolio.
          </li>
          <li>
            <strong>StockSIP:</strong> Automate your investments with StockSIP for consistent wealth creation.
          </li>
          <li>
            <strong>Premium Screener:</strong> Access advanced tools to filter and analyze stocks tailored to your strategy.
          </li>
          <li>
            <strong>Q&A Feature:</strong> Get personalized investment advice from our experts.
          </li>
          <li>
            <strong>Discover Top-rated Stocks:</strong> Identify the best-performing stocks based on comprehensive research.
          </li>
          <li>
            <strong>Premium Actionable Insights:</strong> Stay ahead with exclusive updates and analysis on market trends.
          </li>
        </ul>
      </div>
      <div className="landingpagepremiumelite-columnn">
      <h4 className='plan-featuresssh4'> <FontAwesomeIcon icon={faCircleCheck} />Additional Benefits:</h4>
            <ul>
              <li>
                <strong>Stock Research:</strong> Receive Buy/Sell/Hold recommendations on all listed stocks, backed by deep, data-driven research.
              </li>
              <li>
                <strong>Stock of the Week:</strong> A high-potential stock handpicked by our Research Team.
              </li>
              <li>
                <strong>Research Reports:</strong> Access the real-time research reports on any stock.
              </li>
              <li>
                <strong>Momentum Stocks:</strong> Identify and capitalize on the best momentum stocks for any market phase.
              </li>
            </ul>
          </div>
          
        </div> 
    </div>



        <button className="landingpagepremiumelite-button">Continue</button>
      </div>
      </div>
      </div>

     
      <div className="landingpageelite-card">
        <h3 className="landingpagepremiumelite-plan-title">Elite</h3>
        <p className="landingpagepremiumelite-plan-description">
          Empower your investment journey with the Elite Plan!
        </p>
        <div className="landingpagepremiumelite-content-row">
        <div className="landingpagepremiumelite-price">
        <span className="landingpagepremiumelite-price-amount">₹2,999/</span>
        <span className="landingpagepremiumelite-year">Year</span>
      <span className="landingpagepremiumelite-original-price">  ₹8,999/-</span><br/>
      <span className="landingpagepremiumelite-discount">You save</span>
      <span className="landingpagepremiumelitediscountt">₹6,000 (68%)</span>
      <span className="landingpagepremiumelitediscounttt">a year</span>
    </div>
        
    <div className="landingpagepremiumelite-features">
      <div className="landingpagepremiumelite-column">
        <h4 className='plan-featuressssh4'> <FontAwesomeIcon icon={faCircleCheck} />Features:</h4>
            <ul>
              <li>
                <strong>50 Stock Recommendations:</strong> Expert recommendations to build a focused and profitable portfolio.
              </li>
              <li>
                <strong>Stocks Screener:</strong> Access essential tools to analyze and screen stocks effectively.
              </li>
              <li>
                <strong>Research Tool:</strong> Utilize advanced resources for in-depth stock research.
              </li>
              <li>
                <strong>Discover Top-rated Stocks:</strong> Easily find the best-performing stocks.
              </li>
            </ul>
          </div>
          <div className="landingpagepremiumelite-columnn">
      <h4 className='plan-featuresssh4'> <FontAwesomeIcon icon={faCircleCheck} />Additional Benefits:</h4>
            <ul>
              <li>
                <strong>Stock of the Month:</strong> One carefully selected stock handpicked by our Investment Committee every month.
              </li>
              <li>
                <strong>Research Reports:</strong> Access the real-time research reports on any stock.
              </li>
              <li>
                <strong>Momentum Stocks:</strong> Identify and capitalize on the best momentum stocks for any market phase.
              </li>
            </ul>
          </div>
        </div>
        </div>
        <button className="landingpageelite-button">Continue</button>
      </div>
    </div>
     

  );
};

export default LandingPagePremiumElite;
