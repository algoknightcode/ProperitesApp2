// components/PropertyTypes/index.tsx

import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./propertyTypesUI";

const propertyTypes = [

  {
    id: 1,
    title: "Residential Apartment",
    count: "16,000+ Properties",
    bg: "#F7F0E1",
    image: require("@/assets/images/b4.webp"),
  },

  {
    id: 2,
    title: "Residential Land",
    count: "3,500+ Properties",
    bg: "#EDF4FB",
    image: require("@/assets/images/b5.jpg"),
  },

];

export default function PropertyTypes() {
  return (
    <View className={styles.container}>
      <Text className={styles.heading}>
        Apartments, Villas and more
      </Text>

      <Text className={styles.subHeading}>in Noida</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        {propertyTypes.map((item) => (
          <TouchableOpacity
            key={item.id}
            className={styles.card}
            style={{ backgroundColor: item.bg }}
          >
            <Text className={styles.title}>
              {item.title}
            </Text>

            <Text className={styles.count}>
              {item.count}
            </Text>

            <Image
              source={item.image}
              style={{ width: "100%", height: 220 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}