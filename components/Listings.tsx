import { View, Text } from "react-native";
import React, { useEffect } from "react";

interface ListingsProps {
  listings: any[];
  category: string;
}

const Listings = ({ listings, category }: ListingsProps) => {
  useEffect(() => {
    console.log("RELOAD LISTINGS", listings.length);
  }, [category]);

  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;
