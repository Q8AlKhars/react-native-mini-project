import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../components/ProfileScreen";


const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
