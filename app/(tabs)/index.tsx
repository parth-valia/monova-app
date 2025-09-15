import { Colors, Spacing, Typography } from "@/constants/theme";
import { collections, outfitCards } from "@/data/wardrobeData";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { CollectionCard } from "@/components/CollectionCard";
import { OutfitCard } from "@/components/OutfitCard";
import React from "react";

function HomeScreen() {
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: Colors.background }]}
    >
      <StatusBar barStyle={"dark-content"} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: Colors.text }]}>Home</Text>
        <Text style={[styles.subtitle, { color: Colors.textSecondary }]}>
          Welcome to your wardrobe
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Featured Collections Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: Colors.text }]}>
            Featured Collections
          </Text>
          <View style={styles.collectionsGrid}>
            {collections.slice(0, 4).map((collection) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                onPress={() => {
                  console.log("Collection pressed:", collection.name);
                }}
              />
            ))}
          </View>
        </View>

        {/* Recent Outfits Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: Colors.text }]}>
            Recent Outfits
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.outfitsContainer}
          >
            {outfitCards.slice(0, 3).map((outfit) => (
              <View key={outfit.id} style={[styles.outfitCardWrapper]}>
                <OutfitCard
                  outfit={outfit}
                  onPress={() => {
                    console.log("Outfit pressed:", outfit.id);
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  outfitsContainer: {
    paddingRight: Spacing.xl,
    gap: Spacing.md,
  },
  outfitCardWrapper: {
    marginRight: Spacing.sm,
    width: Dimensions.get("window").width * 0.8,
  },
  outfitsScroll: {
    paddingLeft: Spacing.lg,
    paddingRight: Spacing.lg,
  },
});

export default HomeScreen;
