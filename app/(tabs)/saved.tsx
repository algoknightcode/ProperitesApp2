// app/(tabs)/saved.tsx

import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const savedData = [
  {
    id: 1,
    title: "3 BHK Luxury Apartment",
    location: "Sector 150, Noida",
    price: "₹1.45 Cr",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
  {
    id: 2,
    title: "2 BHK Ready To Move",
    location: "Sector 137, Noida",
    price: "₹82 Lakh",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
  },
  {
    id: 3,
    title: "Villa with Garden",
    location: "Greater Noida West",
    price: "₹2.8 Cr",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
  },
];

export default function SavedScreen() {
  return (
    <ScrollView
      className="flex-1 bg-slate-50"
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}
      <View className="bg-white pt-16 pb-5 px-4 border-b border-slate-100">

        <View className="flex-row justify-between items-center">

          <View>
            <Text className="text-3xl font-bold text-slate-900">
              Shortlist
            </Text>

            <Text className="text-slate-500 mt-1">
              Your favourite saved properties
            </Text>
          </View>

          <View className="h-12 w-12 rounded-2xl bg-blue-50 items-center justify-center">
            <Ionicons
              name="heart"
              size={24}
              color="#2563eb"
            />
          </View>

        </View>

      </View>

      {/* Stats */}
      <View className="px-4 mt-4">

        <View className="bg-blue-600 rounded-3xl p-5">

          <Text className="text-white text-lg font-bold">
            Saved Collection
          </Text>

          <Text className="text-blue-100 mt-1">
            You have 3 shortlisted homes
          </Text>

          <View className="flex-row mt-5 justify-between">

            <View className="items-center w-[31%] bg-white/15 rounded-2xl py-3">
              <Text className="text-white text-xl font-bold">
                3
              </Text>
              <Text className="text-blue-100 text-xs">
                Saved
              </Text>
            </View>

            <View className="items-center w-[31%] bg-white/15 rounded-2xl py-3">
              <Text className="text-white text-xl font-bold">
                2
              </Text>
              <Text className="text-blue-100 text-xs">
                New Launch
              </Text>
            </View>

            <View className="items-center w-[31%] bg-white/15 rounded-2xl py-3">
              <Text className="text-white text-xl font-bold">
                1
              </Text>
              <Text className="text-blue-100 text-xs">
                Ready
              </Text>
            </View>

          </View>

        </View>

      </View>

      {/* Cards */}
      <View className="px-4 mt-5">

        {savedData.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="bg-white rounded-3xl mb-4 overflow-hidden border border-slate-100"
          >

            <Image
              source={{ uri: item.image }}
              className="h-52 w-full"
            />

            <TouchableOpacity className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white items-center justify-center">
              <Ionicons
                name="heart"
                size={22}
                color="#ef4444"
              />
            </TouchableOpacity>

            <View className="p-4">

              <Text className="text-xl font-bold text-slate-900">
                {item.title}
              </Text>

              <Text className="text-slate-500 mt-1">
                {item.location}
              </Text>

              <View className="flex-row justify-between items-center mt-4">

                <Text className="text-2xl font-bold text-blue-600">
                  {item.price}
                </Text>

                <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded-xl">
                  <Text className="text-white font-bold">
                    View
                  </Text>
                </TouchableOpacity>

              </View>

            </View>

          </TouchableOpacity>
        ))}

      </View>

      {/* Bottom CTA */}
      <View className="px-4 mt-2 mb-8">

        <View className="bg-white rounded-3xl p-5 border border-slate-100">

          <Text className="text-xl font-bold text-slate-900">
            Compare Saved Homes
          </Text>

          <Text className="text-slate-500 mt-2 leading-6">
            Compare your shortlisted properties side by side.
          </Text>

          <TouchableOpacity className="bg-slate-900 rounded-2xl py-4 mt-5">
            <Text className="text-white text-center font-bold">
              Compare Now
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>
  );
}