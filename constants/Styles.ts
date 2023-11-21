import { StyleSheet } from "react-native";

// Importing the Colors object from the Colors module
import Colors from "@/constants/Colors";

// Creating default styles using React Native StyleSheet
export const defaultStyles = StyleSheet.create({
  // Container style for a flex container with a light blue background
  container: {
    flex: 1,
    backgroundColor: "#FDFFFF",
  },

  // Input field style with a height, border, border radius, padding, and white background
  inputField: {
    height: 44,
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },

  // Button style with a primary color background, height, border radius, and center alignment
  btn: {
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  // Text style for button text with white color, font size, and specified font family
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "mon-b",
  },

  // Icon style for a button with absolute positioning to the left
  btnIcon: {
    position: "absolute",
    left: 16,
  },

  // Footer style for a positioned absolute at the bottom with a light background,
  // padding, and border at the top with a grey color
  footer: {
    position: "absolute",
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: Colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});
