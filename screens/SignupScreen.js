import { Text, StyleSheet, View, Alert } from "react-native";
import { Colors } from "../constants/Colors";
import Authenticationform from "../components/Auth/CommonForm";
import { createUser } from "../utils/auth";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen({ navigation }) {
  const [isAuthenticated, setAuthenticated] = useState(false);

  async function onSubmit(userData) {
    try {
      setAuthenticated(true);
      await createUser(userData.email, userData.password);
    } catch (error) {
      console.log("error = " + error);
      alert("Login", "User is not registered");
    }
    setAuthenticated(false);
  }

  if (isAuthenticated) {
    return <LoadingOverlay message="Creating user..." />;
  }

  function onLoginHandler() {
    console.log("on login screen");
    navigation.navigate("LoginScreen");
  }

  return (
    <View style={styles.container}>
      <Authenticationform
        onSubmit={onSubmit}
        onNewUserClick={onLoginHandler}
        screen={"SignupScreen"}
      />
    </View>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 24,
    backgroundColor: Colors.primary100,
    flexDirection: "column",
  },
});
