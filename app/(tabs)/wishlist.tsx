import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

// Get the height of the device window
const { height } = Dimensions.get("window");

// Wishlist component
const Wishlist = () => {
  return (
    // Container for the Wishlist component
    <View style={styles.container}>
      {/* Image for the "coming soon" message */}
      <Image
        source={require("@/assets/images/coming-soon.png")}
        alt="Coming Soon"
        style={{
          height: 100,
          width: 400,
        }}
      />
    </View>
  );
};

// Styles for the Wishlist component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
});

// Exporting the Wishlist component
export default Wishlist;
