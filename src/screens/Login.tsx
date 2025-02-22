import { Button, CheckIcon, Icon, Input, Link, Pressable, Select, Spinner, Stack } from "native-base";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type LoginProps = {
    nameApp: string;
    version: number;
}

export default function Login({ nameApp, version }: LoginProps) {
    console.log(nameApp, version);

    const [email, setEmail] = useState<string>("liorion.nguyen@gmail.com");
    const [password, setPassword] = useState("");
    const [counter, setCounter] = useState<number>(0);
    function handleClick() {
        // console.log(email);
        // console.log(password);
        setCounter(counter + 1);
    }
    function handleChangeText(text: string) {
        setEmail(text);
    }

    const [show, setShow] = useState(false);
    const [service, setService] = useState("");

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
            <Button>Click Me</Button>
            <Input variant="rounded" placeholder="Round" />
            <Input mx="3" placeholder="Input" w="100%" />
            <Stack space={4} w="100%" alignItems="center">
                <Input w={{
                    base: "75%",
                    md: "25%"
                }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
                <Input w={{
                    base: "75%",
                    md: "25%"
                }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>} placeholder="Password" />
            </Stack>
            <Spinner color="indigo.500" />
            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
            </Select>
            <Link _text={{
                fontSize: "xl",
                _light: {
                    color: "cyan.500"
                },
                color: "cyan.300"
            }} href="" isUnderlined _hover={{
                _text: {
                    _light: {
                        color: "cyan.600"
                    },
                    color: "cyan.400"
                }
            }}>
                Click me to open NativeBase website.
            </Link>

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