import React, { useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobsCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  const navigation = useNavigation();

  const [selectedJob, setSelectedJob] = useState();

  const handlerCardPress = (item) => {
    navigation.navigate("Job-Details", { job_id: item.job_id });
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>

        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            horizontal
            contentContainerStyle={{
              columnGap: SIZES.medium,
            }}
            keyExtractor={(item, index) => `key-${index}`}
            renderItem={({ item }) => {
              return (
                <PopularJobsCard
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handlerCardPress}
                />
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
