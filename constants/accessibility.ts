// Accessibility constants for cross-platform consistency
export const Accessibility = {
  // Minimum touch target size (44px as per WCAG guidelines)
  minTouchTarget: 44,
  
  // Touch target sizes
  touchTargets: {
    small: 44,
    medium: 48,
    large: 56,
  },
  
  // Accessibility labels
  labels: {
    filterChip: 'Filter option',
    itemCard: 'Wardrobe item',
    outfitCard: 'Outfit collection',
    bookmark: 'Bookmark item',
    dropdown: 'Filter dropdown',
    tabNavigation: 'Navigation tab',
  },
  
  // Accessibility hints
  hints: {
    filterChip: 'Double tap to apply filter',
    itemCard: 'Double tap to view item details',
    outfitCard: 'Double tap to view outfit details',
    bookmark: 'Double tap to save or unsave item',
    dropdown: 'Double tap to open filter options',
  },
} as const;
