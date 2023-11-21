// Importing necessary dependencies and modules
import { View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";

// Importing data and components
import listingsData from "@/assets/data/airbnb-listings.json";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ExploreHeader from "@/components/ExploreHeader";
import ListingsMap from "@/components/ListingsMap";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";

// Main functional component for the page
const Page = () => {
  // State for managing the selected category
  const [category, setCategory] = useState("Tiny homes");

  // Memoizing the listings data to avoid unnecessary re-rendering
  const items = useMemo(() => listingsData as any, []);

  // Callback function for handling category changes
  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    // Main container with styling
    <View style={{ flex: 1, marginTop: 140 }}>
      {/* Router stack screen with header component */}
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />

      {/* ListingsMap component */}
      <ListingsMap listings={listingsDataGeo} />

      {/* ListingsBottomSheet component */}
      <ListingsBottomSheet listings={items} category={category} />
    </View>
  );
};

// Exporting the Page component
export default Page;
