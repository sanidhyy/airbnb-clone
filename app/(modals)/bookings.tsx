// Importing necessary components and libraries
import { View, Text, Image } from "react-native";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import { useRouter } from "expo-router";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";

// Importing styles and data
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { places } from "@/assets/data/places";

// Creating an Animated version of TouchableOpacity
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

// Define guest groups with initial counts
const guestsGroups = [
  {
    name: "Adults",
    text: "Ages 13 or above",
    count: 0,
  },
  {
    name: "Children",
    text: "Ages 2-12",
    count: 0,
  },
  {
    name: "Infants",
    text: "Under 2",
    count: 0,
  },
  {
    name: "Pets",
    text: "Pets allowed",
    count: 0,
  },
];

// Main component for handling bookings
const Bookings = () => {
  // Hook for navigation
  const router = useRouter();

  // State for managing card visibility, selected place, and guest groups
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);
  const [groups, setGroups] = useState(guestsGroups);

  // Get current date and set max date for datepicker
  const today = new Date();
  const todayISO = new Date().toISOString().split("T")[0];
  const maxDate = new Date(today.setMonth(today.getMonth() + 1));
  const maxDateISO = maxDate.toISOString().split("T")[0];

  // Function to clear all selections
  const onClearAll = () => {
    setSelectedPlace(0);
    setOpenCard(0);
    setGroups(guestsGroups);
  };

  return (
    // Main container with blur effect
    <BlurView intensity={70} style={styles.container} tint="light">
      {/* 'Where' Card */}
      <View style={styles.card}>
        {openCard !== 0 && (
          // Animated preview for 'Where' card
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(0)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Where</Text>
            <Text style={styles.previewDate}>I'm flexible</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard === 0 && (
          // 'Where' card content when expanded
          <>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              Where to?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              {/* Search input and list of places */}
              <View style={styles.searchSection}>
                <Ionicons
                  name="ios-search"
                  size={20}
                  color="black"
                  style={styles.searchIcon}
                />
                <TextInput
                  style={styles.inputField}
                  placeholder="Search destination"
                  placeholderTextColor={Colors.grey}
                />
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 25 }}
              >
                {/* Displaying places to select */}
                {places.map((place, i) => (
                  <TouchableOpacity key={i} onPress={() => setSelectedPlace(i)}>
                    <Image
                      source={place.img}
                      style={
                        selectedPlace === i
                          ? styles.placeSelected
                          : styles.place
                      }
                    />
                    <Text
                      style={{
                        fontFamily: selectedPlace === i ? "mon-sb" : "mon",
                        paddingTop: 6,
                      }}
                    >
                      {place.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </Animated.View>
          </>
        )}
      </View>

      {/* 'When' Card */}
      <View style={styles.card}>
        {openCard !== 1 && (
          // Animated preview for 'When' card
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(1)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>When</Text>
            <Text style={styles.previewDate}>Any week</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard === 1 && (
          // 'When' card content when expanded
          <>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              When's your trip?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              {/* Datepicker for selecting trip dates */}
              <DatePicker
                current={todayISO}
                selected={todayISO}
                minimumDate={todayISO}
                maximumDate={maxDateISO}
                mode="calendar"
                options={{
                  defaultFont: "mon",
                  headerFont: "mon-sb",
                  borderColor: "transparent",
                  mainColor: Colors.primary,
                }}
              />
            </Animated.View>
          </>
        )}
      </View>

      {/* 'Who' Card */}
      <View style={styles.card}>
        {openCard !== 2 && (
          // Animated preview for 'Who' card
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(2)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Who</Text>
            <Text style={styles.previewDate}>Add guests</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard === 2 && (
          // 'Who' card content when expanded
          <>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              Who's coming?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              {/* Displaying guest groups and allowing quantity adjustments */}
              {groups.map((group, i) => (
                <View
                  key={i}
                  style={[
                    styles.guestItem,
                    i + 1 < groups.length ? styles.itemBorder : null,
                  ]}
                >
                  <View>
                    <Text style={{ fontFamily: "mon-sb", fontSize: 14 }}>
                      {group.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "mon",
                        fontSize: 14,
                        color: Colors.grey,
                      }}
                    >
                      {group.text}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Buttons to adjust guest quantity */}
                    <TouchableOpacity
                      onPress={() => {
                        const newGroups = [...groups];
                        newGroups[i].count--;
                        setGroups(newGroups);
                      }}
                      disabled={groups[i].count === 0}
                      aria-disabled={groups[i].count === 0}
                    >
                      <Ionicons
                        name="remove-circle-outline"
                        size={26}
                        color={groups[i].count > 0 ? Colors.grey : "#CDCDCD"}
                      />
                    </TouchableOpacity>

                    <Text
                      style={{
                        fontFamily: "mon",
                        fontSize: 16,
                        minWidth: 18,
                        textAlign: "center",
                      }}
                    >
                      {group.count}
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        const newGroups = [...groups];
                        newGroups[i].count++;
                        setGroups(newGroups);
                      }}
                    >
                      <Ionicons
                        name="add-circle-outline"
                        size={26}
                        color={Colors.grey}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </Animated.View>
          </>
        )}
      </View>

      {/* Footer */}
      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Clear all button */}
          <TouchableOpacity
            onPress={onClearAll}
            style={{ justifyContent: "center" }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "mon-sb",
                textDecorationLine: "underline",
              }}
            >
              Clear all
            </Text>
          </TouchableOpacity>

          {/* Search button */}
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ ...defaultStyles.btn, paddingRight: 20, paddingLeft: 50 }}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color="white"
              style={defaultStyles.btnIcon}
            />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    gap: 20,
  },
  // Styles for card preview text
  previewText: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.grey,
  },
  // Styles for card preview date
  previewDate: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.dark,
  },
  // Styles for card preview container
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  // Styles for card header text
  cardHeader: {
    fontFamily: "mon-b",
    fontSize: 24,
    padding: 20,
  },
  // Styles for card body container
  cardBody: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  // Styles for search input section
  searchSection: {
    height: 50,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    backgroundColor: "#fff",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  // Styles for input field
  inputField: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  // Styles for search icon
  searchIcon: {
    padding: 10,
  },
  // Styles for selected place image
  placeSelected: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.grey,
  },
  // Styles for place image
  place: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  // Styles for guest item container
  guestItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  // Styles for item border
  itemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.grey,
  },
});

// Exporting the component
export default Bookings;
