import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, FadeIn, SlideInDown } from 'react-native-reanimated';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { OutfitCard } from '@/components/OutfitCard';
import { outfitCards } from '@/data/wardrobeData';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const collectionChips = [
  { id: 'work', name: 'Work', icon: '🏢' },
  { id: 'leisure', name: 'Leisure', icon: '🏖️' },
  { id: 'date', name: 'Date', icon: '💕' },
  { id: 'party', name: 'Party', icon: '🎉' },
];

export function CollectionsTab() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [selectedChip, setSelectedChip] = useState<string>('work');

  // Filter outfits based on selected chip
  const getOutfitsForChip = (chipId: string) => {
    return outfitCards.filter(outfit => {
      switch (chipId) {
        case 'work':
          return outfit.tags.some(tag => tag.toLowerCase().includes('work') || tag.toLowerCase().includes('professional') || tag.toLowerCase().includes('business'));
        case 'leisure':
          return outfit.tags.some(tag => tag.toLowerCase().includes('casual') || tag.toLowerCase().includes('relaxed') || tag.toLowerCase().includes('weekend'));
        case 'date':
          return outfit.tags.some(tag => tag.toLowerCase().includes('elegant') || tag.toLowerCase().includes('evening') || tag.toLowerCase().includes('romantic'));
        case 'party':
          return outfit.tags.some(tag => tag.toLowerCase().includes('party') || tag.toLowerCase().includes('celebration') || tag.toLowerCase().includes('night'));
        default:
          return true;
      }
    });
  };

  const filteredOutfits = getOutfitsForChip(selectedChip);

  const renderOutfitItem = ({ item, index }: { item: any; index: number }) => (
    <Animated.View
      entering={FadeIn.delay(index * 100).springify()}
      style={styles.outfitItem}
    >
      <OutfitCard
        outfit={item}
        onPress={() => {
          console.log('Outfit pressed:', item.title);
        }}
      />
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {/* Horizontal Scrollable Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsContainer}
        style={styles.chipsScrollView}
      >
        {/* Add New Chip */}
        <AddNewChip colors={colors} />
        
        {/* Collection Chips */}
        {collectionChips.map((chip) => (
          <CollectionChip
            key={chip.id}
            chip={chip}
            isSelected={selectedChip === chip.id}
            onPress={() => setSelectedChip(chip.id)}
            colors={colors}
          />
        ))}
      </ScrollView>

      {/* Outfits Grid */}
      <FlatList
        data={filteredOutfits}
        renderItem={renderOutfitItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.gridContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

interface CollectionChipProps {
  chip: { id: string; name: string; icon: string };
  isSelected: boolean;
  onPress: () => void;
  colors: any;
}

function CollectionChip({ chip, isSelected, onPress, colors }: CollectionChipProps) {
  const colorScheme = useColorScheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  // Get colors for chips - black text and gray border for unselected, transparent orange bg with orange border for selected
  const getChipColors = () => {
    if (isSelected) {
      return {
        background: 'rgba(255, 107, 53, 0.1)', // Transparent orange background
        text: '#FF6B35', // Orange text
        border: '#FF6B35', // Orange border
      };
    } else {
      return {
        background: 'transparent',
        text: '#000000', // Black text for all unselected
        border: '#CCCCCC', // Gray border for all unselected
      };
    }
  };

  const chipColors = getChipColors();

  return (
    <AnimatedPressable
      style={[
        styles.chip,
        {
          backgroundColor: chipColors.background,
          borderColor: chipColors.border,
          borderWidth: isSelected ? 0 : 1,
        },
        animatedStyle,
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={`${chip.name} collection`}
      accessibilityState={{ selected: isSelected }}
    >
      <Text style={styles.chipIcon}>{chip.icon}</Text>
      <Text
        style={[
          styles.chipText,
          {
            color: chipColors.text,
            fontWeight: isSelected ? Typography.weights.semibold : Typography.weights.medium,
          },
        ]}
      >
        {chip.name}
      </Text>
    </AnimatedPressable>
  );
}

function AddNewChip({ colors }: { colors: any }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  return (
    <AnimatedPressable
      style={[
        styles.addNewChip,
        {
          borderColor: colors.border,
        },
        animatedStyle,
      ]}
      onPress={() => console.log('Add new collection')}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel="Add new collection"
    >
      <Text style={[styles.addNewText, { color: colors.textSecondary }]}>+ Add new</Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chipsScrollView: {
    maxHeight: 60,
  },
  chipsContainer: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.md,
  },
  addNewChip: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xxl,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginRight: Spacing.sm,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNewText: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.medium,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xxl,
    marginRight: Spacing.sm,
    minHeight: 44,
  },
  chipIcon: {
    fontSize: Typography.sizes.md,
    marginRight: Spacing.xs,
  },
  chipText: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.medium,
  },
  gridContainer: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  row: {
    justifyContent: 'space-between',
  },
  collectionItem: {
    flex: 1,
    marginBottom: Spacing.lg,
    marginHorizontal: Spacing.xs,
  },
  outfitItem: {
    marginBottom: Spacing.lg,
  },
});
