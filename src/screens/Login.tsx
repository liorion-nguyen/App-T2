import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
    const [email, setEmail] = useState<string>("liorion.nguyen@gmail.com");
    const [password, setPassword] = useState("");
    const [counter, setCounter] = useState<number>(0)
    function handleClick() {
        // console.log(email);
        // console.log(password);
        setCounter(counter + 1);
    }
    function handleChangeText(text: string) {
        setEmail(text);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <Text>{counter}</Text>
            <View>
                <Text>Email</Text>
                <TextInput placeholder="Type something here..." style={styles.input} value={email} onChangeText={handleChangeText} />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput placeholder="Type something here..." style={styles.input} value={password} onChangeText={setPassword} />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleClick}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 30
    },
    title: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: "center"
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        borderRadius: 10
    },
    button: {
        backgroundColor: "#9BDF46",
        padding: 10,
        borderRadius: 10
    }
})