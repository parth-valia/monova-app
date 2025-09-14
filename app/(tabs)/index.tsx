import { CollectionCard } from '@/components/CollectionCard';
import { OutfitCard } from '@/components/OutfitCard';
import { Colors, Spacing, Typography } from '@/constants/theme';
import { collections, outfitCards } from '@/data/wardrobeData';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = Math.max(screenWidth * 0.33, 180); // At least 33% of screen width, minimum 180px

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Home</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Welcome to your wardrobe
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Featured Collections Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Featured Collections</Text>
          <View style={styles.collectionsGrid}>
            {collections.slice(0, 4).map((collection) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                onPress={() => {
                  console.log('Collection pressed:', collection.name);
                }}
              />
            ))}
          </View>
        </View>

        {/* Recent Outfits Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Outfits</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.outfitsContainer}
          >
            {outfitCards.slice(0, 3).map((outfit) => (
              <View key={outfit.id} style={[styles.outfitCardWrapper, { width: cardWidth }]}>
                <OutfitCard
                  outfit={outfit}
                  onPress={() => {
                    console.log('Outfit pressed:', outfit.id);
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  title: {
    fontSize: Typography.sizes.xxxxl,
    fontWeight: Typography.weights.bold,
  },
  subtitle: {
    fontSize: Typography.sizes.lg,
    marginTop: Spacing.xs,
  },
  section: {
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.semibold,
    marginBottom: Spacing.md,
  },
  collectionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  outfitsContainer: {
    paddingRight: Spacing.xl,
    gap: Spacing.md,
  },
  outfitCardWrapper: {
    marginRight: Spacing.md,
  },
  outfitsScroll: {
    paddingLeft: Spacing.lg,
    paddingRight: Spacing.lg,
  },
});

export default HomeScreen;
