import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <View>
                <Text>Email</Text>
                <TextInput placeholder="Type something here..." style={styles.input}/>
            </View>
            <View>
                <Text>Password</Text>
                <TextInput placeholder="Type something here..."  style={styles.input}/>
            </View>
            <TouchableOpacity style={styles.button}>
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