import React from "react";
import { View, Text } from "react-native";

const styles = {
  container: "flex-1 bg-white",
  wrapper: "flex-1 justify-center items-center bg-purple-100",
  title: "text-4xl font-bold text-purple-600 mb-4",
  subtitle: "text-lg text-gray-700 text-center px-4",
  buttonBox: "mt-8 px-6 py-4 bg-purple-500 rounded-lg",
  buttonText: "text-white font-semibold text-center",
};

export default function SearchScreen() {
  return (
    <View className={styles.container}>
      <View className={styles.wrapper}>
        <Text className={styles.title}>Search</Text>
        <Text className={styles.subtitle}>Find properties with ease</Text>
        <View className={styles.buttonBox}>
          <Text className={styles.buttonText}>Search Now 🔍</Text>
        </View>
      </View>
    </View>
  );
}
