import { Colors, Typography } from "@/constants/theme";
import { HapticTab } from "@/components/haptic-tab";
import { Icon } from "@/components/ui/icon";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const colors = Colors;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.orange,
tabBarInactiveTintColor: Colors.tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          paddingTop: 8,
          height: 88,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: Typography.weights.medium,
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon
              name="bookmark-outline"
              type="material"
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
