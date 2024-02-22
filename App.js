import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { View, Text } from "react-native";
import { styled } from "styled-components";
import MapScreen from "./src/features/restaurants/screens/map.screen";
import SettingsScreen from "./src/features/restaurants/screens/settings.screen";
import { restaurantsRequest } from "./src/services/restaurants/restaurants.service";

const Tab = createBottomTabNavigator();

const Loading = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Restaurant") {
      iconName = "restaurant";
    } else if (route.name === "Settings") {
      iconName = "settings";
    } else if (route.name === "Map") {
      iconName = "map";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={24} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return (
      <Loading>
        <Text>Loading...</Text>
      </Loading>
    );
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Tab.Navigator screenOptions={ScreenOptions}>
          <Tab.Screen name="Restaurant" component={RestaurantScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </NavigationContainer>
  );
}
