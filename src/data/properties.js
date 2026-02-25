export const properties = [
  {
    id: 1,
    title: "Luxury Oceanview Villa",
    price: 2450000,
    type: "Villa",
    listingType: "Sale",
    location: "Miami Beach, FL",
    address: "1234 Ocean Drive",
    city: "Miami Beach",
    state: "FL",
    beds: 5,
    baths: 4,
    sqft: 4500,
    yearBuilt: 2022,
    lotSize: "0.5 acres",
    description: "An exquisite oceanfront villa featuring floor-to-ceiling windows with panoramic ocean views. This architectural masterpiece offers a perfect blend of luxury and comfort with its open-concept living spaces, gourmet kitchen, and resort-style outdoor living area.",
    amenities: ["Pool", "Garage", "Smart Home", "Gym", "Garden", "Security", "Wine Cellar", "Ocean View"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop"
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (305) 555-0123",
      email: "sarah@estatehub.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
    },
    nearby: [
      { name: "Miami Beach High School", distance: "1.2 miles", type: "school" },
      { name: "Mount Sinai Medical Center", distance: "2.5 miles", type: "hospital" },
      { name: "Joe's Stone Crab", distance: "0.8 miles", type: "restaurant" }
    ],
    status: "Active",
    featured: true,
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Modern Downtown Penthouse",
    price: 1850000,
    type: "Apartment",
    listingType: "Sale",
    location: "Manhattan, NY",
    address: "88 Park Avenue, PH",
    city: "Manhattan",
    state: "NY",
    beds: 3,
    baths: 3,
    sqft: 3200,
    yearBuilt: 2021,
    lotSize: "N/A",
    description: "Stunning penthouse in the heart of Manhattan with breathtaking skyline views. Features include a private rooftop terrace, chef's kitchen with premium appliances, and floor-to-ceiling windows flooding every room with natural light.",
    amenities: ["Smart Home", "Gym", "Security", "Concierge", "Rooftop Terrace", "City View"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop"
    ],
    agent: {
      name: "Michael Chen",
      phone: "+1 (212) 555-0456",
      email: "michael@estatehub.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
    },
    nearby: [
      { name: "Central Park", distance: "0.3 miles", type: "park" },
      { name: "Lenox Hill Hospital", distance: "0.5 miles", type: "hospital" },
      { name: "Per Se Restaurant", distance: "1.0 miles", type: "restaurant" }
    ],
    status: "Active",
    featured: true,
    createdAt: "2024-02-01"
  },
  {
    id: 3,
    title: "Elegant Suburban Estate",
    price: 1250000,
    type: "House",
    listingType: "Sale",
    location: "Beverly Hills, CA",
    address: "567 Maple Avenue",
    city: "Beverly Hills",
    state: "CA",
    beds: 4,
    baths: 3,
    sqft: 3800,
    yearBuilt: 2019,
    lotSize: "0.75 acres",
    description: "A stunning suburban estate set on beautifully landscaped grounds. The home features a grand foyer, open-plan living and dining areas, a gourmet kitchen, and a luxurious master suite. The backyard oasis includes a sparkling pool and outdoor kitchen.",
    amenities: ["Pool", "Garage", "Garden", "Smart Home", "Fireplace", "AC", "Laundry"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=500&fit=crop"
    ],
    agent: {
      name: "Emily Rodriguez",
      phone: "+1 (310) 555-0789",
      email: "emily@estatehub.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop"
    },
    nearby: [
      { name: "Beverly Hills High School", distance: "0.8 miles", type: "school" },
      { name: "Cedars-Sinai Medical", distance: "1.5 miles", type: "hospital" },
      { name: "Spago Restaurant", distance: "1.2 miles", type: "restaurant" }
    ],
    status: "Active",
    featured: true,
    createdAt: "2024-01-28"
  },
  {
    id: 4,
    title: "Cozy Mountain Retreat",
    price: 875000,
    type: "House",
    listingType: "Sale",
    location: "Aspen, CO",
    address: "234 Pine Trail Road",
    city: "Aspen",
    state: "CO",
    beds: 3,
    baths: 2,
    sqft: 2400,
    yearBuilt: 2018,
    lotSize: "1.2 acres",
    description: "Nestled in the mountains of Aspen, this cozy retreat offers stunning mountain views and direct ski access. Features include a stone fireplace, vaulted ceilings with exposed timber beams, and a wraparound deck perfect for enjoying the mountain air.",
    amenities: ["Fireplace", "Garage", "Garden", "Balcony", "Mountain View", "Ski Access"],
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&h=500&fit=crop"
    ],
    agent: {
      name: "David Thompson",
      phone: "+1 (970) 555-0234",
      email: "david@estatehub.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    nearby: [
      { name: "Aspen Mountain", distance: "0.5 miles", type: "recreation" },
      { name: "Aspen Valley Hospital", distance: "2.0 miles", type: "hospital" },
      { name: "Cache Cache Restaurant", distance: "1.8 miles", type: "restaurant" }
    ],
    status: "Active",
    featured: false,
    createdAt: "2024-02-10"
  },
  {
    id: 5,
    title: "Waterfront Luxury Condo",
    price: 1650000,
    type: "Condo",
    listingType: "Sale",
    location: "San Francisco, CA",
    address: "100 Embarcadero Center, Unit 3501",
    city: "San Francisco",
    state: "CA",
    beds: 2,
    baths: 2,
    sqft: 1800,
    yearBuilt: 2023,
    lotSize: "N/A",
    description: "Brand new waterfront condo with unobstructed bay views. This sophisticated residence features imported Italian marble, a state-of-the-art kitchen, and access to world-class building amenities including a rooftop infinity pool.",
    amenities: ["Pool", "Gym", "Concierge", "Smart Home", "Security", "Bay View", "Spa"],
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6a8c5a0f114e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=500&fit=crop"
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (415) 555-0567",
      email: "sarah@estatehub.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
    },
    nearby: [
      { name: "Ferry Building", distance: "0.2 miles", type: "landmark" },
      { name: "UCSF Medical Center", distance: "1.5 miles", type: "hospital" },
      { name: "The Slanted Door", distance: "0.3 miles", type: "restaurant" }
    ],
    status: "Pending",
    featured: false,
    createdAt: "2024-02-15"
  },
  {
    id: 6,
    title: "Historic Brownstone Townhouse",
    price: 2100000,
    type: "House",
    listingType: "Sale",
    location: "Brooklyn, NY",
    address: "45 Garden Place",
    city: "Brooklyn",
    state: "NY",
    beds: 4,
    baths: 3,
    sqft: 3500,
    yearBuilt: 1890,
    lotSize: "0.1 acres",
    description: "A beautifully restored historic brownstone in the heart of Brooklyn Heights. Original architectural details blend seamlessly with modern luxury finishes. Features include a chef's kitchen, private garden, and a stunning parlor floor with 12-foot ceilings.",
    amenities: ["Garden", "Fireplace", "Laundry", "AC", "Historic Charm", "Private Patio"],
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=500&fit=crop"
    ],
    agent: {
      name: "Michael Chen",
      phone: "+1 (718) 555-0890",
      email: "michael@estatehub.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
    },
    nearby: [
      { name: "Brooklyn Heights Promenade", distance: "0.3 miles", type: "park" },
      { name: "Brooklyn Hospital Center", distance: "0.7 miles", type: "hospital" },
      { name: "River Café", distance: "0.4 miles", type: "restaurant" }
    ],
    status: "Active",
    featured: false,
    createdAt: "2024-01-20"
  },
  {
    id: 7,
    title: "Modern Lakefront Estate",
    price: 3200000,
    type: "Villa",
    listingType: "Sale",
    location: "Lake Tahoe, NV",
    address: "789 Lakeshore Blvd",
    city: "Lake Tahoe",
    state: "NV",
    beds: 6,
    baths: 5,
    sqft: 5800,
    yearBuilt: 2020,
    lotSize: "2 acres",
    description: "Spectacular lakefront estate offering over 5,800 sqft of living space with direct lake access. The property features a private dock, infinity-edge pool, home theater, and a wine cellar. Every room offers stunning views of the crystal-clear waters.",
    amenities: ["Pool", "Garage", "Smart Home", "Gym", "Garden", "Security", "Wine Cellar", "Lake View", "Dock", "Home Theater"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=500&fit=crop"
    ],
    agent: {
      name: "Emily Rodriguez",
      phone: "+1 (775) 555-0345",
      email: "emily@estatehub.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop"
    },
    nearby: [
      { name: "Heavenly Ski Resort", distance: "3.0 miles", type: "recreation" },
      { name: "Barton Memorial Hospital", distance: "4.0 miles", type: "hospital" },
      { name: "Edgewood Restaurant", distance: "1.5 miles", type: "restaurant" }
    ],
    status: "Active",
    featured: false,
    createdAt: "2024-02-05"
  },
  {
    id: 8,
    title: "Sleek Urban Loft",
    price: 750000,
    type: "Apartment",
    listingType: "Rent",
    location: "Austin, TX",
    address: "200 Congress Ave, Loft 12",
    city: "Austin",
    state: "TX",
    beds: 2,
    baths: 2,
    sqft: 1600,
    yearBuilt: 2021,
    lotSize: "N/A",
    description: "A stunning industrial-chic loft in the vibrant heart of Austin's entertainment district. Features exposed brick walls, soaring 16-foot ceilings, a mezzanine bedroom, and a private balcony with downtown skyline views.",
    amenities: ["Gym", "Balcony", "AC", "Laundry", "City View", "Rooftop Access"],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop"
    ],
    agent: {
      name: "David Thompson",
      phone: "+1 (512) 555-0678",
      email: "david@estatehub.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    nearby: [
      { name: "UT Austin", distance: "1.5 miles", type: "school" },
      { name: "Seton Medical Center", distance: "1.0 miles", type: "hospital" },
      { name: "Franklin Barbecue", distance: "0.8 miles", type: "restaurant" }
    ],
    status: "Active",
    featured: false,
    createdAt: "2024-02-18"
  }
];

export const propertyTypes = ["House", "Apartment", "Villa", "Condo"];
export const amenitiesList = [
  "Pool", "Garage", "Garden", "Gym", "Smart Home", "Security",
  "AC", "Fireplace", "Balcony", "Laundry", "Wine Cellar",
  "Ocean View", "Lake View", "City View", "Mountain View",
  "Concierge", "Rooftop Terrace", "Spa", "Dock", "Home Theater"
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
