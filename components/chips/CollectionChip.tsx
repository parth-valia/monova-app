import { BorderRadius, Spacing, Typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface CollectionChipProps {
  chip: { id: string; name: string; icon: string };
  isSelected: boolean;
  onPress: () => void;
  colors: any;
}

export function CollectionChip({ chip, isSelected, onPress, colors }: CollectionChipProps) {
  const colorScheme = useColorScheme();

  // Get colors for chips - black text and gray border for unselected, transparent orange bg with orange border for selected
  const getChipColors = () => {
    if (isSelected) {
      return {
        background: 'rgba(255, 165, 0, 0.1)', // Light orange background
        border: '#FFA500', // Orange border
        text: '#FF8C00', // Dark orange text
      };
    }
    return {
      background: 'transparent',
      border: colors.border,
      text: colors.text,
    };
  };

  const chipColors = getChipColors();

  return (
    <Pressable
      style={[
        styles.chip,
        {
          backgroundColor: chipColors.background,
          borderColor: isSelected ? chipColors.border : colors.border,
        },
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${chip.name} collection`}
      accessibilityState={{ selected: isSelected }}
    >
      <Text style={styles.chipIcon}>{chip.icon}</Text>
      <Text style={styles.chipText}>{chip.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
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
