import { BorderRadius, Colors, Spacing, Typography } from "@/constants/theme";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { IconSymbol } from "@/components/ui/icon-symbol";
import { OutfitCard as OutfitCardType } from "@/data/wardrobeData";
import { createShadowStyle } from "@/utils/shadow";

interface OutfitCardProps {
  outfit: OutfitCardType;
  onPress?: () => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function OutfitCard({ outfit, onPress }: OutfitCardProps) {
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

  const renderOutfitItems = () => {
    const items = Object.values(outfit.items).filter(Boolean);

    if (items.length === 1) {
      return (
        <View style={styles.singleItemContainer}>
          <Image
            source={{ uri: items[0].image }}
            style={styles.fullImage}
            resizeMode="cover"
          />
        </View>
      );
    }

    if (items.length === 2) {
      return (
        <View style={styles.twoItemsContainer}>
          {items.slice(0, 2).map((item, index) => (
            <View key={index} style={styles.halfWidthItem}>
              <Image
                source={{ uri: item.image }}
                style={styles.fullImage}
                resizeMode="cover"
              />
            </View>
          ))}
        </View>
      );
    }

    if (items.length === 3) {
      return (
        <View style={styles.threeItemsContainer}>
          <View style={styles.leftHalfItem}>
            <Image
              source={{ uri: items[0].image }}
              style={styles.fullImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.rightHalfContainer}>
            <View style={styles.rightTopItem}>
              <Image
                source={{ uri: items[1].image }}
                style={styles.fullImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.rightBottomItem}>
              <Image
                source={{ uri: items[2].image }}
                style={styles.fullImage}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.fourItemsContainer}>
        {items.slice(0, 4).map((item, index) => (
          <View key={index} style={styles.quarterItem}>
            <Image
              source={{ uri: item.image }}
              style={styles.fullImage}
              resizeMode="cover"
            />
          </View>
        ))}
      </View>
    );
  };

  return (
    <AnimatedPressable
      style={[
        styles.card,
        { backgroundColor: Colors.backgroundSecondary },
        animatedStyle,
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={`Outfit: ${outfit.title}`}
    >
      <View
        style={[
          styles.outfitPreview,
          { backgroundColor: Colors.backgroundSecondary },
        ]}
      >
        {renderOutfitItems()}

        {/* Save Button - Bottom right corner, bigger size */}
        <Pressable
          style={[styles.saveButton, { backgroundColor: Colors.background }]}
          onPress={() => {
            setIsSaved(!isSaved);
            console.log("Outfit", isSaved ? "unsaved" : "saved");
          }}
        >
          <IconSymbol
            name={isSaved ? "bookmark.fill" : "bookmark"}
            size={20}
            color={isSaved ? Colors.text : Colors.textSecondary}
          />
        </Pressable>
      </View>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.lg,
    overflow: "hidden",
    ...createShadowStyle("#000", { width: 0, height: 1 }, 0.05, 2, 1),
    minHeight:
      Platform.OS === "web"
        ? Dimensions.get("window").width * 0.32
        : Dimensions.get("window").height * 0.32,
    padding: 12,
    borderColor: Colors.border,
    borderWidth: 0.5,
  },
  outfitPreview: {
    flex: 1,
    position: "relative",
    borderRadius: BorderRadius.xl,
  },
  itemsGrid: {
    flex: 1,
    padding: Spacing.sm,
  },
  gridItem: {
    position: "absolute",
    borderRadius: BorderRadius.md,
    overflow: "hidden",
  },
  gridItemImage: {
    width: "100%",
    height: "100%",
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
    flexDirection: "row",
    flexWrap: "wrap",
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
  // Single item layout
  singleItemContainer: {
    flex: 1,
  },
  fullImage: {
    width: "100%",
    height: "100%",
    borderRadius: BorderRadius.lg,
  },

  // Two items layout
  twoItemsContainer: {
    flex: 1,
    flexDirection: "row",
    gap: Spacing.md,
  },
  halfWidthItem: {
    flex: 1,
  },

  // Three items layout
  threeItemsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  leftHalfItem: {
    flex: 1,
    marginRight: 12,
  },
  rightHalfContainer: {
    flex: 1,
  },
  rightTopItem: {
    flex: 1,
    marginBottom: 12,
  },
  rightBottomItem: {
    flex: 1,
    marginTop: 1,
  },

  // Four items layout
  fourItemsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: Spacing.md,
  },
  quarterItem: {
    width: "48%",
    height: "48%",
  },
  saveButton: {
    position: "absolute",
    bottom: Spacing.md,
    right: Spacing.md,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
