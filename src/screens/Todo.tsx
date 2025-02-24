import { Button, Text, TextInput, View } from "react-native";

export default function Todo() {
    return (
        <View>
            <Text>TodoList</Text>
            <View>
                <TextInput placeholder="Add new todo" />
                <Button title="Add" />
            </View>
        </View>
    );
}