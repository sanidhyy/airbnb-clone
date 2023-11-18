import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Link href="/(modals)/login">Login</Link>
      <Link href="/(modals)/bookings">Bookings</Link>
      <Link href="/listing/abcd">Listing details</Link>
    </View>
  );
};

export default Page;
