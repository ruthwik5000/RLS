import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSearch, HiOutlineAdjustments } from 'react-icons/hi';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import PropertyCard from '../components/PropertyCard';
import { properties, propertyTypes, amenitiesList } from '../data/properties';
import './ListingsPage.css';

const ListingsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(true);
  const itemsPerPage = 6;

  const toggleAmenity = (amenity) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(term) ||
        p.location.toLowerCase().includes(term) ||
        p.city.toLowerCase().includes(term)
      );
    }

    if (selectedType) {
      result = result.filter(p => p.type === selectedType);
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (beds > 0) {
      result = result.filter(p => p.beds >= beds);
    }

    if (baths > 0) {
      result = result.filter(p => p.baths >= baths);
    }

    if (selectedAmenities.length > 0) {
      result = result.filter(p =>
        selectedAmenities.every(a => p.amenities.includes(a))
      );
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        break;
    }

    return result;
  }, [searchTerm, selectedType, priceRange, beds, baths, selectedAmenities, sortBy]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType('');
    setPriceRange([0, 5000000]);
    setBeds(0);
    setBaths(0);
    setSelectedAmenities([]);
    setCurrentPage(1);
  };

  return (
    <div className="listings-page">
      <div className="listings-header">
        <div className="container">
          <h1 className="listings-title">Browse Properties</h1>
          <p className="listings-subtitle">Discover your perfect property from our curated collection</p>
        </div>
      </div>

      <div className="container listings-layout">
        {/* Sidebar Filters */}
        <motion.aside
          className={`filters-sidebar glass ${showFilters ? 'open' : ''}`}
          initial={false}
          animate={{ width: showFilters ? 300 : 0, opacity: showFilters ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="filters-content">
            <div className="filters-header">
              <h3>Filters</h3>
              <button className="btn btn-ghost btn-sm" onClick={resetFilters}>Reset</button>
            </div>

            <div className="filter-group">
              <label className="filter-label">Location</label>
              <div className="search-input-wrapper">
                <HiOutlineSearch className="input-icon" />
                <input
                  type="text"
                  placeholder="Search by city or area..."
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                  className="filter-input"
                />
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Property Type</label>
              <div className="filter-chips">
                <button
                  className={`chip ${selectedType === '' ? 'active' : ''}`}
                  onClick={() => { setSelectedType(''); setCurrentPage(1); }}
                >
                  All
                </button>
                {propertyTypes.map(type => (
                  <button
                    key={type}
                    className={`chip ${selectedType === type ? 'active' : ''}`}
                    onClick={() => { setSelectedType(type); setCurrentPage(1); }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">
                Price Range
                <span className="filter-value">
                  ${(priceRange[0] / 1000).toFixed(0)}K - ${priceRange[1] >= 5000000 ? '5M+' : `${(priceRange[1] / 1000000).toFixed(1)}M`}
                </span>
              </label>
              <input
                type="range"
                min={0}
                max={5000000}
                step={100000}
                value={priceRange[1]}
                onChange={(e) => { setPriceRange([0, parseInt(e.target.value)]); setCurrentPage(1); }}
                className="range-input"
              />
            </div>

            <div className="filter-group">
              <label className="filter-label">Bedrooms</label>
              <div className="number-selector">
                {[0, 1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    className={`number-btn ${beds === n ? 'active' : ''}`}
                    onClick={() => { setBeds(n); setCurrentPage(1); }}
                  >
                    {n === 0 ? 'Any' : `${n}+`}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Bathrooms</label>
              <div className="number-selector">
                {[0, 1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    className={`number-btn ${baths === n ? 'active' : ''}`}
                    onClick={() => { setBaths(n); setCurrentPage(1); }}
                  >
                    {n === 0 ? 'Any' : `${n}+`}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Amenities</label>
              <div className="amenities-checkboxes">
                {['Pool', 'Garage', 'Garden', 'Gym', 'Smart Home', 'Security', 'AC', 'Fireplace'].map(amenity => (
                  <label key={amenity} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => { toggleAmenity(amenity); setCurrentPage(1); }}
                      className="checkbox-input"
                    />
                    <span className="checkbox-custom" />
                    <span>{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="listings-main">
          <div className="listings-toolbar">
            <div className="toolbar-info">
              <button
                className="btn btn-ghost btn-sm filter-toggle"
                onClick={() => setShowFilters(!showFilters)}
              >
                <HiOutlineAdjustments />
                {showFilters ? 'Hide' : 'Show'} Filters
              </button>
              <span className="results-count">
                Showing <strong>{filteredProperties.length}</strong> properties
              </span>
            </div>
            <div className="toolbar-sort">
              <label>Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {paginatedProperties.length > 0 ? (
            <div className="listings-grid">
              {paginatedProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🏠</div>
              <h3>No properties found</h3>
              <p>Try adjusting your filters to see more results</p>
              <button className="btn btn-primary" onClick={resetFilters}>Reset Filters</button>
            </div>
          )}

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="page-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
              >
                <IoChevronBack />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={`page-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="page-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                <IoChevronForward />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ListingsPage;
