import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";

const Page = () => {
  const onDataChanged = (category: string) => {
    console.log("CHANGED_", category);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />

      <Listings />
    </View>
  );
};

export default Page;
