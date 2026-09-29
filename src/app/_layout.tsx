import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

import { initDatabase } from "@/database/database";

export default function RootLayout() {
  return (
    <SQLiteProvider
      databaseName="garagy.db"
      onInit={initDatabase}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="add-vehicle" options={{ presentation: "modal" }} />
        <Stack.Screen name="add-service-record" options={{ presentation: "modal" }} />
      </Stack>
    </SQLiteProvider>
  );
}