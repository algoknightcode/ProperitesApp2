import { Stack } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function PopularToolsLayout() {
  const navigation = useNavigation();

  return (
    <Stack screenOptions={{ 
      headerBackTitle: 'Back', 
      headerTitle: '', 
      headerShadowVisible: false,
      headerLeft: () => (
        <Ionicons 
          name="chevron-back" 
          size={24} 
          color="black"
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        />
      )
    }}>
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="budget" options={{ headerShown: true }} />
      <Stack.Screen name="emi" options={{ headerShown: true }} />
      <Stack.Screen name="area" options={{ headerShown: true }} />
      <Stack.Screen name="loan" options={{ headerShown: true }} />
      <Stack.Screen name="LocateScore" options={{ headerShown: true }} />
    </Stack>
  );
}
