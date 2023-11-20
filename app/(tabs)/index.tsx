import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";

import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import ListingsMap from "@/components/ListingsMap";

import listingsData from "@/assets/data/airbnb-listings.json";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 140 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />

      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={listingsDataGeo} />
    </View>
  );
};

export default Page;
