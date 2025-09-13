import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Spacing } from '@/constants/theme';
import { OutfitCard } from '@/components/OutfitCard';
import { outfitCards } from '@/data/wardrobeData';

export function OutfitsTab() {
  const renderOutfitItem = ({ item, index }: { item: any; index: number }) => (
    <Animated.View
      entering={FadeIn.delay(index * 100).springify()}
      style={styles.outfitItem}
    >
      <OutfitCard
        outfit={item}
        onPress={() => {
          console.log('Outfit pressed:', item.name);
        }}
      />
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={outfitCards}
        renderItem={renderOutfitItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  outfitItem: {
    marginBottom: Spacing.lg,
  },
});
