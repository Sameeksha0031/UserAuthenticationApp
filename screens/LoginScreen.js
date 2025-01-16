import { View, StyleSheet, Alert } from "react-native";
import Authenticationform from "../components/Auth/CommonForm";
import { Colors } from "../constants/Colors";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { userLogin } from "../utils/auth";

function LoginScreen({ navigation }) {
  const [isAthenticating, setIsAuthencating] = useState(false);

  async function confirmHandler(userData) {
    try {
      setIsAuthencating(true);
      console.log("SignUp Screen " + userData.email + " " + userData.password);
      userLogin(userData.email, userData.password);
    } catch (error) {
      console.log("error = " + error);
      alert(
        "Authentication",
        "Could not log you in. Please check your credentials or try again later!"
      );
    }
    setIsAuthencating(false);
  }

  function newUserHandler() {
    navigation.navigate("SignupScreen");
  }

  if (isAthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return (
    <View style={styles.container}>
      <Authenticationform
        onSubmit={confirmHandler}
        onNewUserClick={newUserHandler}
        screen={"LoginScreen"}
      />
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
