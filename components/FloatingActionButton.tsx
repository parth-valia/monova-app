import { Colors, Spacing } from "@/constants/theme";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from "react-native-reanimated";

import { createShadowStyle } from "@/utils/shadow";
import React from "react";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function FloatingActionButton() {
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotate: `${rotation.value}deg` }],
  }));

  const handlePress = () => {
    // Bouncy ripple effect
    scale.value = withSequence(
      withSpring(0.9, { damping: 15, stiffness: 400 }),
      withSpring(1.1, { damping: 15, stiffness: 400 }),
      withSpring(1, { damping: 15, stiffness: 400 })
    );

    // Sparkle rotation effect
    rotation.value = withSequence(
      withSpring(-10, { damping: 15, stiffness: 400 }),
      withSpring(10, { damping: 15, stiffness: 400 }),
      withSpring(0, { damping: 15, stiffness: 400 })
    );

    console.log("FAB pressed - Add new item");
  };

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    if (scale.value < 1) {
      scale.value = withSpring(1, { damping: 15, stiffness: 300 });
    }
  };

  return (
    <AnimatedPressable
      style={[
        styles.fab,
        {
          backgroundColor: Colors.backgroundSecondary,
        },
        animatedStyle,
      ]}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel="Add new item"
      accessibilityHint="Tap to add a new wardrobe item"
    >
      <Animated.Text
        style={[styles.fabIcon, { color: Colors.backgroundSecondary }]}
      >
        ✨
      </Animated.Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 30, // Above tab bar
    right: Spacing.xl,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    ...createShadowStyle("#000", { width: 0, height: 4 }, 0.3, 8, 8),
  },
  fabIcon: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});
