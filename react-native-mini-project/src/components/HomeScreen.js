import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import productData from "../apis/productData";

const HomeScreen = () => {
  const navigation = useNavigation();

  const product = productData.map((item) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => navigation.navigate("Products", { name: item.name })}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: 100, height: 100 }}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  });

  return <View>{product}</View>;
};

export default HomeScreen;

const styles = StyleSheet.create({});
