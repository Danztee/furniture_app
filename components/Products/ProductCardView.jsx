import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./ProductCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg?w=1380&t=st=1692181357~exp=1692181957~hmac=9847698e2e43a146e6da11287a775bce9a95e0c018ff8b6f48ba131860adcac8",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.price}>&#8358; 12938</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={35} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
