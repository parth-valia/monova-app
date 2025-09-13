import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors, Spacing, BorderRadius, Typography, TouchTargets } from '@/constants/theme';
import { Accessibility } from '@/constants/accessibility';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { createShadowStyle } from '@/utils/shadow';
import { OutfitCard as OutfitCardType } from '@/data/wardrobeData';

interface OutfitCardProps {
  outfit: OutfitCardType;
  onPress?: () => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function OutfitCard({ outfit, onPress }: OutfitCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const scale = useSharedValue(1);
  const [isSaved, setIsSaved] = useState(true);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.98, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  // For Outfits tab - show multiple items in a 2x2 grid layout like reference
  const renderOutfitItems = () => {
    const items = Object.values(outfit.items).filter(Boolean);
    
    return (
      <View style={styles.outfitGrid}>
        {items.slice(0, 4).map((item, index) => (
          <View key={index} style={[styles.outfitItem, getOutfitItemStyle(index)]}>
            <Image
              source={{ uri: item.image }}
              style={styles.outfitItemImage}
              resizeMode="cover"
            />
          </View>
        ))}
      </View>
    );
  };

  const getOutfitItemStyle = (index: number) => {
    // Position items in 2x2 grid like reference images
    switch (index) {
      case 0: return { top: 0, left: 0 }; // Top left
      case 1: return { top: 0, right: 0 }; // Top right
      case 2: return { bottom: 0, left: 0 }; // Bottom left
      case 3: return { bottom: 0, right: 0 }; // Bottom right
      default: return {};
    }
  };

  const getGridPosition = (index: number, totalItems: number) => {
    if (totalItems === 1) return styles.singleItem;
    if (totalItems === 2) {
      return index === 0 ? styles.leftItem : styles.rightItem;
    }
    if (totalItems === 3) {
      if (index === 0) return styles.topLeftItem;
      if (index === 1) return styles.topRightItem;
      return styles.bottomItem;
    }
    // For 4 items
    if (index === 0) return styles.topLeftItem;
    if (index === 1) return styles.topRightItem;
    if (index === 2) return styles.bottomLeftItem;
    return styles.bottomRightItem;
  };

  return (
    <AnimatedPressable
      style={[styles.card, { backgroundColor: colors.backgroundSecondary }, animatedStyle]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={`Outfit: ${outfit.title}`}
    >
      <View style={[styles.outfitPreview, { backgroundColor: colors.backgroundSecondary }]}>
        {renderOutfitItems()}
        
        {/* Save Button - Bottom right corner, bigger size */}
        <Pressable 
          style={[styles.saveButton, { backgroundColor: colors.background }]}
          onPress={() => {
            setIsSaved(!isSaved);
            console.log('Outfit', isSaved ? 'unsaved' : 'saved');
          }}
        >
          <IconSymbol 
            name={isSaved ? "bookmark.fill" : "bookmark"} 
            size={20} 
            color={isSaved ? colors.text : colors.textSecondary} 
          />
        </Pressable>
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
          {outfit.title}
        </Text>
        
        <View style={styles.tagsContainer}>
          {outfit.tags.map((tag, index) => (
            <View key={index} style={[styles.tag, { backgroundColor: colors.chip }]}>
              <Text style={[styles.tagText, { color: colors.chipText }]}>
                {tag}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    ...createShadowStyle('#000', { width: 0, height: 1 }, 0.05, 2, 1),
    minHeight: TouchTargets.large,
  },
  outfitPreview: {
    height: 200,
    position: 'relative',
    borderRadius: BorderRadius.xl,
  },
  itemsGrid: {
    flex: 1,
    padding: Spacing.sm,
  },
  gridItem: {
    position: 'absolute',
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
  },
  gridItemImage: {
    width: '100%',
    height: '100%',
  },
  // Single item layout
  singleItem: {
    top: Spacing.md,
    left: Spacing.md,
    right: Spacing.md,
    bottom: Spacing.md,
  },
  // Two items layout
  leftItem: {
    top: Spacing.md,
    left: Spacing.md,
    width: 80,
    height: 120,
  },
  rightItem: {
    top: Spacing.md,
    right: Spacing.md,
    width: 80,
    height: 120,
  },
  // Three items layout
  topLeftItem: {
    top: Spacing.md,
    left: Spacing.md,
    width: 70,
    height: 70,
  },
  topRightItem: {
    top: Spacing.md,
    right: Spacing.md,
    width: 70,
    height: 70,
  },
  bottomItem: {
    bottom: Spacing.md,
    left: Spacing.md,
    right: Spacing.md,
    height: 60,
  },
  // Four items layout
  bottomLeftItem: {
    bottom: Spacing.md,
    left: Spacing.md,
    width: 70,
    height: 60,
  },
  bottomRightItem: {
    bottom: Spacing.md,
    right: Spacing.md,
    width: 70,
    height: 60,
  },
  // Legacy styles (keeping for compatibility)
  itemImageContainer: {
    position: 'absolute',
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  topPosition: {
    top: Spacing.md,
    left: Spacing.md,
    width: 80,
    height: 80,
  },
  bottomPosition: {
    top: Spacing.md,
    right: Spacing.md,
    width: 80,
    height: 80,
  },
  footwearPosition: {
    bottom: Spacing.md,
    left: Spacing.md,
    width: 60,
    height: 60,
  },
  outerwearPosition: {
    bottom: Spacing.md,
    right: Spacing.md,
    width: 70,
    height: 70,
  },
  content: {
    padding: Spacing.lg,
  },
  title: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semibold,
    marginBottom: Spacing.sm,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,
  },
  tag: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
  },
  tagText: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.medium,
  },
  outfitGrid: {
    flex: 1,
    position: 'relative',
  },
  outfitItem: {
    position: 'absolute',
    width: '48%',
    height: '48%',
    borderRadius: BorderRadius.sm,
    overflow: 'hidden',
  },
  outfitItemImage: {
    width: '100%',
    height: '100%',
  },
  saveButton: {
    position: 'absolute',
    bottom: Spacing.md,
    right: Spacing.md,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
