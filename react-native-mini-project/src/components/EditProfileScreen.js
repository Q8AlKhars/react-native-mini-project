import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import React from "react";
import { useState } from "react";

const EditProfileScreen = ({ route }) => {
  const [name, setName] = useState(route.params.name);
  const [age, setAge] = useState(route.params.age);
  const [married, setMarried] = useState(route.params.married);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Name: </Text>
        <TextInput
        style={styles.inputText}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Age: </Text>
        <TextInput
          style={styles.inputText}
          value={age}
        onChangeText={(text) => setAge(text)}
          placeholder="Age"
        />
      </View>
      <View style={styles.marriedContainer}>
        <Text style={styles.marriedText}>Married?: </Text>
        <Switch
          style={styles.inputText}
          value={married}
          onValueChange={() => setMarried(!married)}
          placeholder="Married"
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    height: 40,
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
  },
  inputText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  marriedText: {
    fontSize: 20,
    fontWeight: "bold",
    flexDirection: "row",
  },
  marriedContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
