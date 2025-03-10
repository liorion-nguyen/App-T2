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

/*
B1: Trước khi code full code về
B2: Khi code xong git add ., git commit, git pull origin main, git push origin main
B3: Sau khi push xong vào git để merge vào main.
*/