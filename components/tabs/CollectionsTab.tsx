import { OutfitCard } from '@/components/OutfitCard';
import { BorderRadius, Colors, Spacing, Typography } from '@/constants/theme';
import { outfitCards } from '@/data/wardrobeData';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { AddNewChip } from '../chips/AddNewChip';
import { CollectionChip } from '../chips/CollectionChip';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const collectionChips = [
  { id: 'work', name: 'Work', icon: '💼' },
  { id: 'leisure', name: 'Leisure', icon: '🏖️' },
  { id: 'date', name: 'Date', icon: '🎀' },
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
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsContainer}
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
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chipsContainer: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xl,
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
