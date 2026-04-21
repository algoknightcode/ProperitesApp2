// app/listings/index.tsx

import React from "react";
import { ScrollView, View } from "react-native";
import ListingsPage from "@/components/ListingPage";

export default function ListingsScreen() {
  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
      <ListingsPage />
    </ScrollView>
  );
}