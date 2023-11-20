import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const Inbox = () => {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Inbox;
