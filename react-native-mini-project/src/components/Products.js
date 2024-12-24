import { Text, View } from "react-native";
import React from "react";

const Products = ({ route }) => {
  const { name } = route.params;
  return (
    <View>
      <Text>Products</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default Products;
