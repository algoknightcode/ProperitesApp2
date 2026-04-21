// components/SimilarProperties/index.tsx

import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {styles} from './similarUI'

const properties = [
  {
    id: 1,
    title: "Fab Luxe Residences",
    price: "₹ 3 Cr* Onwards",
    image: require("@/assets/images/b1.webp"),
    location: "Sector 4, Noida Extension, Uttar Pradesh",
    builder: "One Global / Forbes",
    details: "3 BHK-1935 sq.ft, 4 BHK-2394 sq.ft",
    rera: "Coming soon",
  },

  {
    id: 2,
    title: "Dasnac Place 93",
    price: "Price on Request",
    image: require("@/assets/images/b2.webp"),
    location: "Sector 93B, Noida, Uttar Pradesh",
    builder: "Dasnac",
    details: "Shop-775 sq.ft",
    rera: "UPRERAPRJ518502/05/2024",
  },

  {
    id: 3,
    title: "Eldeco 7 Peaks Residences",
    price: "₹ 2.1 Cr* Onwards",
    image: require("@/assets/images/b3.webp"),
    location: "Sector Omicron 1A, Greater Noida, Uttar Pradesh",
    builder: "Eldeco",
    details: "2 BHK, 3 BHK, 4 BHK",
    rera: "UPRERAPRJ106523/01/2026",
  },

];

export default function SimilarProperties() {
  return (
    <View className={styles.container}>
      <Text className={styles.heading}>Similar Properties</Text>
      <Text className={styles.subHeading}>
        Curated especially for you
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        {properties.map((item) => (
          <TouchableOpacity key={item.id} className={styles.card}>
            
            {/* Image */}
            <View className={styles.imageWrap}>
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />

              {/* Heart */}
              <Ionicons
                name="heart-outline"
                size={30}
                color="white"
                style={{ position: "absolute", top: 10, right: 10 }}
              />

              {/* Price */}
              <View className={styles.priceBox}>
                <Text className={styles.priceText}>
                  {item.price}
                </Text>
              </View>
            </View>

            {/* Title */}
            <Text numberOfLines={1} className={styles.title}>
              {item.title}
            </Text>

          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}