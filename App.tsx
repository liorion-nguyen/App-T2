import {
  StyleSheet,
  SafeAreaView
} from "react-native";
import { NativeBaseProvider } from "native-base";
import Todo from "./src/screens/Todo";
import Home from "./src/screens/Home";
import Index from "./src/screens/Index";

export default function App() {
  const title = "Profile Test";
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Home />
        {/* <Login nameApp={title} version={10} /> */}
        {/* <SignUp /> */}
        <Index />
        {/* <Todo /> */}
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