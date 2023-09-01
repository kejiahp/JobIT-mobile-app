import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { View, SafeAreaView, ScrollView } from "react-native";

import { COLORS, SIZES } from "../constants";

import { Nearbyjobs, Popularjobs, Welcome } from "../components";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: "1", backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                navigation.navigate("Search", { searchTerm });
              }
            }}
          />

          <Popularjobs />

          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Main;
