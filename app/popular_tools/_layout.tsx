import { Stack } from 'expo-router';

export default function PopularToolsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="budget" />
      <Stack.Screen name="emi" />
      <Stack.Screen name="area" />
      <Stack.Screen name="loan" />
      <Stack.Screen name="LocateScore" />
    </Stack>
  );
}
