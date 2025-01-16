import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/Colors";

function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}></Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
