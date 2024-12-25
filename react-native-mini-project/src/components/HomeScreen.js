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
        onPress={() => navigation.navigate("Products", { item })}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productName}>More ....</Text>
      </TouchableOpacity>
    );
  });

  return <View>{product}</View>;
};

export default HomeScreen;

const styles = StyleSheet.create({
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
