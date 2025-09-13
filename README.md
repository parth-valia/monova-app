# Wardrobe App - React Native + Expo

A pixel-perfect wardrobe management app built with React Native, Expo, and TypeScript. Features smooth animations, responsive design, and a clean component architecture.

## 🚀 Live Demo

- **Expo Snack**: [View Live Demo](https://snack.expo.dev/) *(Link will be updated after deployment)*
- **GitHub Repository**: [MonovaApp](https://github.com/username/MonovaApp) *(Link will be updated after deployment)*

## 📱 Features

### Core Functionality
- **Collections Tab**: Browse curated outfit collections with smooth horizontal scrolling
- **Outfits Tab**: Grid view of complete outfits with filtering capabilities
- **Items Tab**: Individual wardrobe items with category and style filters
- **Real-time Filtering**: Dynamic filter chips with active filter pills
- **Smooth Navigation**: Tab-based navigation with spring animations

### UI/UX Highlights
- **Pixel-Perfect Design**: Matches reference screenshots with precise spacing and typography
- **Smooth Animations**: Spring-based micro-interactions and entrance animations
- **Responsive Layout**: Optimized for mobile web and various screen sizes
- **Accessibility**: WCAG compliant with proper hit areas (≥44px) and screen reader support
- **Dark/Light Mode**: Automatic theme switching based on system preferences

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **React Native Reanimated**: Buttery smooth 60fps animations
- **Expo Router**: File-based routing system
- **Modular Components**: Reusable, well-structured component architecture
- **Theme System**: Centralized design tokens for colors, typography, and spacing

## 🛠 Tech Stack

- **Framework**: React Native + Expo (~54.0.6)
- **Language**: TypeScript (~5.9.2)
- **Navigation**: Expo Router (~6.0.3)
- **Animations**: React Native Reanimated (~4.1.0)
- **Gestures**: React Native Gesture Handler (~2.28.0)
- **Icons**: Expo Symbols (~1.0.7)
- **Image Handling**: Expo Image (~3.0.8)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (optional, for additional features)

### MonovaApp - Cross-Platform Wardrobe Management

A modern wardrobe management app built with Expo, React Native, and TypeScript. Features cross-platform compatibility for Web, iOS, and Android with smooth animations and consistent UI/UX.

## 🚀 Features

- **Cross-Platform**: Runs on Web, iOS, and Android with identical UI/UX
- **Modern Design**: Clean, minimalist interface with smooth animations
- **Accessibility**: WCAG-compliant with 44px minimum touch targets
- **Filter System**: Advanced filtering with dropdowns and filter chips
- **Responsive Layout**: Optimized for all screen sizes
- **Type Safety**: Full TypeScript support

## 🛠 Tech Stack

- **Framework**: Expo SDK 54
- **Language**: TypeScript
- **Styling**: React Native StyleSheet with theme constants
- **Animations**: React Native Reanimated 3 + React Native Gesture Handler
- **Navigation**: Expo Router (file-based routing)
- **State Management**: React hooks

## 📱 Cross-Platform Compatibility

### Reanimated Web Fix
This project includes a custom web polyfill (`utils/reanimated-web-fix.ts`) that:
- Handles unsupported Reanimated functions on web (like `clamp`)
- Provides fallbacks using `interpolate` with `Extrapolate.CLAMP`
- Suppresses web-specific logging issues
- Ensures consistent animation behavior across platforms

### Platform-Specific Considerations
- **Web**: Uses polyfills for Reanimated functions not supported on web
- **iOS/Android**: Full Reanimated and Gesture Handler support
- **Accessibility**: 44px minimum touch targets on all platforms
- **Typography**: Consistent font rendering across platforms

## 🎨 Design System

### Theme Structure
```typescript
// constants/theme.ts
export const Colors = { light: {...}, dark: {...} }
export const Spacing = { xs: 4, sm: 8, md: 12, ... }
export const Typography = { sizes: {...}, weights: {...} }
export const TouchTargets = { small: 44, medium: 48, large: 56 }
```

### Accessibility
- Minimum 44px touch targets (WCAG guidelines)
- Proper accessibility labels and hints
- Screen reader support
- High contrast color ratios

## 🚀 Getting Started

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

## 🔧 Configuration

### Babel Configuration
The project uses a custom babel config with Reanimated plugin:
```javascript
// babel.config.js
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['react-native-reanimated/plugin']
}
```

### Dependencies
- `react-native-reanimated`: Smooth animations
- `react-native-gesture-handler`: Touch interactions
- `expo-router`: File-based navigation
- `@expo/vector-icons`: Icon system

## 🧪 Testing Across Platforms

### Web Testing
```bash
npx expo start --web
# Test in browser at http://localhost:8081
```

### iOS Testing
```bash
npx expo start --ios
# Opens iOS Simulator automatically
```

### Android Testing
```bash
npx expo start --android
# Opens Android Emulator automatically
```

### Production Testing
```bash
# Web build
npx expo export --platform web

# Native builds
eas build --platform ios
eas build --platform android
```

## 🐛 Common Issues & Fixes

### Reanimated Web Errors
**Issue**: `Cannot read properties of undefined (reading 'level')` on web
**Fix**: Import the web polyfill in `_layout.tsx`:
```typescript
import '../utils/reanimated-web-fix';
```

### Metro Bundler Errors
**Issue**: `ENOENT: no such file or directory, open '<anonymous>'`
**Fix**: Check for syntax errors in `babel.config.js` and ensure proper formatting

### Touch Target Issues
**Issue**: Buttons too small on mobile
**Fix**: Use `TouchTargets.small` (44px) minimum from theme constants

## 📁 Project Structure

```
MonovaApp/
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab navigation
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   └── *.tsx             # Feature components
├── constants/            # Theme and configuration
│   ├── theme.ts          # Design system
│   └── accessibility.ts  # Accessibility constants
├── data/                 # Data and types
├── hooks/                # Custom hooks
├── utils/                # Utilities and fixes
│   └── reanimated-web-fix.ts
└── assets/               # Images and fonts
```

## 🎯 Performance Optimization

- **Lazy Loading**: Components load on demand
- **Image Optimization**: Proper image sizing and caching
- **Animation Performance**: Uses native driver where possible
- **Bundle Splitting**: Platform-specific code splitting

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Test on all platforms (Web, iOS, Android)
4. Submit a pull request

## 📞 Support

For issues related to:
- **Expo**: [Expo Documentation](https://docs.expo.dev/)
- **Reanimated**: [Reanimated Documentation](https://docs.swmansion.com/react-native-reanimated/)
- **Cross-platform**: Check the `utils/reanimated-web-fix.ts` implementation

## 📱 Features

### Core Functionality
- **Collections Tab**: Browse curated outfit collections with smooth horizontal scrolling
- **Outfits Tab**: Grid view of complete outfits with filtering capabilities
- **Items Tab**: Individual wardrobe items with category and style filters
- **Real-time Filtering**: Dynamic filter chips with active filter pills
- **Smooth Navigation**: Tab-based navigation with spring animations

### UI/UX Highlights
- **Pixel-Perfect Design**: Matches reference screenshots with precise spacing and typography
- **Smooth Animations**: Spring-based micro-interactions and entrance animations
- **Responsive Layout**: Optimized for mobile web and various screen sizes
- **Accessibility**: WCAG compliant with proper hit areas (≥44px) and screen reader support
- **Dark/Light Mode**: Automatic theme switching based on system preferences

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **React Native Reanimated**: Buttery smooth 60fps animations
- **Expo Router**: File-based routing system
- **Modular Components**: Reusable, well-structured component architecture
- **Theme System**: Centralized design tokens for colors, typography, and spacing

## 🛠 Tech Stack

- **Framework**: React Native + Expo (~54.0.6)
- **Language**: TypeScript (~5.9.2)
- **Navigation**: Expo Router (~6.0.3)
- **Animations**: React Native Reanimated (~4.1.0)
- **Gestures**: React Native Gesture Handler (~2.28.0)
- **Icons**: Expo Symbols (~1.0.7)
- **Image Handling**: Expo Image (~3.0.8)

## 📱 Cross-Platform Compatibility

### Reanimated Web Fix
This project includes a custom web polyfill (`utils/reanimated-web-fix.ts`) that:
- Handles unsupported Reanimated functions on web (like `clamp`)
- Provides fallbacks using `interpolate` with `Extrapolate.CLAMP`
- Suppresses web-specific logging issues
- Ensures consistent animation behavior across platforms

### Platform-Specific Considerations
- **Web**: Uses polyfills for Reanimated functions not supported on web
- **iOS/Android**: Full Reanimated and Gesture Handler support
- **Accessibility**: 44px minimum touch targets on all platforms
- **Typography**: Consistent font rendering across platforms

## 🎨 Design System

### Theme Structure
```typescript
// constants/theme.ts
export const Colors = { light: {...}, dark: {...} }
export const Spacing = { xs: 4, sm: 8, md: 12, ... }
export const Typography = { sizes: {...}, weights: {...} }
export const TouchTargets = { small: 44, medium: 48, large: 56 }
```

### Accessibility
- Minimum 44px touch targets (WCAG guidelines)
- Proper accessibility labels and hints
- Screen reader support
- High contrast color ratios

## 🚀 Getting Started

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

## 🔧 Configuration

### Babel Configuration
The project uses a custom babel config with Reanimated plugin:
```javascript
// babel.config.js
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['react-native-reanimated/plugin']
}
```

### Dependencies
- `react-native-reanimated`: Smooth animations
- `react-native-gesture-handler`: Touch interactions
- `expo-router`: File-based navigation
- `@expo/vector-icons`: Icon system

## 🧪 Testing Across Platforms

### Web Testing
```bash
npx expo start --web
# Test in browser at http://localhost:8081
```

### iOS Testing
```bash
npx expo start --ios
# Opens iOS Simulator automatically
```

### Android Testing
```bash
npx expo start --android
# Opens Android Emulator automatically
```

### Production Testing
```bash
# Web build
npx expo export --platform web

# Native builds
eas build --platform ios
eas build --platform android
```

## 🐛 Common Issues & Fixes

### Reanimated Web Errors
**Issue**: `Cannot read properties of undefined (reading 'level')` on web
**Fix**: Import the web polyfill in `_layout.tsx`:
```typescript
import '../utils/reanimated-web-fix';
```

### Metro Bundler Errors
**Issue**: `ENOENT: no such file or directory, open '<anonymous>'`
**Fix**: Check for syntax errors in `babel.config.js` and ensure proper formatting

### Touch Target Issues
**Issue**: Buttons too small on mobile
**Fix**: Use `TouchTargets.small` (44px) minimum from theme constants

## 📁 Project Structure

```
MonovaApp/
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab navigation
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   └── *.tsx             # Feature components
├── constants/            # Theme and configuration
│   ├── theme.ts          # Design system
│   └── accessibility.ts  # Accessibility constants
├── data/                 # Data and types
├── hooks/                # Custom hooks
├── utils/                # Utilities and fixes
│   └── reanimated-web-fix.ts
└── assets/               # Images and fonts
```

## 🎯 Performance Optimization

- **Lazy Loading**: Components load on demand
- **Image Optimization**: Proper image sizing and caching
- **Animation Performance**: Uses native driver where possible
- **Bundle Splitting**: Platform-specific code splitting

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Test on all platforms (Web, iOS, Android)
4. Submit a pull request

## 📞 Support

For issues related to:
- **Expo**: [Expo Documentation](https://docs.expo.dev/)
- **Reanimated**: [Reanimated Documentation](https://docs.swmansion.com/react-native-reanimated/)
- **Cross-platform**: Check the `utils/reanimated-web-fix.ts` implementation

## 📁 Project Structure

```
MonovaApp/
├── app/                          # Expo Router pages
│   ├── (tabs)/                   # Tab-based navigation
│   │   ├── index.tsx            # Collections screen
│   │   ├── outfits.tsx          # Outfits screen
│   │   └── items.tsx            # Items screen
│   ├── _layout.tsx              # Root layout
│   └── modal.tsx                # Modal screen
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components
│   ├── ActiveFilterPill.tsx     # Active filter removal component
│   ├── AnimatedEntrance.tsx     # Entrance animation wrapper
│   ├── CollectionCard.tsx       # Collection display component
│   ├── FilterChip.tsx           # Filter selection component
│   ├── ItemCard.tsx             # Individual item component
│   ├── OutfitCard.tsx           # Outfit display component
│   ├── Placeholder.tsx          # Loading state component
│   └── TabNavigation.tsx        # Tab navigation component
├── constants/                    # App constants
│   └── theme.ts                 # Design tokens and theme
├── data/                        # Data and types
│   └── wardrobeData.ts          # Sample data and TypeScript interfaces
├── hooks/                       # Custom React hooks
│   ├── use-color-scheme.ts      # Theme detection hook
│   └── useWardrobeContext.tsx   # App state management
└── assets/                      # Static assets
    └── images/                  # App icons and images
```

## 🎨 Component Architecture

### Core Components

1. **ItemCard**: Displays individual wardrobe items with image, name, brand, and tags
2. **OutfitCard**: Shows complete outfits with layered item preview and tags
3. **CollectionCard**: Displays curated collections with cover image and description
4. **FilterChip**: Interactive filter buttons with active/inactive states
5. **ActiveFilterPill**: Removable active filter indicators
6. **TabNavigation**: Consistent tab switching across screens

### Animation System

- **AnimatedEntrance**: Configurable entrance animations (bottom, top, left, right, scale)
- **Spring Physics**: All interactions use spring-based animations for natural feel
- **Micro-interactions**: Button presses, filter toggles, and card interactions
- **Smooth Scrolling**: Optimized FlatList and ScrollView performance

## 📊 State Management

The app uses React Context for simple state management:

- **Active Tab**: Current navigation state
- **Active Filters**: Selected filter criteria
- **Selected Category**: Current item category filter

## 🎯 Implementation Highlights

### What Was Replicated from Reference
- **Exact Layout**: Pixel-perfect spacing, typography, and component positioning
- **Filter System**: Interactive chips with active state indicators
- **Grid Layouts**: Responsive 2-column grids for items and outfits
- **Smooth Scrolling**: Horizontal carousel for outfit cards
- **Visual Hierarchy**: Proper use of typography scales and color contrast

### Animations & Interactions
- **Card Press**: Scale animation with spring physics
- **Filter Toggle**: Smooth color and scale transitions
- **Tab Navigation**: Seamless switching with state persistence
- **Entrance Animations**: Staggered item appearances
- **Scroll Performance**: Optimized for 60fps on web and mobile

### Accessibility Features
- **Minimum Touch Targets**: All interactive elements ≥44px
- **Screen Reader Support**: Proper accessibility labels and roles
- **Keyboard Navigation**: Logical tab order for web users
- **Color Contrast**: WCAG AA compliant color combinations
- **Reduced Motion**: Respects user's motion preferences

## 🔧 Customization

### Adding New Items
Edit `data/wardrobeData.ts` to add new wardrobe items, outfits, or collections:

```typescript
export const wardrobeItems: WardrobeItem[] = [
  {
    id: 'new-item',
    name: 'New Item',
    category: 'top',
    color: 'Blue',
    style: ['Casual'],
    image: 'https://example.com/image.jpg',
    // ... other properties
  },
  // ... existing items
];
```

### Customizing Theme
Modify `constants/theme.ts` to adjust colors, typography, and spacing:

```typescript
export const Colors = {
  light: {
    text: '#000000',
    background: '#FFFFFF',
    // ... other colors
  },
};
```

### Adding New Animations
Use the `AnimatedEntrance` component for consistent animations:

```tsx
<AnimatedEntrance delay={100} from="bottom">
  <YourComponent />
</AnimatedEntrance>
```

## 🧪 Testing

The app has been tested for:
- **Cross-platform compatibility** (iOS, Android, Web)
- **Responsive design** (various screen sizes)
- **Performance** (smooth 60fps animations)
- **Accessibility** (screen readers, keyboard navigation)
- **State management** (filter persistence, navigation state)

## 📝 Assumptions & Limitations

### Assumptions Made
- **Image Sources**: Using Unsplash placeholder images for demonstration
- **Data Structure**: Simplified wardrobe item schema for demo purposes
- **Navigation**: Tab-based navigation sufficient for current scope
- **Offline Support**: Not implemented in current version

### Current Limitations
- **Backend Integration**: Uses hardcoded data (easily replaceable with API calls)
- **User Authentication**: Not implemented in demo version
- **Image Upload**: Not available in current version
- **Search Functionality**: Basic filtering only (no text search)
- **Persistence**: No local storage (state resets on app restart)

### Future Enhancements
- **Backend API**: Integration with wardrobe management service
- **User Accounts**: Personal wardrobe management
- **AI Recommendations**: Outfit suggestions based on weather/occasion
- **Social Features**: Sharing outfits and collections
- **Advanced Search**: Text-based search and AI-powered filtering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Based on modern wardrobe management app patterns
- **Expo Team**: For the excellent React Native framework
- **React Native Community**: For the amazing ecosystem of libraries
- **Unsplash**: For providing high-quality placeholder images
#   m o n o v a - a p p  
 