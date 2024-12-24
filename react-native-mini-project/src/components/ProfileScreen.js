import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import profileData from "../apis/profileData";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("EditProfileScreen", profileData)}
    >
      <View>
        <Text>name: {profileData.name}</Text>
        <Text>age: {profileData.age}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
