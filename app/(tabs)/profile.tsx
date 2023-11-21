// Importing necessary dependencies and modules
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

// Importing constants and styles
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

// Profile component
const Profile = () => {
  // Auth and user hooks from Clerk
  const { signOut, isSignedIn } = useAuth();
  const { user } = useUser();

  // State for managing user information and editing mode
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
  const [edit, setEdit] = useState(false);

  // Effect to update local state when user changes
  useEffect(() => {
    if (!user) return;

    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.emailAddresses[0].emailAddress);
  }, [user]);

  // Save user information
  const onSaveUser = async () => {
    try {
      if (!firstName || !lastName) return;
      await user?.update({
        firstName,
        lastName,
      });
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setEdit(false);
    }
  };

  // Capture and set user profile image
  const onCaptureImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.75,
      base64: true,
    });

    if (!result.canceled) {
      const base64 = `data:image/png;base64,${result.assets[0].base64}`;
      user?.setProfileImage({
        file: base64,
      });
    }
  };

  return (
    // Main container with SafeAreaView for handling safe area insets
    <SafeAreaView style={defaultStyles.container}>
      {/* Header section */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Profile</Text>
        <Ionicons name="notifications-outline" size={26} />
      </View>

      {/* User profile card section */}
      {user && (
        <View style={styles.card}>
          {/* Avatar with the ability to capture an image */}
          <TouchableOpacity onPress={onCaptureImage}>
            <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
          </TouchableOpacity>

          {/* User information display or edit mode */}
          <View style={{ flexDirection: "row", gap: 6 }}>
            {edit ? (
              <View style={styles.editRow}>
                {/* Editable text input fields for first name and last name */}
                <TextInput
                  placeholder="First name"
                  value={firstName || ""}
                  onChangeText={setFirstName}
                  style={{ ...defaultStyles.inputField, width: 100 }}
                />

                <TextInput
                  placeholder="Last name"
                  value={lastName || ""}
                  onChangeText={setLastName}
                  style={{ ...defaultStyles.inputField, width: 100 }}
                />
                {/* Save button for saving changes */}
                <TouchableOpacity onPress={onSaveUser}>
                  <Ionicons
                    name="checkmark-outline"
                    size={24}
                    color={Colors.dark}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.editRow}>
                {/* Display user's full name and enter edit mode button */}
                <Text style={{ fontFamily: "mon", fontSize: 22 }}>
                  {firstName} {lastName}
                </Text>

                <TouchableOpacity onPress={() => setEdit(true)}>
                  <Ionicons
                    name="create-outline"
                    size={24}
                    color={Colors.dark}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          {/* Display user's email and account creation date */}
          <Text>{email}</Text>
          <Text>
            <Text style={{ fontFamily: "mon-sb" }}>Since:</Text>{" "}
            {user?.createdAt?.toLocaleDateString()}
          </Text>
        </View>
      )}

      {/* Log out or log in button based on authentication status */}
      {isSignedIn && (
        <Button title="Log out" onPress={() => signOut()} color={Colors.dark} />
      )}

      {!isSignedIn && (
        <Link href="/(modals)/login" asChild>
          <Button title="Log in" color={Colors.dark} />
        </Link>
      )}
    </SafeAreaView>
  );
};

// Styles for the Profile component
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  header: {
    fontFamily: "mon-sb",
    fontSize: 24,
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  editRow: {
    height: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});

// Exporting the Profile component
export default Profile;
