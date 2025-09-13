# MonovaApp - Modern Wardrobe Management

A pixel-perfect wardrobe management app built with React Native, Expo, and TypeScript. Features smooth animations, responsive design, and a clean component architecture.

## 🚀 How to Run

### Live Demo
- **Expo Snack**: [View Live Demo](https://snack.expo.dev/) *(Link will be updated after deployment)*
- **GitHub Repository**: [MonovaApp](https://github.com/username/MonovaApp)

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npx expo start
   ```

3. **Platform-specific commands**
   ```bash
   # Web
   npx expo start --web
   
   # iOS Simulator
   npx expo start --ios
   
   # Android Emulator
   npx expo start --android
   
   # Clear cache (if needed)
   npx expo start -c
   ```

## 🎯 What Was Replicated from Video

### UI Components Implemented
- **Collections Tab**: Shows outfit combinations filtered by category chips (Work, Leisure, Date, Party)
- **Items Tab**: Grid view of individual wardrobe items with multi-filter dropdowns
- **Saved Tab**: Three-section navigation (Collections, Outfits, Items) with saved state
- **Filter System**: Interactive chips with orange highlighting for active selections
- **Save Functionality**: Bookmark buttons on all items and outfits (filled by default)

### Visual Design Matching
- **Exact Layout**: Pixel-perfect spacing, typography, and component positioning
- **Color Scheme**: Orange accent color (#FF6B35) for active states and highlights
- **Typography**: Consistent font sizes and weights matching reference design
- **Grid Layouts**: 2-column responsive grids for items and single-column for outfits
- **Filter Styling**: Transparent orange backgrounds with orange borders for active filters

### Interactions & Animations
- **Spring Animations**: All button presses and transitions use spring physics
- **Filter Highlighting**: Smooth color transitions for active/inactive states  
- **Save Toggle**: Functional bookmark buttons with visual state changes
- **Tab Navigation**: Seamless switching with proper state management

## 🏗️ Component Structure & State Management

### Architecture Overview
```
MonovaApp/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx           # Home screen
│   │   └── saved.tsx           # Saved items with sub-tabs
│   └── _layout.tsx             # Root layout with theme
├── components/
│   ├── tabs/
│   │   ├── CollectionsTab.tsx  # Collection filtering & display
│   │   ├── ItemsTab.tsx        # Item filtering & grid
│   │   └── OutfitsTab.tsx      # Outfit list display
│   ├── ItemCard.tsx            # Individual item component
│   ├── OutfitCard.tsx          # Outfit display component
│   ├── FilterDropdown.tsx      # Multi-select filter component
│   └── FloatingActionButton.tsx # Add new item FAB
├── constants/
│   └── theme.ts                # Design system & colors
└── data/
    └── wardrobeData.ts         # Sample data & TypeScript interfaces
```

### State Management Strategy
- **React Hooks**: `useState` for component-level state (filters, save status)
- **Theme Context**: `useColorScheme` for light/dark mode switching
- **Local State**: Each tab maintains its own filter and selection state
- **No External Libraries**: Uses built-in React state management for simplicity

### Key Components

1. **ItemCard**: Displays individual items with save button and tags
2. **OutfitCard**: Shows outfit combinations with 2x2 item grid and save functionality
3. **FilterDropdown**: Multi-select dropdowns with orange highlighting for active filters
4. **CollectionsTab**: Category chips that filter outfits by tags
5. **FloatingActionButton**: Theme-aware add button (dark/light mode adaptive)

## 📝 Assumptions & Limitations

### Assumptions Made
- **Sample Data**: Using curated fashion images from Unsplash for demonstration
- **Simplified Schema**: Basic wardrobe item structure suitable for demo purposes
- **Tab Navigation**: Two-tab structure (Home + Saved) sufficient for current scope
- **Filter Categories**: Predefined filter options based on common wardrobe attributes
- **Save State**: All items start as "saved" to demonstrate filled bookmark icons

### Current Limitations
- **No Backend**: Uses hardcoded data (easily replaceable with API integration)
- **No Persistence**: Filter selections and save states reset on app restart
- **No User Accounts**: Single-user demo without authentication
- **No Image Upload**: Uses predefined image URLs only
- **Basic Search**: Filter-based only, no text search functionality
- **No Offline Support**: Requires internet connection for images

### Technical Constraints
- **Web Compatibility**: Some Reanimated features limited on web platform
- **Image Loading**: Dependent on external image URLs (Unsplash)
- **Performance**: Large datasets may require virtualization for optimal scrolling

## 🎨 Animations & Interactions Implemented

### Micro-Interactions
- **Button Press**: Scale animation (0.95x) with spring physics on all pressable elements
- **Save Toggle**: Smooth icon transition between filled/outline bookmark states
- **Filter Selection**: Color and background transitions for active/inactive states
- **Tab Switching**: Seamless navigation with background color changes

### Entrance Animations
- **Staggered Loading**: Items appear with delayed fade-in animations
- **Spring Physics**: All animations use natural spring curves for organic feel
- **Card Hover**: Subtle scale effects on card interactions

### Performance Optimizations
- **Native Driver**: All animations run on UI thread for 60fps performance
- **Optimized Scrolling**: FlatList with proper keyExtractor and renderItem optimization
- **Conditional Rendering**: Efficient re-renders based on state changes

### Animation Library Usage
- **React Native Reanimated**: For smooth, performant animations
- **Custom Hooks**: `useSharedValue` and `useAnimatedStyle` for state-driven animations
- **Spring Configurations**: Consistent damping and stiffness values across components

## 🛠️ Tech Stack

- **Framework**: React Native + Expo SDK 54
- **Language**: TypeScript 5.9.2
- **Navigation**: Expo Router (file-based routing)
- **Animations**: React Native Reanimated 4.1.0
- **Gestures**: React Native Gesture Handler 2.28.0
- **Icons**: Expo Symbols 1.0.7
- **Styling**: React Native StyleSheet with centralized theme system

## 🔧 Configuration

### Babel Configuration
```javascript
// babel.config.js
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['react-native-reanimated/plugin']
}
```

### Theme System
```typescript
// constants/theme.ts
export const Colors = {
  light: { /* light mode colors */ },
  dark: { /* dark mode colors */ }
}
export const Spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 }
export const Typography = { sizes: {...}, weights: {...} }
```

## 🧪 Cross-Platform Testing

The app has been tested across:
- **Web**: Chrome, Safari, Firefox with responsive design
- **iOS**: iPhone simulators (various screen sizes)
- **Android**: Android emulators and physical devices
- **Accessibility**: Screen readers and keyboard navigation
- **Performance**: 60fps animations on all platforms

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Test on all platforms (Web, iOS, Android)
4. Submit a pull request

## 🙏 Acknowledgments

- **Design Inspiration**: Modern wardrobe management app patterns
- **Expo Team**: Excellent React Native framework and tooling
- **Unsplash**: High-quality fashion photography for demo content