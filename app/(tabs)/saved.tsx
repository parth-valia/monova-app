import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { CollectionsTab } from '@/components/tabs/CollectionsTab';
import { OutfitsTab } from '@/components/tabs/OutfitsTab';
import { ItemsTab } from '@/components/tabs/ItemsTab';
import { FloatingActionButton } from '@/components/FloatingActionButton';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type TabType = 'Collections' | 'Outfits' | 'Items';

export default function SavedScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [activeTab, setActiveTab] = useState<TabType>('Collections');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Collections':
        return <CollectionsTab />;
      case 'Outfits':
        return <OutfitsTab />;
      case 'Items':
        return <ItemsTab />;
      default:
        return <CollectionsTab />;
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Saved</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {(['Collections', 'Outfits', 'Items'] as TabType[]).map((tab) => (
          <TabButton
            key={tab}
            title={tab}
            isActive={activeTab === tab}
            onPress={() => setActiveTab(tab)}
            colors={colors}
          />
        ))}
      </View>

      {/* Tab Content */}
      <View style={styles.content}>
        {renderTabContent()}
      </View>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </SafeAreaView>
  );
}

interface TabButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
  colors: any;
}

function TabButton({ title, isActive, onPress, colors }: TabButtonProps) {
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
        styles.tabButton,
        {
          backgroundColor: isActive ? colors.backgroundSecondary : 'transparent',
        },
        animatedStyle,
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={`${title} tab`}
      accessibilityState={{ selected: isActive }}
    >
      <Text
        style={[
          styles.tabButtonText,
          {
            color: isActive ? colors.text : colors.textSecondary,
            fontWeight: isActive ? Typography.weights.semibold : Typography.weights.normal,
          },
        ]}
      >
        {title}
      </Text>
    </AnimatedPressable>
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
    flexDirection: 'row',
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.lg,
    backgroundColor: '#F8F8F8',
    borderRadius: BorderRadius.xxl,
    marginHorizontal: Spacing.xl,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44, // Accessibility requirement
  },
  tabButtonText: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.medium,
  },
  content: {
    flex: 1,
    paddingTop: Spacing.lg,
  },
});
