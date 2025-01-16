import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constants/Colors";

function Button({ style, onPress, screen }) {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Text style={styles.buttonText}>{screen ? "Sign Up" : "Log In"}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    height: 40,
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontStyle: "bold",
    alignItems: "center",
    alignContent: "center",
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 8,
  },
});
