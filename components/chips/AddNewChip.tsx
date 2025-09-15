import { BorderRadius, Spacing, Typography } from "@/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import React from "react";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface AddNewChipProps {
  colors: any;
}

export function AddNewChip({ colors }: AddNewChipProps) {
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
      onPress={() => console.log("Add new collection")}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel="Add new collection"
    >
      <Text style={[styles.addNewText, { color: colors.textSecondary }]}>
        + Add new
      </Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  addNewChip: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderStyle: "dashed",
    marginRight: Spacing.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  addNewText: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.medium,
  },
});
