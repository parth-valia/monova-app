import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors, Spacing, BorderRadius, Typography, TouchTargets } from '@/constants/theme';
import { Accessibility } from '@/constants/accessibility';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { WardrobeItem } from '@/data/wardrobeData';
import { createShadowStyle } from '@/utils/shadow';

interface ItemCardProps {
  item: WardrobeItem;
  onPress?: () => void;
  showTags?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function ItemCard({ item, onPress, showTags = true }: ItemCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const scale = useSharedValue(1);
  const [isBookmarked, setIsBookmarked] = useState(true);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.98, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  const handleBookmarkPress = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <AnimatedPressable
      style={[styles.card, animatedStyle]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={`${Accessibility.labels.itemCard}: ${item.name}`}
      accessibilityHint={Accessibility.hints.itemCard}
    >
      <View style={[styles.imageContainer, { backgroundColor: colors.backgroundSecondary }]}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Pressable
          style={[styles.bookmarkButton, { backgroundColor: colors.background }]}
          onPress={handleBookmarkPress}
          accessibilityRole="button"
          accessibilityLabel={isBookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <IconSymbol
            name={isBookmarked ? "bookmark.fill" : "bookmark"}
            size={16}
            color={isBookmarked ? colors.text : colors.textSecondary}
          />
        </Pressable>
      </View>
      
      <View style={styles.content}>
        {showTags && item.style.length > 0 && (
          <View style={styles.categoryContainer}>
            <View style={[styles.categoryIcon, getCategoryIconStyle(item.style[0], colors)]}>
              <Text style={[styles.categoryIconText, getCategoryTextStyle(item.style[0], colors)]}>
                {getCategoryIcon(item.style[0])}
              </Text>
            </View>
            <Text style={[styles.categoryText, { color: colors.textSecondary }]}>
              {item.style[0]}
            </Text>
          </View>
        )}
        
        <Text style={[styles.name, { color: colors.text }]} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    </AnimatedPressable>
  );
}

const getCategoryIcon = (style: string) => {
  switch (style.toLowerCase()) {
    case 'crop': return '🎀';
    case 'striped': return '🏢';
    case 'denim': return '🌊';
    case 'wide leg': return '🏢';
    case 'golden': return '✨';
    case 'elegant': return '🌟';
    case 'classic': return '🏢';
    case 'casual': return '👕';
    default: return '👔';
  }
};

const getCategoryIconStyle = (style: string, colors: any) => {
  const baseStyle = { backgroundColor: colors.chip };
  switch (style.toLowerCase()) {
    case 'crop': return { ...baseStyle, backgroundColor: '#FFE4E1' };
    case 'striped': return { ...baseStyle, backgroundColor: '#F0F8FF' };
    case 'denim': return { ...baseStyle, backgroundColor: '#E6F3FF' };
    case 'wide leg': return { ...baseStyle, backgroundColor: '#F5F5DC' };
    case 'golden': return { ...baseStyle, backgroundColor: '#FFF8DC' };
    case 'elegant': return { ...baseStyle, backgroundColor: '#F0FFF0' };
    default: return baseStyle;
  }
};

const getCategoryTextStyle = (style: string, colors: any) => {
  return { color: colors.textSecondary };
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    ...createShadowStyle('#000', { width: 0, height: 1 }, 0.05, 2, 1),
    minHeight: TouchTargets.large, // Ensure adequate touch target
  },
  imageContainer: {
    aspectRatio: 1,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bookmarkButton: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    width: TouchTargets.small, // 44px minimum touch target
    height: TouchTargets.small,
    borderRadius: TouchTargets.small / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    padding: Spacing.md,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  categoryIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.xs,
  },
  categoryIconText: {
    fontSize: 10,
  },
  categoryText: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.medium,
    textTransform: 'capitalize',
  },
  name: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.medium,
    lineHeight: 20,
  },
  brand: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.normal,
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
    textTransform: 'capitalize',
  },
});
