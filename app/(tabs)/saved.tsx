import { BorderRadius, Colors, Spacing, Typography } from "@/constants/theme";
import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { FloatingActionButton } from "@/components/FloatingActionButton";
import { TabButton } from "@/components/TabButton";
import { CollectionsTab } from "@/components/tabs/CollectionsTab";
import { ItemsTab } from "@/components/tabs/ItemsTab";
import { OutfitsTab } from "@/components/tabs/OutfitsTab";

type TabType = "Collections" | "Outfits" | "Items";

export default function SavedScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("Collections");

  // Shared value for slide animation
  const slideX = useSharedValue(0);
  const screenWidth = Dimensions.get("window").width;
  const tabContainerWidth = screenWidth - Spacing.xl * 2;
  const tabWidth = (tabContainerWidth - 10) / 3;

  const handleTabPress = (tab: TabType, index: number) => {
    setActiveTab(tab);
    const slidePosition = index * tabWidth;
    slideX.value = withTiming(slidePosition, {
      duration: 300,
      easing: Easing.out(Easing.ease),
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Collections":
        return <CollectionsTab />;
      case "Outfits":
        return <OutfitsTab />;
      case "Items":
        return <ItemsTab />;
      default:
        return <CollectionsTab />;
    }
  };

  // Animated style for the sliding indicator
  const slideIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: slideX.value }],
  }));

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: Colors.background }]}
    >
      <StatusBar barStyle={"dark-content"} />

      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: Colors.text }]}>Saved</Text>
        </View>

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <Animated.View
            style={[
              styles.slideIndicator,
              { backgroundColor: Colors.backgroundSecondary },
              slideIndicatorStyle,
            ]}
          />
          {(["Collections", "Outfits", "Items"] as TabType[]).map(
            (tab, index) => (
              <TabButton
                key={tab}
                title={tab}
                isActive={activeTab === tab}
                onPress={() => handleTabPress(tab, index)}
              />
            )
          )}
        </View>

        {/* Tab Content */}
        <View style={styles.content}>{renderTabContent()}</View>
      </ScrollView>

      {/* Floating Action Button */}
      <FloatingActionButton />
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
  tabContainer: {
    flexDirection: "row",
    position: "relative",
    borderRadius: BorderRadius.full,
    borderColor: Colors.border,
    borderWidth: 0.5,
    marginHorizontal: Spacing.xl,
    padding: 5,
    marginBottom: Spacing.xs,
    marginTop: Spacing.md,
  },
  slideIndicator: {
    position: "absolute",
    top: 5,
    bottom: 5,
    left: 5,
    width: `${100 / 3}%`,
    borderRadius: BorderRadius.xl,
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Colors.border,
  },
  content: {
    flex: 1,
    paddingTop: Spacing.lg,
  },
});
