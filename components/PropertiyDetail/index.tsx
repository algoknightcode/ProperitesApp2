// components/PropertyDetail/index.tsx

import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./PropertyDetailsUI";

export default function PropertyDetail() {
  const property = {
    title: "Prestige Shantiniketan",
    price: "₹2.85 Cr",
    location: "ITPL Main Road, Whitefield",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    bedrooms: "3 BHK",
    bathrooms: "3 Baths",
    area: "2,000 sqft",
    description:
      "Luxury apartment with premium interiors, modern design, excellent connectivity and high-end amenities.",
    type: "Apartment",
    age: "1-5 Years",
    facing: "East",
    parking: "2 Covered",
    amenities: [
      "Swimming Pool",
      "Gym",
      "Club House",
      "24x7 Security",
    ],
    owner: {
      name: "Rahul Sharma",
      rating: "4.8",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
  };

  return (
    <View className={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO */}
        <View className={styles.imageWrapper}>
          <Image
            source={{ uri: property.image }}
            className={styles.banner}
          />

          <View className={styles.overlay} />

          <TouchableOpacity className={styles.backBtn}>
            <Ionicons
              name="arrow-back"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity className={styles.shareBtn}>
            <Ionicons
              name="share-social"
              size={18}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity className={styles.likeBtn}>
            <Ionicons
              name="heart-outline"
              size={18}
              color="#fff"
            />
          </TouchableOpacity>

          <View className={styles.tagRow}>
            <Text className={styles.blueTag}>
              VERIFIED
            </Text>

            <Text className={styles.greenTag}>
              READY TO MOVE
            </Text>
          </View>

          <View className={styles.floatingCard}>
            <Text className={styles.title}>
              {property.title}
            </Text>

            <Text className={styles.price}>
              {property.price}
            </Text>

            <View className="flex-row items-center mt-2">
              <Ionicons
                name="location"
                size={14}
                color="#cbd5e1"
              />
              <Text className={styles.location}>
                {property.location}
              </Text>
            </View>
          </View>
        </View>

        {/* QUICK STATS */}
        <View className={styles.infoCard}>
          <View className={styles.featureRow}>
            <View className={styles.featureBox}>
              <Ionicons
                name="bed-outline"
                size={20}
                color="#60a5fa"
              />
              <Text className={styles.featureLabel}>
                Bedrooms
              </Text>
              <Text className={styles.featureValue}>
                {property.bedrooms}
              </Text>
            </View>

            <View className={styles.featureBox}>
              <Ionicons
                name="water-outline"
                size={20}
                color="#60a5fa"
              />
              <Text className={styles.featureLabel}>
                Bathrooms
              </Text>
              <Text className={styles.featureValue}>
                {property.bathrooms}
              </Text>
            </View>

            <View className={styles.featureBox}>
              <Ionicons
                name="resize-outline"
                size={20}
                color="#60a5fa"
              />
              <Text className={styles.featureLabel}>
                Area
              </Text>
              <Text className={styles.featureValue}>
                {property.area}
              </Text>
            </View>
          </View>
        </View>

        {/* OVERVIEW */}
        <View className={styles.section}>
          <Text className={styles.sectionTitle}>
            Property Overview
          </Text>

          <Text className={styles.desc}>
            {property.description}
          </Text>

          <View className={styles.grid}>
            <View className={styles.gridItem}>
              <Text className={styles.gridLabel}>
                Type
              </Text>
              <Text className={styles.gridValue}>
                {property.type}
              </Text>
            </View>

            <View className={styles.gridItem}>
              <Text className={styles.gridLabel}>
                Age
              </Text>
              <Text className={styles.gridValue}>
                {property.age}
              </Text>
            </View>

            <View className={styles.gridItem}>
              <Text className={styles.gridLabel}>
                Facing
              </Text>
              <Text className={styles.gridValue}>
                {property.facing}
              </Text>
            </View>

            <View className={styles.gridItem}>
              <Text className={styles.gridLabel}>
                Parking
              </Text>
              <Text className={styles.gridValue}>
                {property.parking}
              </Text>
            </View>
          </View>
        </View>

        {/* AMENITIES */}
        <View className={styles.section}>
          <Text className={styles.sectionTitle}>
            Top Amenities
          </Text>

          <View className={styles.amenityRow}>
            {property.amenities.map((item, i) => (
              <View
                key={i}
                className={styles.amenityBox}
              >
                <Text className={styles.amenityText}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* AGENT */}
        <View className={styles.section}>
          <Text className={styles.sectionTitle}>
            Contact Details
          </Text>

          <View className={styles.contactRow}>
            <Image
              source={{ uri: property.owner.image }}
              className={styles.avatar}
            />

            <View className="flex-1">
              <Text className={styles.owner}>
                {property.owner.name}
              </Text>

              <Text className={styles.ownerSub}>
                ⭐ {property.owner.rating} Rating
              </Text>
            </View>

            <TouchableOpacity
              className={styles.chatBtn}
            >
              <Text className={styles.chatText}>
                Chat
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="h-28" />
      </ScrollView>

      {/* BOTTOM CTA */}
      <View className={styles.bottomBar}>
        <TouchableOpacity className={styles.iconBtn}>
          <Ionicons
            name="call"
            size={20}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity className={styles.iconBtn}>
          <Ionicons
            name="logo-whatsapp"
            size={20}
            color="#22c55e"
          />
        </TouchableOpacity>

        <TouchableOpacity className={styles.visitBtn}>
          <Text className={styles.visitText}>
            Book Site Visit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}