import { BorderRadius, Spacing, Typography } from "@/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";

interface CollectionChipProps {
  chip: { id: string; name: string; icon: string };
  isSelected: boolean;
  onPress: () => void;
  colors: any;
}

export function CollectionChip({
  chip,
  isSelected,
  onPress,
  colors,
}: CollectionChipProps) {
  return (
    <Pressable
      style={[
        styles.chip,
        {
          backgroundColor: isSelected ? colors.chipBackground : "transparent",
          borderColor: colors.border,
          borderWidth: isSelected ? 1 : 0.5,
        },
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${chip.name} collection`}
      accessibilityState={{ selected: isSelected }}
    >
      <Text style={styles.chipIcon}>{chip.icon}</Text>
      <Text style={[styles.chipText, { color: colors.text }]}>{chip.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xxl,
    marginRight: Spacing.sm,
    borderWidth: 1,
  },
  chipIcon: {
    fontSize: Typography.sizes.md,
    marginRight: Spacing.xs,
  },
  chipText: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.medium,
  },
});
