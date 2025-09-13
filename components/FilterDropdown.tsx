import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, FlatList } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors, Spacing, BorderRadius, Typography, TouchTargets } from '@/constants/theme';
import { Accessibility } from '@/constants/accessibility';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { createShadowStyle } from '@/utils/shadow';

interface FilterDropdownProps {
  label: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function FilterDropdown({ label, options, selectedValue, onSelect }: FilterDropdownProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [isVisible, setIsVisible] = useState(false);
  const scale = useSharedValue(1);
  const isFiltered = selectedValue !== 'All';

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.98, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsVisible(false);
  };

  const renderOption = ({ item }: { item: string }) => (
    <Pressable
      style={[
        styles.option,
        { 
          backgroundColor: item === selectedValue ? colors.chipActive : colors.background,
          borderBottomColor: colors.borderLight,
        }
      ]}
      onPress={() => handleSelect(item)}
    >
      <Text 
        style={[
          styles.optionText, 
          { color: item === selectedValue ? colors.chipTextActive : colors.text }
        ]}
      >
        {item}
      </Text>
    </Pressable>
  );

  return (
    <>
      <AnimatedPressable
        style={[
          styles.dropdown,
          {
            backgroundColor: isFiltered ? 'rgba(255, 107, 53, 0.1)' : colors.backgroundSecondary,
            borderColor: isFiltered ? '#FF6B35' : colors.border,
          },
          animatedStyle
        ]}
        onPress={() => setIsVisible(true)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessibilityRole="button"
        accessibilityLabel={`Filter by ${label}`}
      >
        <Text style={[styles.dropdownText, { color: isFiltered ? '#FF6B35' : colors.chipText }]}>
          {selectedValue === 'All' ? label : selectedValue}
        </Text>
        <IconSymbol
          name="chevron.down"
          size={14}
          color={isFiltered ? '#FF6B35' : colors.chipText}
        />
      </AnimatedPressable>

      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <Pressable 
          style={styles.modalOverlay}
          onPress={() => setIsVisible(false)}
        >
          <View style={[styles.modalContent, { backgroundColor: colors.background }]}>
            <View style={[styles.modalHeader, { borderBottomColor: colors.border }]}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                Select {label}
              </Text>
            </View>
            <FlatList
              data={options}
              renderItem={renderOption}
              keyExtractor={(item) => item}
              style={styles.optionsList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: BorderRadius.xxl,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: TouchTargets.small,
    minWidth: 120,
    marginRight: Spacing.sm,
    ...createShadowStyle('#000', { width: 0, height: 1 }, 0.05, 1, 1),
  },
  dropdownText: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.medium,
    marginRight: Spacing.sm,
    flex: 1,
    textAlign: 'left',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  modalContent: {
    borderRadius: BorderRadius.lg,
    maxHeight: '70%',
    width: '100%',
    maxWidth: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  modalHeader: {
    padding: Spacing.lg,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semibold,
    textAlign: 'center',
  },
  optionsList: {
    maxHeight: 300,
  },
  option: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.medium,
  },
});
