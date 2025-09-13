import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface PlaceholderProps {
  type: 'item' | 'outfit' | 'collection';
  count?: number;
}

export function Placeholder({ type, count = 6 }: PlaceholderProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const opacity = useSharedValue(0.3);

  React.useEffect(() => {
    opacity.value = withRepeat(
      withTiming(0.8, { duration: 1000 }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const renderItemPlaceholder = () => (
    <Animated.View style={[styles.itemContainer, { backgroundColor: colors.backgroundSecondary }, animatedStyle]}>
      <View style={[styles.itemImage, { backgroundColor: colors.border }]} />
      <View style={styles.itemContent}>
        <View style={[styles.textLine, styles.titleLine, { backgroundColor: colors.border }]} />
        <View style={[styles.textLine, styles.subtitleLine, { backgroundColor: colors.borderLight }]} />
        <View style={styles.tagsPlaceholder}>
          <View style={[styles.tagPlaceholder, { backgroundColor: colors.borderLight }]} />
          <View style={[styles.tagPlaceholder, { backgroundColor: colors.borderLight }]} />
        </View>
      </View>
    </Animated.View>
  );

  const renderOutfitPlaceholder = () => (
    <Animated.View style={[styles.outfitContainer, { backgroundColor: colors.backgroundSecondary }, animatedStyle]}>
      <View style={[styles.outfitPreview, { backgroundColor: colors.border }]} />
      <View style={styles.outfitContent}>
        <View style={[styles.textLine, styles.titleLine, { backgroundColor: colors.border }]} />
        <View style={styles.tagsPlaceholder}>
          <View style={[styles.tagPlaceholder, { backgroundColor: colors.borderLight }]} />
          <View style={[styles.tagPlaceholder, { backgroundColor: colors.borderLight }]} />
        </View>
      </View>
    </Animated.View>
  );

  const renderCollectionPlaceholder = () => (
    <Animated.View style={[styles.collectionContainer, { backgroundColor: colors.backgroundSecondary }, animatedStyle]}>
      <View style={[styles.collectionImage, { backgroundColor: colors.border }]} />
      <View style={styles.collectionContent}>
        <View style={[styles.textLine, styles.titleLine, { backgroundColor: colors.border }]} />
        <View style={[styles.textLine, styles.descriptionLine, { backgroundColor: colors.borderLight }]} />
      </View>
    </Animated.View>
  );

  const renderPlaceholder = () => {
    switch (type) {
      case 'item':
        return renderItemPlaceholder();
      case 'outfit':
        return renderOutfitPlaceholder();
      case 'collection':
        return renderCollectionPlaceholder();
      default:
        return renderItemPlaceholder();
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: count }, (_, index) => (
        <View key={index}>
          {renderPlaceholder()}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    marginBottom: Spacing.lg,
  },
  itemImage: {
    aspectRatio: 1,
    borderRadius: BorderRadius.lg,
  },
  itemContent: {
    padding: Spacing.md,
  },
  outfitContainer: {
    width: 280,
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
    marginRight: Spacing.lg,
  },
  outfitPreview: {
    height: 200,
    borderRadius: BorderRadius.xl,
  },
  outfitContent: {
    padding: Spacing.lg,
  },
  collectionContainer: {
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
    marginBottom: Spacing.lg,
  },
  collectionImage: {
    height: 160,
    borderRadius: BorderRadius.xl,
  },
  collectionContent: {
    padding: Spacing.lg,
  },
  textLine: {
    height: 16,
    borderRadius: BorderRadius.sm,
    marginBottom: Spacing.sm,
  },
  titleLine: {
    width: '70%',
  },
  subtitleLine: {
    width: '50%',
  },
  descriptionLine: {
    width: '90%',
  },
  tagsPlaceholder: {
    flexDirection: 'row',
    gap: Spacing.xs,
    marginTop: Spacing.xs,
  },
  tagPlaceholder: {
    width: 60,
    height: 20,
    borderRadius: BorderRadius.sm,
  },
});
