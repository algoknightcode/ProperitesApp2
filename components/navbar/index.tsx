// index.tsx

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {styles} from  "./navbaUi"
import { Ionicons } from "@expo/vector-icons";

export default function Navbar({ onMenuPress }: { onMenuPress?: () => void }) {
  return (
    <View className="flex-1 bg-white">
      {/* Navbar */}
      <View className={styles.navbar}>
        {/* Left Menu */}
        <TouchableOpacity onPress={onMenuPress}>
          <Ionicons name="menu" size={28} />
        </TouchableOpacity>

        {/* Center Title */}
        <View className={styles.centerBox}>
          <Text className={styles.title}>Post property</Text>
          <View className={styles.freeTag}>
            <Text className={styles.freeText}>FREE</Text>
          </View>
        </View>

        {/* Right Bell */}
        <Ionicons name="notifications-outline" size={28} color="#334155" />
      </View>
    </View>
  );
}