import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
    type Person = {
        name: string,
        age: number,
        address: string,
        email: string,
        username?: string
    }
    const person: Person = {
        name: "Nguyen Quoc Chung",
        age: 18,
        address: "HaNoi",
        email: "chung@gmail.com"
    }
    console.log(person.address); // Lấy trực tiếp giá trị từ object
    console.log(person["name"]); // Duyệt vòng lặp

    for (let key in person) {
        console.log(key, person[key as keyof Person]);
    }

    const personPush = {
        gender: "Male",
        phone: "0123456789"
    }

    const fakePerson = {
        ...person,
        ...personPush,
        age: 19,
        username: "Chung"
    };
    console.log(fakePerson);

    // Hệ thống quản lý user
    // Phải có rất user.


    const user1 = {
        username: "chung",
        password: '123456',
        email: "chung@gmail.com"
    }
    const users = [
        {
            username: "chung",
            password: '123456',
            email: "chung@gmail.com"
        },
        {
            username: "minh",
            password: '1234567',
            email: "minh@gmail.com"
        },
        {
            username: "anh",
            password: '1234567',
            email: "anh@gmail.com"
        }
    ]

    // Tạo object có tên là student: name, age, grade, email, gender.
    // Tạo type Student với key y hệt bên trên và áp dụng cho object student.
    // Sử dụng 2 cách lấy giá trị trong object để lấy ra name, age, email, gender.
    // Duyệt các key trong object và đưa ra value của từng key đấy.
    // Sử dụng toán tử trải để sao chép ra 1 object tương tự student 
    // sau đó thêm 1 key mới là username và cập nhật giá trị của key grade.

    // + Sử dụng Type cho object user có các thuộc tính fullName, username, password, email, age. Và tạo ra 1 array bên trong chứa các object user(ít nhất 3 người dùng).
    // + Hãy thực hiện sử dụng FlatList hoặc map, hoặc xử lý hiện thị dạng List lên màn hình các user.
    return (
        <View>
            <Text style={styles.title}>Screen Home</Text>
            <ScrollView style={styles.box}>
                {
                    users.map((user, index) => (
                        <View key={index}>
                            <Text>{user.username}</Text>
                            <Text>{user.password}</Text>
                            <Text>{user.email}</Text>
                        </View>
                    ))
                }
                <FlatList
                    data={users}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.username}</Text>
                            <Text>{item.password}</Text>
                            <Text>{item.email}</Text>
                        </View>
                    )}
                />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 600,
        textAlign: "center",
    },
    box: {
        width: 350,
        height: "100%",
        marginTop: 20,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10
    }
})
