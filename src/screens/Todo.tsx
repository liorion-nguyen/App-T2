import { ScrollView } from "native-base";
import { useState } from "react"; 
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

type Todo = {
    todo: string;
    date: Date;
}
export default function Todo() {
    const [inp, setInp] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const handleAdd = () => {
        setTodos([...todos, {
            todo: inp,
            date: new Date()
        }]);
        setInp("");
    }

    const handleDelete = (index: number) => {
        const data = todos.filter((item, i) => i != index); // filter() return a new array with the elements that pass the condition
        setTodos(data);
    }

    const handleCovert = (date: Date) => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
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
                            <View>
                                <Text>{index + 1}.</Text>
                                <Text>{todo.todo}</Text>
                                <Text>{handleCovert(todo.date)}</Text>
                            </View>
                            <Button title="Delete" onPress={() => handleDelete(index)} />
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
    Info: {
        flexDirection: "column",
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

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:liorion-nguyen/Profile_Test.git
