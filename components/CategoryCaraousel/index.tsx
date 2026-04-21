// components/CategoryCarousel/index.tsx

import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import {styles} from './categoryUI'
const categories = [
  {
    id: 1,
    title: "Buy",
    icon: <Ionicons name="home" size={22} color="#2563eb" />,
  },
  {
    id: 2,
    title: "Rent",
    icon: <Ionicons name="key" size={22} color="#2563eb" />,
  },
  {
    id: 3,
    title: "99shorts",
    icon: <MaterialIcons name="apartment" size={22} color="#2563eb" />,
  },
  {
    id: 4,
    title: "Insights",
    icon: <Ionicons name="bulb" size={22} color="#2563eb" />,
  },
  {
    id: 5,
    title: "Plot / Land",
    icon: <FontAwesome5 name="map-marked-alt" size={18} color="#2563eb" />,
  },
];

export default function CategoryCarousel() {
  return (
    <View className={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8 }}
      >
        {categories.map((item) => (
          <TouchableOpacity key={item.id} className={styles.card}>
            <View className={styles.iconBox}>{item.icon}</View>
            <Text className={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}