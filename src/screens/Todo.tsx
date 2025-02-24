import { ScrollView } from "native-base";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Todo() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TodoList</Text>
            <View style={styles.form}>
                <TextInput placeholder="Add new todo" style={styles.input}/>
                <Button title="Add" />
            </View>
            <ScrollView style={styles.boxTodo}>
                <View style={styles.rowTodo}>
                    <Text>Todo 1</Text>
                    <Button title="Delete" />
                </View>
                <View style={styles.rowTodo}>
                    <Text>Todo 2</Text>
                    <Button title="Delete" />
                </View>
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