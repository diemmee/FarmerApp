import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import COLORS from "../const/colors";
import Button from "./components/Button";

const UserScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ paddingHorizontal: 30 }}>
            <View style={{ height: 100 }}>
                <Text style={styles.title}>Farmer</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.header}>Tài khoản của bạn</Text>
                <View style={{ paddingVertical: 10 }}>
                    <Image
                        style={styles.userImage}
                        source={require("../assets/images/user2.png")}
                    ></Image>
                </View>
                <Text style={styles.desc}>Tham gia ứng dụng Farmer</Text>
                <Button
                    title="Đăng nhập"
                    onPress={() => navigation.navigate("LoginScreen")}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        marginLeft: 0,
        fontSize: 30,
        color: COLORS.darkGreen,
        fontFamily: "HappyMonkey-Regular",
    },
    header: {
        color: COLORS.black,
        fontSize: 17,
        fontFamily: "Poppins-Medium",
    },
    userImage: {
        width: 160,
        height: 160,
        objectFit: "cover",
        borderRadius: 80,
    },
    desc: {
        paddingVertical: 20,
        color: COLORS.black,
        fontSize: 14,
        fontFamily: "Poppins-Regular",
    },
});
export default UserScreen;
