import { BorderRadius, Colors, Spacing, Typography } from "@/constants/theme";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { IconSymbol } from "@/components/ui/icon-symbol";
import { createShadowStyle } from "@/utils/shadow";

interface FilterDropdownProps {
  label: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function FilterDropdown({
  label,
  options,
  selectedValue,
  onSelect,
}: FilterDropdownProps) {
  const [isVisible, setIsVisible] = useState(false);
  const scale = useSharedValue(1);
  const isFiltered = selectedValue !== "All";

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
          backgroundColor:
            item === selectedValue ? Colors.chipActive : Colors.background,
          borderBottomColor: Colors.borderLight,
        },
      ]}
      onPress={() => handleSelect(item)}
    >
      <Text
        style={[
          styles.optionText,
          {
            color: item === selectedValue ? Colors.chipTextActive : Colors.text,
          },
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
            backgroundColor: isFiltered
              ? Colors.chipBackground
              : Colors.backgroundSecondary,
            borderColor: Colors.border,
            borderWidth: isFiltered ? 1 : 0.5,
          },
          animatedStyle,
        ]}
        onPress={() => setIsVisible(true)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessibilityRole="button"
        accessibilityLabel={`Filter by ${label}`}
      >
        <Text style={[styles.dropdownText, { color: Colors.chipText }]}>
          {selectedValue === "All" ? label : selectedValue}
        </Text>
        <IconSymbol name="chevron.down" size={14} color={Colors.chipText} />
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
          <View
            style={[
              styles.modalContent,
              { backgroundColor: Colors.background },
            ]}
          >
            <View
              style={[styles.modalHeader, { borderBottomColor: Colors.border }]}
            >
              <Text style={[styles.modalTitle, { color: Colors.text }]}>
                Select {label}
              </Text>
            </View>
            <FlatList
              data={options}
              renderItem={renderOption}
              contentContainerStyle={{ overflow: "hidden" }}
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
    backgroundColor: "#fff",
    borderRadius: BorderRadius.xxl,
    borderWidth: 1.5,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: Spacing.xs,
  },
  dropdownText: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.medium,
    marginRight: Spacing.sm,
    flex: 1,
    textAlign: "left",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.xl,
  },
  modalContent: {
    margin: 20,
    borderRadius: BorderRadius.lg,
    maxHeight: "80%",
    width: "90%",
    maxWidth: 400,
    alignSelf: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    ...createShadowStyle("#000", { width: 0, height: 2 }, 0.2, 16, 8),
  },
  modalHeader: {
    padding: Spacing.md,
    borderBottomWidth: 1,
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  modalTitle: {
    fontSize: Typography.sizes.sm,
    color: "#1A1A1A",
    fontWeight: "500",
    textAlign: "center",
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
