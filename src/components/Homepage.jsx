import React, { useState, useEffect } from 'react';
import '../assets/css/homepage.css';
import Navbar from './Navbar';
import '../assets/images/best.png';

const Homepage = () => {
  

  useEffect(() => {
    const animateCount = (setter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 10);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(timer);
          setter(target);
        } else {
          setter(Math.ceil(start));
        }
      }, 10);
    };

    animateCount(setSkilledExperts, 225, 2000);
    animateCount(setHappyClients, 1050, 2000);
    animateCount(setCompleteProjects, 2500, 2000);
  }, []);
  return (
    <div className="body">
      {/* Header */}
      <div className='header'>
        <Navbar/>
      {/* Hero Section */}
     <div className="container">
      <div className="herosec"> 
              <h1>Worldwide Freight Services</h1>
              <p><a href="/" className="btn btn-primary py-3 px-5 text-white">Get Started!</a></p>
      </div>
      </div>
    </div>
      {/* Services Section */}
      <div className="request-quote-container">
      <div className="quote-text-section">
        <h2 className="title">GET A QUOTE</h2>
        <h3 className="subtitle">Request A Free Quote</h3>
        <p className="description">
          Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. 
          Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed 
          ipsum et kasd ut. Erat duo eos et erat sed diam duo
        </p>
        <div className="statistics">
          <div className="stat">
            <h4 className="stat-number">{skilledExperts}</h4>
            <p className="stat-label">Skilled Experts</p>
          </div>
          <div className="stat">
            <h4 className="stat-number">{happyClients}</h4>
            <p className="stat-label">Happy Clients</p>
          </div>
          <div className="stat">
            <h4 className="stat-number">{completeProjects}</h4>
            <p className="stat-label">Complete Projects</p>
          </div>
        </div>
      </div>
      <div className="quote-form-section">
        <form className="quote-form">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <select className="form-input">
            <option>Select A Service</option>
            {/* Add more options as needed */}
          </select>
          <button type="submit" className="submit-button">Get A Quote</button>
        </form>
      </div>
    </div>
    {/* why choose us */}
          <div className="why-choose-us-container">
      <div className="image-section">
        <img src="{best.png}" alt="Logistics" />
      </div>
      <div className="text-section">
        <h2 className="title">WHY CHOOSE US</h2>
        <h3 className="subtitle">Faster, Safe and Trusted Logistics Services</h3>
        <p className="description">
          Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. 
          Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed 
          ipsum et kasd ut. Erat duo eos et erat sed diam duo
        </p>
        <ul className="features-list">
          <li><span className="icon">✔️</span> Best In Industry</li>
          <li><span className="icon">✔️</span> Emergency Services</li>
          <li><span className="icon">✔️</span> 24/7 Customer Support</li>
        </ul>
        <a href="/" className="learn-more">Learn More</a>
      </div>
    </div>
      {/* More Services Section */}    
      <section className="more-services-section">
                <h2>MORE SERVICES</h2>
                <p>We Offer The Following Services</p>
                <div className="more-services-container">
                    <div className="more-service-item">
                        <div className="more-service-icon">✈</div>
                        <h3>Air Air Freight</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚢</div>
                        <h3>Ocean Freight</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚚</div>
                        <h3>Ground Shipping</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🏢</div>
                        <h3>Warehousing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">📦</div>
                        <h3>Storage</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚛</div>
                        <h3>Delivery Van</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                </div>
            </section>
      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div>
            <div className="col-md-6">
              <h2 className="heading">About Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            </div>
            <div className="col-md-6">
              <h2 className="heading">Contact Us</h2>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 7890</p>
              <p>Address: 123 Logistics Lane, City, Country</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;








