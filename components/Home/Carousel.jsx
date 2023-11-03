import React from "react";
import { View, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS, SIZES } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://img.freepik.com/free-psd/two-seater-gray-sofa-with-two-cushions-isolated_176382-98.jpg?w=1480&t=st=1692181292~exp=1692181892~hmac=d20368f143f871a92f3292a8d119fa718716f4eed824d9e09568a9ba08ff931c",
    "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg?w=1380&t=st=1692181357~exp=1692181957~hmac=9847698e2e43a146e6da11287a775bce9a95e0c018ff8b6f48ba131860adcac8",
    "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?w=1380&t=st=1692181396~exp=1692181996~hmac=6b88eb9b83f7d2fef59ba3444787d57b576b47bb53b5541817a68dd87fc1d96e",
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.primary}
        ImageComponentStyle={{ borderRadius: 15, width: "93%", marginTop: 15 }}
        autoplay
        circeLoop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Carousel;
