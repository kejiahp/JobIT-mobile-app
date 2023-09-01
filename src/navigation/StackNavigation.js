import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import React from "react";
import Main from "../screens/Main";
import { COLORS, SIZES, icons, images } from "../constants";
import { ScreenHeaderBtn } from "../components";

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Main}
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerLeftContainerStyle: {
            paddingLeft: SIZES.medium,
          },
          headerRightContainerStyle: {
            paddingRight: SIZES.medium,
          },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension={"60%"} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension={"100%"} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
