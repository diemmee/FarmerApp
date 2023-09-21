import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ justifyContent: "center", alignItems: "center" }}
        >
            <Text
                style={{
                    color: "black",
                }}
            >
                Lịch sử tra cứu screen
            </Text>
        </SafeAreaView>
    );
};

export default Home;
