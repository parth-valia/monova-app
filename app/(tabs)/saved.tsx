import { FloatingActionButton } from '@/components/FloatingActionButton';
import { TabButton } from '@/components/TabButton';
import { CollectionsTab } from '@/components/tabs/CollectionsTab';
import { ItemsTab } from '@/components/tabs/ItemsTab';
import { OutfitsTab } from '@/components/tabs/OutfitsTab';
import { BorderRadius, Colors, Spacing, Typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

type TabType = 'Collections' | 'Outfits' | 'Items';

export default function SavedScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [activeTab, setActiveTab] = useState<TabType>('Collections');
  
  // Shared value for slide animation
  const slideX = useSharedValue(0);
  const screenWidth = Dimensions.get('window').width;
  const tabContainerWidth = screenWidth - (Spacing.xl * 2); 
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

  // Animated style for the sliding indicator
  const slideIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: slideX.value }],
  }));

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Saved</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <Animated.View 
          style={[
            styles.slideIndicator, 
            { backgroundColor: colors.backgroundSecondary },
            slideIndicatorStyle
          ]} 
        />
        {(['Collections', 'Outfits', 'Items'] as TabType[]).map((tab, index) => (
          <TabButton
            key={tab}
            title={tab}
            isActive={activeTab === tab}
            onPress={() => handleTabPress(tab, index)}
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
    position: 'relative',
    borderRadius: BorderRadius.full,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginHorizontal: Spacing.xl,
    padding: 5,
    marginBottom: Spacing.xs,
    marginTop: Spacing.md,
  },
  slideIndicator: {
    position: 'absolute',
    top: 5,
    bottom: 5,
    left: 5,
    width: `${100/3}%`,
    borderRadius: BorderRadius.xl,
    zIndex: 0,
  },
  content: {
    flex: 1,
    paddingTop: Spacing.lg,
  },
});
