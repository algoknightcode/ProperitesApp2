// components/PopularTools/index.tsx

import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { styles } from './PopularToolsUI';
import { router } from "expo-router";

const toolsData = [
  {
    id: 1,
    title: "Budget Calculator",
    desc: "Check your affordability range for buying home",
    icon: <Ionicons name="calculator-outline" size={46} color="#d89b38" />,
    route: "/popular_tools/budget",
  },
  {
    id: 2,
    title: "EMI Calculator",
    desc: "Calculate your home loan EMI instantly",
    icon: <MaterialIcons name="calculate" size={46} color="#d89b38" />,
    route: "/popular_tools/emi",
  },
  {
    id: 3,
    title: "Area Converter",
    desc: "Convert sq.ft, sq.yd, acre and more easily",
    icon: <Ionicons name="resize-outline" size={46} color="#d89b38" />,
    route: "/popular_tools/area",
  },
  {
    id: 4,
    title: "Loan Eligibility",
    desc: "Know how much home loan you can get",
    icon: <Ionicons name="cash-outline" size={46} color="#d89b38" />,
    route: "/popular_tools/loan",
  },
];


export default function PopularTools() {
  return (
    <View className={styles.container}>
      
      {/* Header */}
      <View className={styles.topRow}>
        <View className="flex-row items-start">
          <View className={styles.mainIconWrap}>
            <Ionicons name="bulb-outline" size={34} color="#1677ff" />
          </View>

          <View className="ml-4">
            <Text className={styles.heading}>
              Use popular tools
            </Text>

            <Text className={styles.subHeading}>
              Go from browsing to buying
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={()=>router.push("/popular_tools")}
        
        >
          <Text className={styles.viewAll}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <View className="mt-1">
        <FlatList
          data={toolsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              className={styles.card}
              onPress={() => router.push(item.route as any)}
            >
              <View className={styles.iconCircle}>
                {item.icon}
              </View>
              <Text className={styles.cardTitle}>
                {item.title} →
              </Text>
              <Text className={styles.cardDesc}>
                {item.desc}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}