import { View, StyleSheet } from "react-native";
import Loginform from "../components/Auth/CommonForm";
import { Colors } from "../constants/Colors";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Loginform />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 24,
    backgroundColor: Colors.primary100,
    flexDirection: "column",
  },
});
