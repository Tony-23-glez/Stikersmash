import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: 'Not Found' }} />
    <View style = {styles.container}>
      <Text style={styles.text}>Home</Text>
      <Link href="./" style={styles.button}>
    Go back to home screen
  </Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: '#25292e',
alignItems: 'center',
justifyContent: 'center',
  },
  text:{
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});