// components/PropertyChoice/index.tsx

import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import { styles } from "./propertyChoiceUI";

const bhkData = [
  {
    id: 1,
    title: "1 RK/1 BHK",
    count: "820+ Properties",
    icon: <Ionicons name="home" size={34} color="#1d4ed8" />,
  },
  {
    id: 2,
    title: "2 BHK",
    count: "5,200+ Properties",
    icon: <Ionicons name="home" size={34} color="#1d4ed8" />,
  },
   {
    id: 3,
    title: "3 BHK",
    count: "5,200+ Properties",
    icon: <Ionicons name="home" size={34} color="#1d4ed8" />,
  },
   {
    id: 4,
    title: "4 BHK",
    count: "5,200+ Properties",
    icon: <Ionicons name="home" size={34} color="#1d4ed8" />,
  },
];

const postedByData = [
  {
    id: 1,
    title: "Dealer",
    count: "300+ Properties",
    icon: <FontAwesome5 name="user-tie" size={28} color="#1d4ed8" />,
  },
  {
    id: 2,
    title: "Owner",
    count: "160+ Properties",
    icon: <FontAwesome5 name="user" size={28} color="#1d4ed8" />,
  },
];

function SectionCard({
  leftTitle,
  leftIcon,
  data,
}: any) {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name={leftIcon.props.name}
            size={40}
            color={leftIcon.props.color}
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#1e293b' }}>{leftTitle.replace(/\n/g, ' ')}</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/listings") }>
          <Text className={styles.seeMoreText}>See More →</Text>
        </TouchableOpacity>
      </View>
      <View className={styles.sectionWrap}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {data.map((item: any) => (
            <TouchableOpacity
              key={item.id}
              className={styles.smallCard}
            >
              <View>{item.icon}</View>
              <Text className={styles.cardTitle}>
                {item.title}
              </Text>
              <Text className={styles.cardCount}>
                {item.count}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default function PropertyChoice() {
  return (
    <View className={styles.container}>
      <SectionCard
        leftTitle={"BHK choice in mind?"}
        leftIcon={<Ionicons name="home" size={40} color="#93c5fd" />}
        data={bhkData}
      />

      <SectionCard
        leftTitle={"Properties posted by"}
        leftIcon={<Ionicons name="business" size={40} color="#60a5fa" />}
        data={postedByData}
      />
    </View>
  );
}