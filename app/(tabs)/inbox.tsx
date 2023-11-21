// Importing necessary dependencies and modules
import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

// Extracting the height from the device window dimensions
const { height } = Dimensions.get("window");

// Inbox component displaying a placeholder image for "Coming Soon"
const Inbox = () => {
  return (
    // Main container with styling
    <View style={styles.container}>
      {/* Image component displaying the "Coming Soon" image */}
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

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height, // Setting the container height to the device window height
    justifyContent: "center",
    alignItems: "center",
  },
});

// Exporting the Inbox component
export default Inbox;
