import React from "react";

import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import { COLORS, images, icons, SIZES } from "../constants";

import { Nearbyjobs, Popularjobs, Welcome } from "../components";

function Main() {
  return (
    <SafeAreaView style={{ flex: "1", backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />

          <Popularjobs />

          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Main;
