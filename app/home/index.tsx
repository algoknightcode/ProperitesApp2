import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import Navbar from "@/components/navbar";
import Header from "@/components/Header";
import CategoryCarousel from "@/components/CategoryCaraousel";
import SimilarProperties from "@/components/SimilarProperties";
import PropertyTypes from "@/components/PropertyTypes";
import PropertyChoice from "@/components/PropertyChoice";
import PopularTools from "@/components/PopularTools";
import SidebarMenu from "@/components/SidebarMenu";
import PropertyDetail from "@/components/PropertiyDetail";
const styles = {
  container: "flex-1 bg-slate-50",
};

export default function HomeScreen() {
  const [open, setOpen] = useState(false);

  return (
    <View className="flex-1">
      
      <ScrollView
        className={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Navbar onMenuPress={() => setOpen(true)} />
        <CategoryCarousel />
        <Header />
    
        <SimilarProperties />
        <PropertyTypes />
        <PropertyChoice />
        <PopularTools />
       
      </ScrollView>

      <SidebarMenu
        visible={open}
        onClose={() => setOpen(false)}
      />

    </View>
  );
}