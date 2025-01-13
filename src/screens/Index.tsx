import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Image source={ require("../../assets/nav_index.png") } style={styles.image}/>
            <Text style={styles.title}>Aliquet facilisis facilisis adipiscing</Text>
            <Text>Nibh at velit blandit sed sollicitudin risus non pellentesque interdum aliquam ullamcorper</Text>
            <TouchableOpacity style={styles.button}>
                <Text>Get started</Text>
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
    image: {
       width: 300,
       height: 300,
       borderRadius: 150 
    },
    title: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: "center"
    },
    button: {
        backgroundColor: "#9BDF46",
        padding: 10,
        borderRadius: 10
    }
})