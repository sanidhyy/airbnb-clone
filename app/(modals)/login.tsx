// Importing necessary dependencies and modules
import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useOAuth } from "@clerk/clerk-expo";

// Custom hook for warming up the browser
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
// Importing styles and colors
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

// Enum for different OAuth strategies
enum Strategy {
  Google = "oauth_google",
  Apple = "oauth_apple",
  Facebook = "oauth_facebook",
  Github = "oauth_github",
}

// Main login component
const Login = () => {
  // Using the custom browser warm-up hook
  useWarmUpBrowser();

  // Hook for navigation
  const router = useRouter();

  // OAuth hooks for different strategies
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: githubAuth } = useOAuth({ strategy: "oauth_github" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });

  // Function to handle OAuth flow based on selected strategy
  const onSelectAuth = async (strategy: Strategy) => {
    // Map the selected strategy to the corresponding OAuth hook
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
      [Strategy.Facebook]: facebookAuth,
      [Strategy.Github]: githubAuth,
    }[strategy];

    try {
      // Start OAuth flow and get session information
      const { createdSessionId, setActive } = await selectedAuth();

      // If a session is created, set it as active and navigate to the main page
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.push("/(tabs)/");
      }
    } catch (error: unknown) {
      // Log any errors that occur during the OAuth flow
      console.log(`OAuth: ${error}`);
    }
  };

  // Rendering the UI
  return (
    <View style={styles.container}>
      {/* Email input field */}
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />

      {/* Continue button */}
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      {/* Separator line with 'or' text */}
      <View style={styles.separatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.separator}>or</Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>

      {/* OAuth login options */}
      <View style={{ gap: 20 }}>
        {/* Apple login */}
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Apple)}
        >
          <Ionicons
            name="md-logo-apple"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>

        {/* Google login */}
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Google)}
        >
          <Ionicons
            name="md-logo-google"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Github login */}
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Github)}
        >
          <Ionicons
            name="md-logo-github"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Continue with Github</Text>
        </TouchableOpacity>

        {/* Facebook login */}
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Facebook)}
        >
          <Ionicons
            name="md-logo-facebook"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  // Styles for the separator line and 'or' text
  separatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  separator: {
    fontFamily: "mon-sb",
    color: Colors.grey,
  },
  // Styles for the outlined button
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  // Styles for the text inside the outlined button
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "mon-sb",
  },
});

// Exporting the component
export default Login;
