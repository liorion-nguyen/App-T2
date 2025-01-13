import {
  StyleSheet,
  SafeAreaView
} from "react-native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import Index from "./src/screens/Index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home /> */}
      <Login />
      {/* <SignUp /> */}
      {/* <Index /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});