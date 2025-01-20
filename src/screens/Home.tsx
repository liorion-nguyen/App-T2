import { Text, View } from "react-native";

export default function Home() {
    const users = [
        "Chung",
        "Vinh",
        "Minh",
        "Khang"
    ];
    const scores = [2,1,3,4,5,6];
    const scores2 = scores.map(score => score + 1)
    const newScores = scores.filter((score: number) => score % 3 == 0)
    console.log(scores2);
    // Chẵn và không chia hết cho 3.
    // + Tạo array là mảng chứa họ tên các bạn học trong lớp. Hãy tạo giao diện page show thông tin lớp học và tên học sinh trong lớp.
    // + Tạo array là 1 mảng chứa 1 dãy số từ 1 đến 10. Hãy tạo giao diện đưa ra các phần tử có giá trị chẵn.
    return (
        <View>
            <Text>Screen Home</Text>
            {
                users.map((user, index) => (
                    <Text key={index}>{user}</Text>
                ))
            }
        </View>
    );
}