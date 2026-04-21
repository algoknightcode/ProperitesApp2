// components/ListingsPage/index.tsx

import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { styles } from "./listingUI";

const propertyData = [
  {
    id: 1,
    title: "Smartworld Residences by...",
    location: "1, 2, 3, 4 BHK Flat in Sector 98, Noida",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    tag: "New Launch",
    status: "Completion in Oct, 2030",
    price1: "₹1.91 Cr",
    price2: "₹4.5 Cr",
    price3: "₹8.84 - 10.4 Cr",
  },

  {
    id: 2,
    title: "Paras Tierea",
    location: "1, 2, 3 BHK Flat in Sector 137, Noida",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80",
    tag: "New Booking",
    status: "Ready To Move",
    price1: "₹82 L",
    price2: "₹1.12 Cr",
    price3: "₹1.65 Cr",
  },

  {
    id: 3,
    title: "Gulshan Vivante",
    location: "2, 3, 4 BHK Flat in Sector 137, Noida",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
    tag: "Luxury",
    status: "Possession Soon",
    price1: "₹1.35 Cr",
    price2: "₹2.10 Cr",
    price3: "₹3.45 Cr",
  },

  {
    id: 4,
    title: "ATS Greens Village",
    location: "2, 3 BHK Flat in Sector 93A, Noida",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    tag: "Premium",
    status: "Ready To Move",
    price1: "₹1.22 Cr",
    price2: "₹1.88 Cr",
    price3: "₹2.45 Cr",
  },

  {
    id: 5,
    title: "Ace Parkway",
    location: "2, 3, 4 BHK Flat in Sector 150, Noida",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    tag: "New Launch",
    status: "Completion in 2028",
    price1: "₹98 L",
    price2: "₹1.55 Cr",
    price3: "₹2.75 Cr",
  },

  {
    id: 6,
    title: "Godrej Woods",
    location: "2, 3, 4 BHK Flat in Sector 43, Noida",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=900&q=80",
    tag: "Forest View",
    status: "Under Construction",
    price1: "₹1.75 Cr",
    price2: "₹2.95 Cr",
    price3: "₹4.40 Cr",
  },

  {
    id: 7,
    title: "Mahagun Moderne",
    location: "2, 3, 4 BHK Flat in Sector 78, Noida",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    tag: "Hot Deal",
    status: "Ready To Move",
    price1: "₹96 L",
    price2: "₹1.45 Cr",
    price3: "₹2.35 Cr",
  },

  {
    id: 8,
    title: "Supertech Capetown",
    location: "2, 3 BHK Flat in Sector 74, Noida",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    tag: "Popular",
    status: "Ready To Move",
    price1: "₹75 L",
    price2: "₹1.18 Cr",
    price3: "₹1.62 Cr",
  },

  {
    id: 9,
    title: "Nimbus Express Park",
    location: "2, 3 BHK Flat in Sector 93, Noida",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
    tag: "Family Choice",
    status: "Ready To Move",
    price1: "₹88 L",
    price2: "₹1.32 Cr",
    price3: "₹1.85 Cr",
  },

  {
    id: 10,
    title: "Jaypee Greens Wish Town",
    location: "2, 3, 4 BHK Flat in Sector 128, Noida",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
    tag: "Township",
    status: "Possession Ready",
    price1: "₹1.05 Cr",
    price2: "₹1.78 Cr",
    price3: "₹3.10 Cr",
  },
];

export default function ListingsPage() {
  return (
    <View className={styles.container}>
      {/* Header */}
      <View className={styles.header}>
        <TouchableOpacity className={styles.circleBtn}>
          <Ionicons name="chevron-back" size={22} color="#111" />
        </TouchableOpacity>

        <View className={styles.searchBox}>
          <TextInput
            placeholder="Search City/Locality/Project"
            placeholderTextColor="#999"
            className="flex-1 text-sm"
          />
          <Feather name="search" size={18} color="#777" />
        </View>

        <TouchableOpacity className={styles.circleBtn}>
          <Ionicons name="heart-outline" size={22} color="#111" />
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-4"
      >
        {["1", "Sort", "Property Type", "Owner", "Buy"].map((item, i) => (
          <TouchableOpacity key={i} className={styles.filterBtn}>
            <Text className={styles.filterText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text className={styles.resultText}>16K RESULTS | Flats in Noida for Sale</Text>

      {/* Cards */}
      {propertyData.map((item) => (
        <View key={item.id} className={styles.card}>
          <Image source={{ uri: item.image }} className={styles.image} />

          <View className={styles.badgeRow}>
            <Text className={styles.badgeDark}>Zero Brokerage</Text>
            <TouchableOpacity className={styles.heartBtn}>
              <Ionicons name="heart-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className={styles.bottomTag}>
            <Text className="text-white text-xs">{item.status}</Text>
          </View>

          <View className="p-4">
            <View className="flex-row justify-between items-center">
              <Text className={styles.title}>{item.title}</Text>
              <Text className={styles.yellowTag}>{item.tag}</Text>
            </View>

            <Text className={styles.location}>{item.location}</Text>

            <View className="flex-row justify-between mt-4">
              <View>
                <Text className={styles.smallText}>1 BHK Apartment</Text>
                <Text className={styles.price}>{item.price1}</Text>
              </View>

              <View>
                <Text className={styles.smallText}>2 BHK Apartment</Text>
                <Text className={styles.price}>{item.price2}</Text>
              </View>

              <View>
                <Text className={styles.smallText}>3 BHK Apartment</Text>
                <Text className={styles.price}>{item.price3}</Text>
              </View>
            </View>

            <Text className={styles.areaPrice}>
              ₹27,000 /sqft onwards (super area)
            </Text>

            <View className="flex-row gap-3 mt-4">
              <TouchableOpacity className={styles.outlineBtn}>
                <Text className={styles.outlineText}>Brochure</Text>
              </TouchableOpacity>

              <TouchableOpacity className={styles.fillBtn}>
                <Text className={styles.fillText}>View Number</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}