import {
  StyleSheet,
  SafeAreaView
} from "react-native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import Index from "./src/screens/Index";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const title = "Profile Test";
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        {/* <Home /> */}
        <Login nameApp={title} version={10} />
        {/* <SignUp /> */}
        {/* <Index /> */}
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});