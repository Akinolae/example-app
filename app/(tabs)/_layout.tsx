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
        // tabBarIconStyle: {
        //   height: "auto",
        //   padding: 0,
        //   width: "auto",
        //   backgroundColor: "FFFFFF",
        //   borderRadius: 50,
        //   marginTop: 5,
        // },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          shadowOpacity: 0,
        },
        tabBarActiveBackgroundColor: "transparent",
        tabBarInactiveBackgroundColor: "transparent",
      })}
    >
      {tabs.map((tab: any, i: number) => {
        return (
          <Tabs.Screen
            key={i}
            name={tab.name === "index" ? "Home" : tab.name}
            options={{
              title: tab.title,
              tabBarInactiveBackgroundColor: "transparent",
              tabBarActiveBackgroundColor: "transparent",
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default Layout;
