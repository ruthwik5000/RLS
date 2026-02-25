import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHeart, HiHeart, HiOutlineLocationMarker } from 'react-icons/hi';
import { IoBedOutline, IoWaterOutline, IoResizeOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { formatPrice } from '../data/properties';
import './PropertyCard.css';

const PropertyCard = ({ property, index = 0 }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      className="property-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="card-image-wrapper">
        <img src={property.images[0]} alt={property.title} className="card-image" />
        <div className="card-image-overlay" />
        <span className="card-price-badge">{formatPrice(property.price)}</span>
        <span className="card-type-badge">{property.type}</span>
        <button
          className={`card-favorite ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
        >
          {isFavorite ? <HiHeart /> : <HiOutlineHeart />}
        </button>
        {property.listingType === 'Rent' && (
          <span className="card-rent-badge">For Rent</span>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{property.title}</h3>
        <div className="card-location">
          <HiOutlineLocationMarker />
          <span>{property.location}</span>
        </div>

        <div className="card-stats">
          <div className="card-stat">
            <IoBedOutline />
            <span>{property.beds} Beds</span>
          </div>
          <div className="card-stat">
            <IoWaterOutline />
            <span>{property.baths} Baths</span>
          </div>
          <div className="card-stat">
            <IoResizeOutline />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <p className="card-description">{property.description.substring(0, 100)}...</p>

        <Link to={`/property/${property.id}`} className="btn btn-outline card-button">
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
