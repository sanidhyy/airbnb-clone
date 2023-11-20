import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

interface ListingsProps {
  listings: any[];
  category: string;
}

const Listings = ({ listings: items, category }: ListingsProps) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.listing}
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
          <Image source={{ uri: item.medium_url }} style={styles.image} />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 30,
              top: 30,
              backgroundColor: Colors.primary,
              padding: 10,
              borderRadius: 1000,
              opacity: 0.85,
            }}
          >
            <Ionicons name="heart-outline" size={24} color="#fff" />
          </TouchableOpacity>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 13, fontFamily: "mon-sb" }}>
              {item.name.length < 45
                ? item.name
                : item.name.substr(0, 35) + "..."}
            </Text>

            <View style={{ flexDirection: "row", gap: 4 }}>
              <Ionicons name="star" size={16} color={Colors.primary} />
              <Text style={{ fontFamily: "mon-sb", color: Colors.primary }}>
                {(item.review_scores_rating / 20).toFixed(2)}
              </Text>
            </View>
          </View>

          <Text style={{ fontFamily: "mon" }}>{item.room_type}</Text>

          <View style={{ flexDirection: "row", gap: 2 }}>
            <Text style={{ fontFamily: "mon-sb" }}>${item.price}</Text>
            <Text style={{ fontFamily: "mon-sb" }}>/</Text>
            <Text style={{ fontFamily: "mon" }}>night</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={!loading ? items : []}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});

export default Listings;
