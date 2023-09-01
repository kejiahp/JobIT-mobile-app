import { TouchableOpacity, ActivityIndicator, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES } from "../../../constants";
import NearByJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

import styles from "./nearbyjobs.style";

const Nearbyjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>

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
          data?.map((job) => (
            <NearByJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handlerNavigate={() =>
                navigation.navigate("Job-Details", { job_id: job.job_id })
              }
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
