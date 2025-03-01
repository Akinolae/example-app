import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const Layout = () => {
  const tabs = [
    {
      name: "home",
      title: "Home",
    },
    {
      name: "profile",
      title: "Profile",
    },
    {
      name: "wallet",
      title: "Wallet",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ];
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused }) => {
          let iconName:
            | "home"
            | "home-outline"
            | "person"
            | "person-outline"
            | "settings"
            | "settings-outline"
            | "wallet"
            | "wallet-outline"
            | undefined;

          switch (route.name) {
            case "index":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
            case "Settings":
              iconName = focused ? "settings" : "settings-outline";
              break;
            case "Wallet":
              iconName = focused ? "wallet" : "wallet-outline";
            default:
              break;
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? "#19191B" : "#8D9091"}
            />
          );
        },
        tabBarIconStyle: {
          height: 50,
          backgroundColor: "FFFFFF",
          width: 50,
          borderRadius: 50,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "none",
          paddingTop: 10,
          borderWidth: 0,
          borderTopWidth: 0,
          marginBottom: 10,
        },
      })}
    >
      {tabs.map((tab: any, i: number) => {
        return (
          <Tabs.Screen
            key={i}
            name={tab.name === "index" ? "Home" : tab.name}
            options={{
              title: tab.title,
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default Layout;
