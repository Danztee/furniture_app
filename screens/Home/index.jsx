import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import Welcome from "../../components/Home/Welcome";
import Carousel from "../../components/Home/Carousel";
import Headings from "../../components/Home/Headings";
import ProductRow from "../../components/Products/ProductRow";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Ilorin, Nigeria</Text>

          {/*  */}
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>

            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*  */}
      <ScrollView style={{ marginHorizontal: 12 }}>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
