import React from 'react';
import { FaUtensils, FaRecycle, FaHandHoldingHeart } from 'react-icons/fa';

const Facilities = () => {
    return (
        <div>
           <div className="container p-5">
        <div className="row">
          <div className="col-md-4">
            <div className="facility">
              <div className="facility-icon">
                <FaUtensils />
              </div>
              <h3>Quality Ingredients</h3>
              <p>We source only the highest quality ingredients to ensure that every dish is fresh, flavorful, and nutritious.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="facility">
              <div className="facility-icon">
                <FaRecycle />
              </div>
              <h3>Sustainable Practices</h3>
              <p>We are committed to using sustainable practices to reduce our environmental impact and preserve our planet for future generations.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="facility">
              <div className="facility-icon">
                <FaHandHoldingHeart />
              </div>
              <h3>Community Engagement</h3>
              <p>We believe in giving back to our community and supporting local organizations that make a difference in people's lives.</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Facilities;