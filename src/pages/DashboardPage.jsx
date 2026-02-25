import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiOutlineHome, HiOutlineHeart, HiOutlineChatAlt2,
  HiOutlineEye, HiOutlinePencil, HiOutlineTrash,
  HiOutlineTrendingUp, HiOutlineCog, HiOutlineX
} from 'react-icons/hi';
import { IoGridOutline } from 'react-icons/io5';
import { properties, formatPrice } from '../data/properties';
import './DashboardPage.css';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const myListings = properties.slice(0, 3);
  const savedProperties = properties.slice(3, 7);

  const stats = [
    { icon: <HiOutlineHome />, value: '12', label: 'Total Listings', color: 'var(--accent)' },
    { icon: <HiOutlineHeart />, value: '24', label: 'Saved Properties', color: '#F43F5E' },
    { icon: <HiOutlineChatAlt2 />, value: '5', label: 'Messages', color: '#3B82F6' },
    { icon: <HiOutlineEye />, value: '156', label: 'Profile Views', color: '#F59E0B' },
  ];

  const activities = [
    { icon: <HiOutlineEye />, text: '3 new views on "Luxury Oceanview Villa"', time: '2 hours ago' },
    { icon: <HiOutlineChatAlt2 />, text: 'New message from Sarah Johnson', time: '5 hours ago' },
    { icon: <HiOutlineTrendingUp />, text: 'Price alert: "Modern Downtown Penthouse" dropped 5%', time: '1 day ago' },
    { icon: <HiOutlineHeart />, text: 'Someone saved your "Elegant Suburban Estate"', time: '2 days ago' },
    { icon: <HiOutlineEye />, text: '12 new views on "Modern Downtown Penthouse"', time: '3 days ago' },
  ];

  const sidebarItems = [
    { id: 'dashboard', icon: <IoGridOutline />, label: 'Dashboard' },
    { id: 'listings', icon: <HiOutlineHome />, label: 'My Listings' },
    { id: 'saved', icon: <HiOutlineHeart />, label: 'Saved Properties' },
    { id: 'messages', icon: <HiOutlineChatAlt2 />, label: 'Messages' },
    { id: 'settings', icon: <HiOutlineCog />, label: 'Profile Settings' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active': return 'badge badge-active';
      case 'Pending': return 'badge badge-pending';
      case 'Sold': return 'badge badge-sold';
      default: return 'badge';
    }
  };

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="dash-sidebar glass">
        <div className="dash-user">
          <div className="dash-avatar">JD</div>
          <div>
            <div className="dash-user-name">John Doe</div>
            <div className="dash-user-role">Property Owner</div>
          </div>
        </div>

        <nav className="dash-nav">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              className={`dash-nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <Link to="/create" className="btn btn-primary dash-create-btn">
          + New Listing
        </Link>
      </aside>

      {/* Main Content */}
      <main className="dash-main">
        {/* Welcome Header */}
        <motion.div
          className="dash-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="dash-title">Welcome back, John! 👋</h1>
            <p className="dash-subtitle">Here's what's happening with your properties today.</p>
          </div>
          <Link to="/create" className="btn btn-primary">
            + Add Property
          </Link>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="dash-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="dash-stat-card glass">
              <div className="dash-stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="dash-stat-value">{stat.value}</div>
              <div className="dash-stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* My Listings & Activity Layout */}
        <div className="dash-grid">
          {/* My Recent Listings */}
          <motion.div
            className="dash-card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="dash-card-header">
              <h2 className="dash-card-title">My Recent Listings</h2>
              <button className="btn btn-ghost btn-sm">View All</button>
            </div>

            <div className="my-listings-list">
              {myListings.map((property, idx) => (
                <div key={property.id} className="my-listing-item">
                  <img src={property.images[0]} alt={property.title} className="listing-thumb" />
                  <div className="listing-info">
                    <div className="listing-title-row">
                      <Link to={`/property/${property.id}`} className="listing-item-title">
                        {property.title}
                      </Link>
                      <span className={getStatusBadge(property.status)}>{property.status}</span>
                    </div>
                    <div className="listing-item-price">{formatPrice(property.price)}</div>
                    <div className="listing-item-location">{property.location}</div>
                  </div>
                  <div className="listing-actions">
                    <button className="action-icon edit"><HiOutlinePencil /></button>
                    <button className="action-icon delete"><HiOutlineTrash /></button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="dash-card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="dash-card-header">
              <h2 className="dash-card-title">Recent Activity</h2>
            </div>

            <div className="activity-list">
              {activities.map((activity, idx) => (
                <div key={idx} className="activity-item">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <div className="activity-text">{activity.text}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Saved Properties */}
        <motion.div
          className="dash-card glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="dash-card-header">
            <h2 className="dash-card-title">Saved Properties</h2>
            <button className="btn btn-ghost btn-sm">View All</button>
          </div>

          <div className="saved-properties-row">
            {savedProperties.map(property => (
              <Link key={property.id} to={`/property/${property.id}`} className="saved-card">
                <div className="saved-card-image">
                  <img src={property.images[0]} alt={property.title} />
                  <button className="saved-remove" onClick={(e) => e.preventDefault()}>
                    <HiOutlineX />
                  </button>
                </div>
                <div className="saved-card-info">
                  <div className="saved-card-price">{formatPrice(property.price)}</div>
                  <div className="saved-card-title">{property.title}</div>
                  <div className="saved-card-location">{property.location}</div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardPage;
