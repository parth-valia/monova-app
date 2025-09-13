export interface WardrobeItem {
  id: string;
  name: string;
  category: 'top' | 'bottom' | 'footwear' | 'outerwear' | 'accessory';
  color: string;
  style: string[];
  image: string;
  brand?: string;
  occasion?: string[];
  season?: string[];
}

export interface OutfitCard {
  id: string;
  title: string;
  tags: string[];
  items: {
    top?: WardrobeItem;
    bottom?: WardrobeItem;
    footwear?: WardrobeItem;
    outerwear?: WardrobeItem;
  };
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  outfits: OutfitCard[];
  coverImage: string;
}

// Sample wardrobe items with high-quality images on white backgrounds
export const wardrobeItems: WardrobeItem[] = [
  {
    id: '1',
    name: 'Knot Detail KnitTop',
    category: 'top',
    color: 'Black',
    style: ['Crop'],
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Casual', 'Date'],
    season: ['Spring', 'Summer']
  },
  {
    id: '2',
    name: 'Motif Printed Blouse',
    category: 'top',
    color: 'Blue',
    style: ['Crop'],
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Casual', 'Date'],
    season: ['Spring', 'Summer']
  },
  {
    id: '3',
    name: 'Cotton Poplin Shirt',
    category: 'top',
    color: 'Blue',
    style: ['Striped'],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Work', 'Casual'],
    season: ['Spring', 'Summer', 'Fall']
  },
  {
    id: '4',
    name: 'Blue Denim Shorts',
    category: 'bottom',
    color: 'Blue',
    style: ['Denim'],
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Casual', 'Weekend'],
    season: ['Spring', 'Summer']
  },
  {
    id: '5',
    name: 'Seamless Trousers',
    category: 'bottom',
    color: 'Brown',
    style: ['Wide Leg'],
    image: 'https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Work', 'Formal'],
    season: ['All']
  },
  {
    id: '6',
    name: 'Dangle Earrings',
    category: 'accessory',
    color: 'Golden',
    style: ['Golden'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Party', 'Date'],
    season: ['All']
  },
  {
    id: '7',
    name: 'One Shoulder Dress',
    category: 'top',
    color: 'Green',
    style: ['Elegant'],
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Date', 'Party'],
    season: ['Spring', 'Summer']
  },
  {
    id: '8',
    name: 'Leather Handbag',
    category: 'accessory',
    color: 'Brown',
    style: ['Classic'],
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Work', 'Casual'],
    season: ['All']
  },
  {
    id: '9',
    name: 'Strappy Sandals',
    category: 'footwear',
    color: 'Brown',
    style: ['Elegant'],
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Date', 'Party'],
    season: ['Spring', 'Summer']
  },
  {
    id: '10',
    name: 'Oversized T-Shirt',
    category: 'top',
    color: 'Gray',
    style: ['Casual'],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Casual', 'Weekend'],
    season: ['All']
  },
  {
    id: '11',
    name: 'Crossbody Sandals',
    category: 'footwear',
    color: 'Brown',
    style: ['Casual'],
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Casual', 'Beach'],
    season: ['Spring', 'Summer']
  },
  {
    id: '12',
    name: 'Wide Leg Trousers',
    category: 'bottom',
    color: 'Cream',
    style: ['Wide Leg'],
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Casual', 'Work'],
    season: ['All']
  },
  {
    id: '13',
    name: 'White Button Shirt',
    category: 'top',
    color: 'White',
    style: ['Classic'],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Work', 'Formal'],
    season: ['All']
  },
  {
    id: '14',
    name: 'Black Blazer',
    category: 'outerwear',
    color: 'Black',
    style: ['Professional'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Work', 'Formal'],
    season: ['All']
  },
  {
    id: '15',
    name: 'Midi Skirt',
    category: 'bottom',
    color: 'Navy',
    style: ['A-Line'],
    image: 'https://images.unsplash.com/photo-1594824388853-2c5899d87b88?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Work', 'Date'],
    season: ['Spring', 'Summer', 'Fall']
  },
  {
    id: '16',
    name: 'Ankle Boots',
    category: 'footwear',
    color: 'Black',
    style: ['Classic'],
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop&crop=center',
    brand: '',
    occasion: ['Work', 'Casual'],
    season: ['Fall', 'Winter']
  }
];

// Sample outfit cards
export const outfitCards: OutfitCard[] = [
  {
    id: 'outfit-1',
    title: 'Business Casual',
    tags: ['Work', 'Professional'],
    items: {
      top: wardrobeItems[0], // Blue Button-Up Shirt
      bottom: wardrobeItems[1], // Black Dress Pants
      footwear: wardrobeItems[2], // Brown Leather Boots
    }
  },
  {
    id: 'outfit-2',
    title: 'Weekend Comfort',
    tags: ['Casual', 'Relaxed'],
    items: {
      top: wardrobeItems[3], // Black Sweater
      bottom: wardrobeItems[4], // Blue Denim Jeans
      footwear: wardrobeItems[5], // White Sneakers
    }
  },
  {
    id: 'outfit-3',
    title: 'Date Night',
    tags: ['Elegant', 'Evening'],
    items: {
      top: wardrobeItems[6], // Green Midi Dress
      footwear: wardrobeItems[10], // Brown Sandals
    }
  },
  {
    id: 'outfit-4',
    title: 'Spring Layers',
    tags: ['Layered', 'Transitional'],
    items: {
      top: wardrobeItems[11], // White T-Shirt
      outerwear: wardrobeItems[8], // Gray Cardigan
      bottom: wardrobeItems[4], // Blue Denim Jeans
      footwear: wardrobeItems[5], // White Sneakers
    }
  }
];

// Sample collections
export const collections: Collection[] = [
  {
    id: 'collection-1',
    name: 'Work Essentials',
    description: 'Professional outfits for the office',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    outfits: [outfitCards[0], outfitCards[3]]
  },
  {
    id: 'collection-2',
    name: 'Casual Weekends',
    description: 'Comfortable looks for relaxed days',
    coverImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    outfits: [outfitCards[1], outfitCards[2]]
  }
];

// Filter options
export const filterOptions = {
  categories: ['All', 'Top', 'Bottom', 'Footwear', 'Outerwear'],
  colors: ['All', 'Black', 'White', 'Blue', 'Gray', 'Brown', 'Green', 'Navy', 'Beige'],
  styles: ['All', 'Casual', 'Formal', 'Business', 'Athletic', 'Elegant'],
  occasions: ['All', 'Work', 'Casual', 'Date', 'Party', 'Exercise', 'Beach'],
  seasons: ['All', 'Spring', 'Summer', 'Fall', 'Winter']
};
