import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import profileData from "../apis/profileData";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>name: {profileData.name}</Text>
        <Text style={styles.profileText}>age: {profileData.age}</Text>
        <Text style={styles.profileText}>married: {profileData.married?"yes":"no"}</Text>
      </View>
      <Button 
        title="Edit Profile"
        onPress={() => navigation.navigate("EditProfileScreen", profileData)}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  profileText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
