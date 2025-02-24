import { ScrollView } from "native-base";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Todo() {
    const [inp, setInp] = useState("");
    const [todos, setTodos] = useState<string[]>([]);
    const handleAdd = () => {
        setTodos([...todos, inp]);
        setInp("");
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TodoList</Text>
            <View style={styles.form}>
                <TextInput placeholder="Add new todo" value={inp} onChangeText={setInp} style={styles.input} />
                <Button title="Add" onPress={handleAdd} />
            </View>
            <ScrollView style={styles.boxTodo}>
                {
                    todos.map((todo, index) => (
                        <View style={styles.rowTodo} key={index}>
                            <Text>{todo}</Text>
                            <Button title="Delete" />
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'flex-start',
        padding: 20
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 10
    },
    form: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        width: "80%",
        padding: 10,
        borderRadius: 5
    },
    boxTodo: {
        width: "100%",
        height: 500,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10
    },
    rowTodo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "red"
    }
});