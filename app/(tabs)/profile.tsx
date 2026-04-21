// app/(tabs)/profile.tsx

import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function ProfilePage() {
  return (
    <ScrollView
      className="flex-1 bg-slate-50"
      showsVerticalScrollIndicator={false}
    >

      {/* Premium Header */}
      <View className="bg-slate-900 pt-20 pb-10 px-5 rounded-b-[38px]">

        <View className="flex-row justify-between items-center">

          <View className="flex-row items-center">

            <View className="h-20 w-20 rounded-full bg-white items-center justify-center border-4 border-white/30">
              <Text className="text-3xl font-bold text-blue-700">
                S
              </Text>
            </View>

            <View className="ml-4">

              <Text className="text-white text-2xl font-bold">
                Simranpreet Singh
              </Text>

              <Text className="text-white mt-1">
                Premium Buyer Account
              </Text>

              <Text className="text-white text-xs mt-1">
                algoknightcode@gmail.com
              </Text>

            </View>

          </View>

          <TouchableOpacity className="h-11 w-11 rounded-2xl bg-white/15 items-center justify-center">
            <Ionicons
              name="settings-outline"
              size={22}
              color="white"
            />
          </TouchableOpacity>

        </View>

        <View className="bg-white/15 rounded-2xl px-4 py-3 mt-6 flex-row justify-between items-center">

          <View>
            <Text className="text-white font-bold">
              Smart Match Score
            </Text>

            <Text className="text-white text-xs mt-1">
              Based on your searches & likes
            </Text>
          </View>

          <Text className="text-white text-3xl font-bold">
            91%
          </Text>

        </View>

      </View>

      {/* Floating Stats */}
      <View className="px-4 -mt-6">

        <View className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100">

          <View className="flex-row justify-between">

            <View className="w-[31%] bg-slate-50 rounded-2xl py-4 items-center">
              <Text className="text-blue-600 text-2xl font-bold">
                248
              </Text>
              <Text className="text-xs text-slate-500 mt-1">
                Seen
              </Text>
            </View>

            <View className="w-[31%] bg-slate-50 rounded-2xl py-4 items-center">
              <Text className="text-pink-500 text-2xl font-bold">
                39
              </Text>
              <Text className="text-xs text-slate-500 mt-1">
                Liked
              </Text>
            </View>

            <View className="w-[31%] bg-slate-50 rounded-2xl py-4 items-center">
              <Text className="text-green-600 text-2xl font-bold">
                17
              </Text>
              <Text className="text-xs text-slate-500 mt-1">
                Saved
              </Text>
            </View>

          </View>

        </View>

      </View>

      {/* Insights */}
      <View className="px-4 mt-5">

        <Text className="text-xl font-bold text-slate-900 mb-3">
          Buyer Insights
        </Text>

        <View className="flex-row justify-between">

          <View className="w-[48%] bg-white rounded-3xl p-4 border border-slate-100">
            <MaterialCommunityIcons
              name="home-city-outline"
              size={28}
              color="#2563eb"
            />

            <Text className="text-slate-500 text-xs mt-4">
              Preferred City
            </Text>

            <Text className="text-lg font-bold text-slate-900 mt-1">
              Noida
            </Text>
          </View>

          <View className="w-[48%] bg-white rounded-3xl p-4 border border-slate-100">
            <Ionicons
              name="cash-outline"
              size={28}
              color="#16a34a"
            />

            <Text className="text-slate-500 text-xs mt-4">
              Avg Budget
            </Text>

            <Text className="text-lg font-bold text-slate-900 mt-1">
              ₹1.4 Cr
            </Text>
          </View>

        </View>

      </View>

      {/* Recent Activity */}
      <View className="px-4 mt-6">

        <Text className="text-xl font-bold text-slate-900 mb-3">
          Recent Activity
        </Text>

        <View className="bg-white rounded-3xl p-4 border border-slate-100">

          <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-slate-100">
            <View className="flex-row items-center">
              <Ionicons
                name="heart-outline"
                size={22}
                color="#334155"
              />
              <Text className="ml-3 text-slate-800 font-medium">
                Liked Properties
              </Text>
            </View>
            <Text className="text-blue-600 font-bold">
              39
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-slate-100">
            <View className="flex-row items-center">
              <Ionicons
                name="time-outline"
                size={22}
                color="#334155"
              />
              <Text className="ml-3 text-slate-800 font-medium">
                Recently Viewed
              </Text>
            </View>
            <Text className="text-blue-600 font-bold">
              248
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-slate-100">
            <View className="flex-row items-center">
              <Ionicons
                name="bookmark-outline"
                size={22}
                color="#334155"
              />
              <Text className="ml-3 text-slate-800 font-medium">
                Saved Projects
              </Text>
            </View>
            <Text className="text-blue-600 font-bold">
              17
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-between items-center py-4">
            <View className="flex-row items-center">
              <Ionicons
                name="sparkles-outline"
                size={22}
                color="#334155"
              />
              <Text className="ml-3 text-slate-800 font-medium">
                Recommended For You
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#94a3b8"
            />
          </TouchableOpacity>

        </View>

      </View>

      {/* Footer Card */}
      <View className="px-4 mt-6 mb-8">

        <View className="bg-blue-600 rounded-3xl p-5">

          <Text className="text-white text-xl font-bold">
            Upgrade Search Power
          </Text>

          <Text className="text-blue-100 mt-2 leading-6">
            Get instant alerts, AI recommendations,
            premium listings and faster responses.
          </Text>

          <TouchableOpacity className="bg-white rounded-2xl py-3 mt-5">
            <Text className="text-blue-700 text-center font-bold">
              Explore Premium
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>
  );
}