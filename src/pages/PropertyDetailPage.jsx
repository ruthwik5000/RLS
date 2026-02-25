import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiOutlineHeart, HiHeart, HiOutlineShare, HiOutlineLocationMarker,
  HiOutlinePhone, HiOutlineMail, HiOutlineCalendar
} from 'react-icons/hi';
import {
  IoBedOutline, IoWaterOutline, IoResizeOutline, IoCalendarOutline,
  IoLayersOutline, IoChevronBack, IoChevronForward
} from 'react-icons/io5';
import {
  FaSwimmingPool, FaParking, FaSeedling, FaDumbbell, FaWifi,
  FaShieldAlt, FaWineBottle, FaWater, FaSnowflake, FaFire,
  FaBuilding, FaUmbrellaBeach, FaMountain, FaConciergeBell
} from 'react-icons/fa';
import { MdOutlineSchool, MdOutlineLocalHospital, MdOutlineRestaurant } from 'react-icons/md';
import { properties, formatPrice } from '../data/properties';
import './PropertyDetailPage.css';

const amenityIcons = {
  'Pool': <FaSwimmingPool />,
  'Garage': <FaParking />,
  'Garden': <FaSeedling />,
  'Gym': <FaDumbbell />,
  'Smart Home': <FaWifi />,
  'Security': <FaShieldAlt />,
  'Wine Cellar': <FaWineBottle />,
  'Ocean View': <FaWater />,
  'Lake View': <FaWater />,
  'AC': <FaSnowflake />,
  'Fireplace': <FaFire />,
  'Balcony': <FaBuilding />,
  'Laundry': <FaBuilding />,
  'City View': <FaBuilding />,
  'Mountain View': <FaMountain />,
  'Concierge': <FaConciergeBell />,
  'Rooftop Terrace': <FaUmbrellaBeach />,
  'Spa': <FaUmbrellaBeach />,
  'Dock': <FaWater />,
  'Home Theater': <FaBuilding />,
};

const nearbyIcons = {
  school: <MdOutlineSchool />,
  hospital: <MdOutlineLocalHospital />,
  restaurant: <MdOutlineRestaurant />,
  park: <FaSeedling />,
  recreation: <FaMountain />,
  landmark: <FaBuilding />,
};

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showTourModal, setShowTourModal] = useState(false);

  if (!property) {
    return (
      <div className="detail-page">
        <div className="container" style={{ paddingTop: 120, textAlign: 'center' }}>
          <h2>Property Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', margin: '16px 0 32px' }}>
            The property you're looking for doesn't exist.
          </p>
          <Link to="/listings" className="btn btn-primary">Browse Listings</Link>
        </div>
      </div>
    );
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="detail-page">
      {/* Breadcrumb */}
      <div className="detail-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/listings">Listings</Link>
          <span>/</span>
          <span className="current">{property.title}</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container">
        <motion.div
          className="gallery"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="gallery-main">
            <img src={property.images[currentImage]} alt={property.title} className="gallery-image" />
            <button className="gallery-nav prev" onClick={prevImage}><IoChevronBack /></button>
            <button className="gallery-nav next" onClick={nextImage}><IoChevronForward /></button>
            <div className="gallery-counter">
              {currentImage + 1} / {property.images.length}
            </div>
          </div>
          <div className="gallery-thumbs">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                className={`gallery-thumb ${idx === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(idx)}
              >
                <img src={img} alt={`View ${idx + 1}`} />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container detail-layout">
        {/* Left Column */}
        <div className="detail-content">
          {/* Header */}
          <motion.div
            className="detail-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="detail-header-top">
              <div>
                <div className="detail-badges">
                  <span className="badge badge-active">{property.type}</span>
                  <span className="badge badge-pending">For {property.listingType}</span>
                </div>
                <h1 className="detail-title">{property.title}</h1>
                <div className="detail-location">
                  <HiOutlineLocationMarker />
                  <span>{property.address}, {property.location}</span>
                </div>
              </div>
              <div className="detail-price-block">
                <div className="detail-price">{formatPrice(property.price)}</div>
                <div className="detail-price-sub">
                  {property.listingType === 'Rent' ? '/month' : 'Listing Price'}
                </div>
              </div>
            </div>

            <div className="detail-actions">
              <button
                className={`btn btn-ghost action-btn ${isFavorite ? 'active' : ''}`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? <HiHeart /> : <HiOutlineHeart />}
                {isFavorite ? 'Saved' : 'Save'}
              </button>
              <button className="btn btn-ghost action-btn">
                <HiOutlineShare /> Share
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="detail-stats glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="stat-item">
              <IoBedOutline className="stat-icon" />
              <div>
                <div className="stat-number">{property.beds}</div>
                <div className="stat-text">Bedrooms</div>
              </div>
            </div>
            <div className="stat-item">
              <IoWaterOutline className="stat-icon" />
              <div>
                <div className="stat-number">{property.baths}</div>
                <div className="stat-text">Bathrooms</div>
              </div>
            </div>
            <div className="stat-item">
              <IoResizeOutline className="stat-icon" />
              <div>
                <div className="stat-number">{property.sqft.toLocaleString()}</div>
                <div className="stat-text">Square Feet</div>
              </div>
            </div>
            <div className="stat-item">
              <IoCalendarOutline className="stat-icon" />
              <div>
                <div className="stat-number">{property.yearBuilt}</div>
                <div className="stat-text">Year Built</div>
              </div>
            </div>
            <div className="stat-item">
              <IoLayersOutline className="stat-icon" />
              <div>
                <div className="stat-number">{property.lotSize}</div>
                <div className="stat-text">Lot Size</div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="detail-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="detail-section-title">About This Property</h2>
            <p className="detail-description">{property.description}</p>
            <p className="detail-description">
              This exceptional property offers a rare combination of luxury living and prime location.
              With carefully curated finishes throughout, every detail has been thoughtfully designed
              to create an unparalleled living experience. Don't miss this incredible opportunity
              to own a piece of paradise.
            </p>
          </motion.div>

          {/* Amenities */}
          <motion.div
            className="detail-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="detail-section-title">Features & Amenities</h2>
            <div className="amenities-grid">
              {property.amenities.map((amenity, idx) => (
                <div key={idx} className="amenity-item glass-light">
                  <span className="amenity-icon">{amenityIcons[amenity] || <FaBuilding />}</span>
                  <span className="amenity-name">{amenity}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Nearby */}
          <motion.div
            className="detail-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="detail-section-title">What's Nearby</h2>
            <div className="nearby-list">
              {property.nearby.map((place, idx) => (
                <div key={idx} className="nearby-item glass-light">
                  <div className="nearby-icon">{nearbyIcons[place.type] || <FaBuilding />}</div>
                  <div className="nearby-info">
                    <div className="nearby-name">{place.name}</div>
                    <div className="nearby-type">{place.type}</div>
                  </div>
                  <div className="nearby-distance">{place.distance}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Sidebar - Agent Card */}
        <motion.aside
          className="detail-sidebar"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="agent-card glass">
            <div className="agent-header">
              <img src={property.agent.image} alt={property.agent.name} className="agent-avatar" />
              <div>
                <div className="agent-name">{property.agent.name}</div>
                <div className="agent-role">Listing Agent</div>
              </div>
            </div>

            <div className="agent-contacts">
              <a href={`tel:${property.agent.phone}`} className="agent-contact">
                <HiOutlinePhone />
                <span>{property.agent.phone}</span>
              </a>
              <a href={`mailto:${property.agent.email}`} className="agent-contact">
                <HiOutlineMail />
                <span>{property.agent.email}</span>
              </a>
            </div>

            <button
              className="btn btn-primary btn-lg agent-cta"
              onClick={() => setShowTourModal(true)}
            >
              <HiOutlineCalendar />
              Schedule a Tour
            </button>
            <button className="btn btn-outline btn-lg agent-cta">
              <HiOutlineMail />
              Contact Agent
            </button>

            <div className="agent-availability">
              <div className="availability-dot" />
              Available for showings today
            </div>
          </div>
        </motion.aside>
      </div>

      {/* Tour Modal */}
      {showTourModal && (
        <div className="modal-overlay" onClick={() => setShowTourModal(false)}>
          <motion.div
            className="tour-modal glass"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="modal-title">Schedule a Tour</h2>
            <p className="modal-subtitle">Choose your preferred date and time to visit this property</p>

            <div className="modal-form">
              <div className="form-row">
                <div className="form-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Phone</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="form-field">
                  <label>Preferred Date</label>
                  <input type="date" />
                </div>
              </div>
              <div className="form-field">
                <label>Message (Optional)</label>
                <textarea rows="3" placeholder="Any specific requirements or questions..." />
              </div>
              <div className="modal-actions">
                <button className="btn btn-ghost" onClick={() => setShowTourModal(false)}>Cancel</button>
                <button className="btn btn-primary btn-lg" onClick={() => setShowTourModal(false)}>
                  Confirm Booking
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetailPage;
