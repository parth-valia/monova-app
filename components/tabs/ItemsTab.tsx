import { Colors, Spacing } from "@/constants/theme";
import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

import { FilterDropdown } from "@/components/FilterDropdown";
import { ItemCard } from "@/components/ItemCard";
import { wardrobeItems } from "@/data/wardrobeData";

const filterOptions = {
  types: ["All", "top", "bottom", "outerwear", "footwear", "accessory"],
  styles: [
    "All",
    "Crop",
    "Striped",
    "Denim",
    "Wide Leg",
    "Golden",
    "Elegant",
    "Classic",
    "Casual",
    "Professional",
    "A-Line",
  ],
  moods: [
    "All",
    "Casual",
    "Date",
    "Work",
    "Formal",
    "Weekend",
    "Party",
    "Beach",
  ],
  colors: [
    "All",
    "Black",
    "Blue",
    "Brown",
    "Golden",
    "Green",
    "Gray",
    "Cream",
    "White",
    "Navy",
  ],
};

export function ItemsTab() {
  const colors = Colors;

  const [selectedType, setSelectedType] = useState("All");
  const [selectedStyle, setSelectedStyle] = useState("All");
  const [selectedMood, setSelectedMood] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");

  const filteredItems = wardrobeItems.filter((item) => {
    // Type filter
    if (
      selectedType !== "All" &&
      item.category !== selectedType.toLowerCase()
    ) {
      return false;
    }
    // Style filter
    if (selectedStyle !== "All" && !item.style.includes(selectedStyle)) {
      return false;
    }
    // Mood filter (check occasions)
    if (
      selectedMood !== "All" &&
      !item.occasion?.some(
        (occ) => occ.toLowerCase() === selectedMood.toLowerCase()
      )
    ) {
      return false;
    }
    // Color filter
    if (selectedColor !== "All" && item.color !== selectedColor) {
      return false;
    }
    return true;
  });

  const renderItemCard = ({ item, index }: { item: any; index: number }) => (
    <Animated.View
      entering={FadeIn.delay(index * 50).springify()}
      style={styles.itemContainer}
    >
      <ItemCard
        item={item}
        onPress={() => {
          console.log("Item pressed:", item.name);
        }}
        showTags={true}
      />
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {/* Scrollable Filter Dropdowns */}
      <View style={styles.filtersContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollableFilters}
        >
          <FilterDropdown
            label="Type"
            options={filterOptions.types}
            selectedValue={selectedType}
            onSelect={setSelectedType}
          />
          <FilterDropdown
            label="Style"
            options={filterOptions.styles}
            selectedValue={selectedStyle}
            onSelect={setSelectedStyle}
          />
          <FilterDropdown
            label="Mood"
            options={filterOptions.moods}
            selectedValue={selectedMood}
            onSelect={setSelectedMood}
          />
          <FilterDropdown
            label="Color"
            options={filterOptions.colors}
            selectedValue={selectedColor}
            onSelect={setSelectedColor}
          />
        </ScrollView>
      </View>

      {/* Items Grid */}
      <FlatList
        data={filteredItems}
        renderItem={renderItemCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filtersContainer: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
  scrollableFilters: {
    paddingHorizontal: 0,
    gap: Spacing.sm,
    flexDirection: "row",
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing.sm,
    gap: Spacing.sm,
  },
  gridContainer: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  row: {
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
    marginBottom: Spacing.lg,
    marginHorizontal: Spacing.xs,
  },
});
