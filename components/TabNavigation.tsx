import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { FilterChip } from './FilterChip';
import { router } from 'expo-router';

interface TabNavigationProps {
  activeTab: string;
}

export function TabNavigation({ activeTab }: TabNavigationProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const handleTabPress = (tab: string) => {
    switch (tab) {
      case 'Collections':
        router.push('/(tabs)/');
        break;
      case 'Outfits':
        router.push('/(tabs)/outfits');
        break;
      case 'Items':
        router.push('/(tabs)/items');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabScroll}
      >
        {['Collections', 'Outfits', 'Items'].map((tab) => (
          <FilterChip
            key={tab}
            label={tab}
            isActive={tab === activeTab}
            onPress={() => handleTabPress(tab)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  tabScroll: {
    paddingHorizontal: Spacing.lg,
  },
});
