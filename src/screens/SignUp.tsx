import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUp() {
    // Tạo useState để theo dõi giá trị input của các TẽtInput khi click vào Sign Up thì sẽ console.log ra tất cả giá trị đã fill.
    const [fullName, setFullName] = useState("")
    function handleSignUp() {
        console.log(fullName);
    }

    function handleChangeText1(text: string) {
        setFullName(text);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View>
                <Text>Full Name</Text>
                <TextInput placeholder="Type something here..." style={styles.input} value={fullName} onChangeText={handleChangeText1}/>
            </View>
            <View>
                <Text>Username</Text>
                <TextInput placeholder="Type something here..." style={styles.input} />
            </View>
            <View>
                <Text>Email</Text>
                <TextInput placeholder="Type something here..." style={styles.input} />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput placeholder="Type something here..." style={styles.input} />
            </View>
            <View>
                <Text>Confirm Password</Text>
                <TextInput placeholder="Type something here..." style={styles.input} />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text>Sign Up</Text>
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