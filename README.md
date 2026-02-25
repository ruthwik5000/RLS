# 🏡 EstateHub — Real Estate Listing Platform

A modern, premium real estate listing platform built with the **MERN stack** (frontend). Browse, search, and manage property listings through an interactive, beautifully designed web interface.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-FF0055?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **Property Browsing** — Browse a curated collection of premium property listings
- **Advanced Filtering** — Filter by type, price range, bedrooms, bathrooms, and amenities
- **Detailed Property Views** — Image gallery, stats, amenities, agent contact, and nearby places
- **Create Listings** — Multi-section form with drag-and-drop image upload
- **User Dashboard** — Manage listings, saved properties, and track activity
- **Schedule Tours** — Book property viewings directly from the detail page
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Smooth Animations** — Framer Motion entrance and hover effects throughout

---

## 🖥️ Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero search, featured properties, why choose us, CTA |
| `/listings` | Listings | Sidebar filters, 2-column grid, sort, pagination |
| `/property/:id` | Property Detail | Image gallery, stats, amenities, agent card, tour modal |
| `/create` | Create Listing | Multi-step form with image upload and amenity selection |
| `/dashboard` | Dashboard | Stats, my listings, saved properties, activity feed |

---

## 🎨 Design

- **Dark theme** with `#0F172A` background and `#10B981` teal accent
- **Glassmorphism** effects on navbar, cards, and filter panels
- **Inter** font family from Google Fonts
- **Framer Motion** animations for smooth page transitions and micro-interactions
- UI screens designed with **Google Stitch** for pixel-perfect reference

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ and **npm**

### Installation

```bash
# Clone the repository
git clone https://github.com/ruthwik5000/RLS.git
cd RLS

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework |
| **Vite 7** | Build tool & dev server |
| **React Router DOM** | Client-side routing |
| **Framer Motion** | Animations & transitions |
| **React Icons** | Icon library (HeroIcons, Ionicons, FontAwesome) |
| **Vanilla CSS** | Custom design system with CSS variables |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   ├── Footer.jsx / Footer.css
│   └── PropertyCard.jsx / PropertyCard.css
├── pages/
│   ├── HomePage.jsx / HomePage.css
│   ├── ListingsPage.jsx / ListingsPage.css
│   ├── PropertyDetailPage.jsx / PropertyDetailPage.css
│   ├── CreateListingPage.jsx / CreateListingPage.css
│   └── DashboardPage.jsx / DashboardPage.css
├── data/
│   └── properties.js          # Mock data (8 properties)
├── App.jsx                    # Router setup
├── main.jsx                   # Entry point
└── index.css                  # Global design system
```

---

## 🔮 Future Enhancements

- [ ] Backend API with Express.js & MongoDB
- [ ] User authentication (JWT)
- [ ] Real image upload to cloud storage
- [ ] Map integration (Google Maps / Mapbox)
- [ ] Real-time messaging between buyers and agents
- [ ] Admin panel for property management

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using React + Vite
</p>
