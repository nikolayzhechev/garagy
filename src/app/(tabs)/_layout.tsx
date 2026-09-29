import { Tabs } from "expo-router";
import { Icon } from "../../componenets/Icon";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            // tabBarStyle: {
            //     backgroundColor: globalStyles.background,
            //     borderTopColor: globalStyles.surface
            // }
        }}
    >
      <Tabs.Screen
          name="garage/index"
          options={{
            title: "Garage",
            tabBarIcon: ({color, size}) => (
              <Icon name="car-outline" size={size} color={color} />
            )
          }}
      />
      <Tabs.Screen
          name="garage/[vehicleId]"
          options={{
            href: null  // does not show in tab icons but is navigatable
          }}
      />
      <Tabs.Screen
          name="maintenance"
          options={{
            title: "Maintenance",
            tabBarIcon: ({color, size}) => (
              <Icon name="list" size={size} color={color} />
            )
          }}
      />
      <Tabs.Screen
          name="reminders"
          options={{
            title: "Reminders",
            tabBarIcon: ({color, size}) => (
              <Icon name="alert-circle-outline" size={size} color={color} />
            )
          }}
      />
      <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({color, size}) => (
              <Icon name="settings-outline" size={size} color={color} />
            )
          }}
      />
    </Tabs>
  );
}
