import React from 'react';
import "../css/BuyCards.css";

function BuyCards() {
  return (
    <>
      <div style={{ marginTop: "30px" }} className="container">
        <div className="row justify-content-center">

          {/* Silver Card */}
          <div className="col-12 col-md-4 mb-4">
            <div className="buy_card card_wrapper">
              <h3>Silver</h3>
              <p className="card_description">
                Perfect for beginners and small-scale use. Enjoy the basic features with a simple, clean experience.
              </p>
              <div className="card_price">
                <span className="price">$19.99</span> / month
              </div>
              <ul className="card_benefits">
                <li>1 Website</li>
                <li>5GB Storage</li>
                <li>Basic Support</li>
                <li>Free SSL</li>
              </ul>
              <p className="cta_description">Looking for more? Upgrade to Gold for additional storage and priority support.</p>
              <button className="buy_button">Buy Now</button>
              <div className="rating">
                <span>⭐⭐⭐⭐☆</span><span className='span_text'>(4.8/5 based on 315 reviews)</span>
              </div>
            </div>
          </div>

          {/* Gold Card */}
          <div className="col-12 col-md-4 mb-4">
            <div className="buy_card buy_card_gold card_wrapper">
              <h3>Gold</h3>
              <p className="card_description">
                Ideal for growing businesses. Unlock more storage, faster support, and advanced analytics to optimize your operations.
              </p>
              <div className="card_price">
                <span className="gold_price">$49.99</span> / month
              </div>
              <ul className="card_benefits">
                <li>5 Websites</li>
                <li>50GB Storage</li>
                <li>Priority Support</li>
                <li>Free SSL + CDN</li>
                <li>Advanced Analytics</li>
                <li>Marketing Tools</li>
              </ul>
              <p className="cta_description">Supercharge your website with Platinum for even more advanced features.</p>
              <button className="buy_button">Buy Now</button>
              <div className="rating">
                <span>⭐⭐⭐⭐⭐</span> <span className='span_text'>(4.8/5 based on 315 reviews)</span>
              </div>
            </div>
          </div>

          {/* Platinum Card */}
          <div className="col-12 col-md-4 mb-4">
            <div className="buy_card buy_card_platinum card_wrapper">
              <h3>Platinum</h3>
              <p className="card_description">
                The ultimate plan for businesses and enterprises needing scalability, VIP support, and robust security features.
              </p>
              <div className="card_price">
                <span className="price">$99.99</span> / month
              </div>
              <ul className="card_benefits">
                <li>Unlimited Websites</li>
                <li>1TB Storage</li>
                <li>24/7 VIP Support</li>
                <li>Free SSL + CDN + DDoS Protection</li>
                <li>Advanced Analytics + Reports</li>
                <li>Dedicated Account Manager</li>
                <li>Priority Customer Service</li>
              </ul>
              <p className="cta_description">Talk to an expert today for personalized pricing and plan details.</p>
              <button className=" btn btn-primary buy_button">Buy Now</button>
              <div className="rating">
                <span>⭐⭐⭐⭐⭐</span><span className='span_text'>(4.8/5 based on 315 reviews)</span>
              </div>
              <div className="offer_banner">
                <span>Exclusive offer: Save 10% on your first year!</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default BuyCards;
 