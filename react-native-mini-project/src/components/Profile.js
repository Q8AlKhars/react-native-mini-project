import { Text, View } from "react-native";
import React from "react";

const Profile = ({ route }) => {
  const { name } = route.params;
  return (
    <View>
      <Text>Profile</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default Profile;
