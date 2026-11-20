// Importing necessary dependencies and modules
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

// Main layout component using Tabs from expo-router
const Layout = () => {
  return (
    // Configuring common options for all tab screens
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
        },
      }}
    >
      {/* Explore tab screen */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={typeof color === "string" ? color : Colors.grey} size={size} />
          ),
        }}
      />

      {/* Wishlist tab screen */}
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: "Wishlist",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={typeof color === "string" ? color : Colors.grey} size={size} />
          ),
        }}
      />

      {/* Trips tab screen */}
      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="airbnb" color={typeof color === "string" ? color : Colors.grey} size={size} />
          ),
        }}
      />

      {/* Inbox tab screen */}
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-outline"
              color={typeof color === "string" ? color : Colors.grey}
              size={size}
            />
          ),
        }}
      />

      {/* Profile tab screen */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={typeof color === "string" ? color : Colors.grey} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

// Exporting the component
export default Layout;
