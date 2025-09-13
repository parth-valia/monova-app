import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors, Spacing, BorderRadius, Typography, TouchTargets } from '@/constants/theme';
import { Accessibility } from '@/constants/accessibility';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { createShadowStyle } from '@/utils/shadow';
import { Collection } from '@/data/wardrobeData';

interface CollectionCardProps {
  collection: Collection;
  onPress?: () => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function CollectionCard({ collection, onPress }: CollectionCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.98, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  return (
    <AnimatedPressable
      style={[styles.card, { backgroundColor: colors.background }, animatedStyle]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={`Collection: ${collection.name}`}
    >
      <View style={[styles.imageContainer, { backgroundColor: colors.backgroundSecondary }]}>
        <Image
          source={{ uri: collection.coverImage }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={[styles.overlay, { backgroundColor: colors.overlay }]}>
          <Text style={[styles.outfitCount, { color: colors.background }]}>
            {collection.outfits.length} outfits
          </Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>
          {collection.name}
        </Text>
        <Text style={[styles.description, { color: colors.textSecondary }]} numberOfLines={2}>
          {collection.description}
        </Text>
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
  imageContainer: {
    height: 160,
    position: 'relative',
    borderRadius: BorderRadius.xl,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Spacing.md,
  },
  outfitCount: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.semibold,
    textAlign: 'right',
  },
  content: {
    padding: Spacing.lg,
  },
  name: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semibold,
    marginBottom: Spacing.xs,
  },
  description: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.normal,
    lineHeight: 20,
  },
});
