import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineSearch, HiOutlineLocationMarker, HiOutlineCurrencyDollar } from 'react-icons/hi';
import { IoHomeOutline, IoShieldCheckmarkOutline, IoPeopleOutline, IoSearchOutline } from 'react-icons/io5';
import { BsBuildings, BsGraphUpArrow, BsStars } from 'react-icons/bs';
import PropertyCard from '../components/PropertyCard';
import { properties, propertyTypes } from '../data/properties';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchPrice, setSearchPrice] = useState('');

  const featuredProperties = properties.filter(p => p.featured);

  const stats = [
    { icon: <BsBuildings />, value: '2,500+', label: 'Properties Listed' },
    { icon: <IoPeopleOutline />, value: '1,200+', label: 'Happy Clients' },
    { icon: <BsGraphUpArrow />, value: '$5B+', label: 'Total Value Sold' },
    { icon: <BsStars />, value: '98%', label: 'Satisfaction Rate' },
  ];

  const features = [
    {
      icon: <IoShieldCheckmarkOutline />,
      title: 'Verified Listings',
      description: 'Every property is thoroughly verified by our team to ensure authenticity and accuracy of all details.'
    },
    {
      icon: <IoPeopleOutline />,
      title: 'Expert Agents',
      description: 'Connect with top-rated real estate agents who have deep knowledge of your target neighborhoods.'
    },
    {
      icon: <IoSearchOutline />,
      title: 'Smart Search',
      description: 'Our advanced search filters help you find exactly what you need in seconds, not hours.'
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/listings');
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
            alt="Luxury Home"
            className="hero-bg-image"
          />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">
              <span className="tag-dot" /> #1 Real Estate Platform
            </span>
            <h1 className="hero-title">
              Find Your <span className="accent-text">Dream Home</span>
            </h1>
            <p className="hero-subtitle">
              Browse thousands of premium properties across the country. From luxury villas to cozy apartments, discover the perfect place to call home.
            </p>
          </motion.div>

          <motion.form
            className="hero-search glass"
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="search-field">
              <HiOutlineLocationMarker className="search-icon" />
              <input
                type="text"
                placeholder="City, neighborhood, or address"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            <div className="search-divider" />
            <div className="search-field">
              <IoHomeOutline className="search-icon" />
              <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                <option value="">Property Type</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="search-divider" />
            <div className="search-field">
              <HiOutlineCurrencyDollar className="search-icon" />
              <select value={searchPrice} onChange={(e) => setSearchPrice(e.target.value)}>
                <option value="">Price Range</option>
                <option value="0-500000">Under $500K</option>
                <option value="500000-1000000">$500K - $1M</option>
                <option value="1000000-2000000">$1M - $2M</option>
                <option value="2000000+">$2M+</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-lg search-btn">
              <HiOutlineSearch />
              Search
            </button>
          </motion.form>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="hero-stat">
                <div className="stat-icon">{stat.icon}</div>
                <div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Featured Properties</h2>
              <p className="section-subtitle">Handpicked premium listings just for you</p>
            </div>
            <Link to="/listings" className="btn btn-outline">View All Listings →</Link>
          </div>

          <div className="featured-grid">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Why Choose EstateHub?</h2>
            <p className="section-subtitle">We make finding your dream property effortless</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5, borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-content">
              <h2 className="cta-title">Ready to List Your Property?</h2>
              <p className="cta-text">Join thousands of property owners who trust EstateHub to connect them with qualified buyers.</p>
              <div className="cta-actions">
                <Link to="/create" className="btn btn-primary btn-lg">List Your Property</Link>
                <Link to="/listings" className="btn btn-outline btn-lg">Browse Listings</Link>
              </div>
            </div>
            <div className="cta-decoration">
              <div className="cta-circle c1" />
              <div className="cta-circle c2" />
              <div className="cta-circle c3" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
