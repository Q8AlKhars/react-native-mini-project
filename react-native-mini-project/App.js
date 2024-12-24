
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/Navigation/HomeNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileNavigation from "./src/Navigation/ProfileNavigation";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeNavigation} />
        <Tab.Screen name="Profile" component={ProfileNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
