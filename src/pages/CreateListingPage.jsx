import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineUpload, HiOutlinePhotograph, HiOutlineX } from 'react-icons/hi';
import { propertyTypes, amenitiesList } from '../data/properties';
import './CreateListingPage.css';

const CreateListingPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    listingType: 'Sale',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    price: '',
    beds: '',
    baths: '',
    sqft: '',
    yearBuilt: '',
    lotSize: '',
    amenities: [],
  });
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleAmenity = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    addImages(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    addImages(files);
  };

  const addImages = (files) => {
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9)
    }));
    setImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const handleSubmit = (e, isDraft = false) => {
    e.preventDefault();
    alert(isDraft ? 'Listing saved as draft!' : 'Listing published successfully!');
  };

  return (
    <div className="create-page">
      <div className="create-header">
        <div className="container">
          <h1 className="create-title">Create New Listing</h1>
          <p className="create-subtitle">Fill in the details below to list your property on EstateHub</p>
        </div>
      </div>

      <div className="container">
        <motion.form
          className="create-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* Basic Info */}
          <div className="form-section glass">
            <h2 className="form-section-title">
              <span className="section-number">1</span>
              Basic Information
            </h2>

            <div className="form-grid">
              <div className="form-field full-width">
                <label>Property Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Luxury Oceanview Villa"
                  required
                />
              </div>

              <div className="form-field full-width">
                <label>Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe your property in detail..."
                  required
                />
              </div>

              <div className="form-field">
                <label>Property Type *</label>
                <select name="type" value={formData.type} onChange={handleChange} required>
                  <option value="">Select Type</option>
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label>Listing Type</label>
                <div className="toggle-group">
                  <button
                    type="button"
                    className={`toggle-btn ${formData.listingType === 'Sale' ? 'active' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, listingType: 'Sale' }))}
                  >
                    For Sale
                  </button>
                  <button
                    type="button"
                    className={`toggle-btn ${formData.listingType === 'Rent' ? 'active' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, listingType: 'Rent' }))}
                  >
                    For Rent
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="form-section glass">
            <h2 className="form-section-title">
              <span className="section-number">2</span>
              Location
            </h2>

            <div className="form-grid">
              <div className="form-field full-width">
                <label>Street Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g., 1234 Ocean Drive"
                  required
                />
              </div>
              <div className="form-field">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g., Miami Beach"
                  required
                />
              </div>
              <div className="form-field">
                <label>State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="e.g., FL"
                  required
                />
              </div>
              <div className="form-field">
                <label>Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="e.g., 33139"
                />
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="form-section glass">
            <h2 className="form-section-title">
              <span className="section-number">3</span>
              Property Details
            </h2>

            <div className="form-grid">
              <div className="form-field">
                <label>Price ($) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="e.g., 2450000"
                  required
                />
              </div>
              <div className="form-field">
                <label>Bedrooms *</label>
                <input
                  type="number"
                  name="beds"
                  value={formData.beds}
                  onChange={handleChange}
                  placeholder="e.g., 5"
                  min="0"
                  required
                />
              </div>
              <div className="form-field">
                <label>Bathrooms *</label>
                <input
                  type="number"
                  name="baths"
                  value={formData.baths}
                  onChange={handleChange}
                  placeholder="e.g., 4"
                  min="0"
                  required
                />
              </div>
              <div className="form-field">
                <label>Area (sqft) *</label>
                <input
                  type="number"
                  name="sqft"
                  value={formData.sqft}
                  onChange={handleChange}
                  placeholder="e.g., 4500"
                  min="0"
                  required
                />
              </div>
              <div className="form-field">
                <label>Year Built</label>
                <input
                  type="number"
                  name="yearBuilt"
                  value={formData.yearBuilt}
                  onChange={handleChange}
                  placeholder="e.g., 2022"
                />
              </div>
              <div className="form-field">
                <label>Lot Size</label>
                <input
                  type="text"
                  name="lotSize"
                  value={formData.lotSize}
                  onChange={handleChange}
                  placeholder="e.g., 0.5 acres"
                />
              </div>
            </div>
          </div>

          {/* Media Upload */}
          <div className="form-section glass">
            <h2 className="form-section-title">
              <span className="section-number">4</span>
              Property Photos
            </h2>

            <div
              className={`upload-zone ${isDragging ? 'dragging' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <HiOutlineUpload className="upload-icon" />
              <p className="upload-text">
                Drag & drop photos here, or{' '}
                <label className="upload-browse">
                  browse
                  <input type="file" multiple accept="image/*" onChange={handleFileSelect} hidden />
                </label>
              </p>
              <p className="upload-hint">PNG, JPG up to 10MB each. Maximum 20 photos.</p>
            </div>

            {images.length > 0 && (
              <div className="image-preview-grid">
                {images.map(img => (
                  <div key={img.id} className="image-preview">
                    <img src={img.preview} alt="Preview" />
                    <button
                      type="button"
                      className="remove-image"
                      onClick={() => removeImage(img.id)}
                    >
                      <HiOutlineX />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Amenities */}
          <div className="form-section glass">
            <h2 className="form-section-title">
              <span className="section-number">5</span>
              Amenities & Features
            </h2>

            <div className="amenity-checkbox-grid">
              {['Pool', 'Garage', 'Garden', 'Gym', 'Smart Home', 'Security', 'AC', 'Fireplace', 'Balcony', 'Laundry', 'Wine Cellar', 'Concierge'].map(amenity => (
                <label key={amenity} className="amenity-check-label">
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="amenity-check-input"
                  />
                  <span className="amenity-check-box" />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="form-actions">
            <button
              type="button"
              className="btn btn-outline btn-lg"
              onClick={(e) => handleSubmit(e, true)}
            >
              Save as Draft
            </button>
            <button type="submit" className="btn btn-primary btn-lg">
              Publish Listing
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default CreateListingPage;
