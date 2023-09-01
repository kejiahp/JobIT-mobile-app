import "react-native-gesture-handler";
import React from "react";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/StackNavigation";

import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
  });

  const prepare = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <View onLayout={prepare} />
      <StatusBar style="auto" />
      <StackNavigation />
    </NavigationContainer>
  );
}
