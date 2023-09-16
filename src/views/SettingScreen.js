import React, { Component } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
} from "react-native";
import COLORS from "../const/colors";
import Button from "./components/Button";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ backgroundColor: COLORS.white, paddingHorizontal: 30 }}
        >
            <StatusBar backgroundColor="#085728" barStyle={"light-content"} />
            <View>
                <View style={{ height: 100 }}>
                    <Text style={styles.title}>Farmer</Text>
                </View>
                <View>
                    <Image
                        style={styles.homeMainImage}
                        source={require("../assets/images/homeMainImage.jpg")}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View style={{ marginTop: 20 }}>
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                style={{ width: 110, height: 110 }}
                                source={require("../assets/images/homeFrameCamera.png")}
                            />
                            <Text
                                style={{
                                    marginTop: 10,
                                    width: 100,
                                    textAlign: "center",
                                    fontSize: 18,
                                    fontFamily: "Poppins-Medium",
                                }}
                            >
                                Chụp hoặc tải ảnh lên
                            </Text>
                        </View>
                        <View
                            style={{ position: "absolute", left: 15, top: 17 }}
                        >
                            <Image
                                style={{ width: 77, height: 77 }}
                                source={require("../assets/images/homeRiceImg.jpg")}
                            />
                        </View>
                    </View>
                    <Image
                        style={{
                            width: 30,
                            height: 30,
                            top: -20,
                            marginLeft: 20,
                            marginRight: 7,
                        }}
                        source={require("../assets/images/HomeChevron.png")}
                    />
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            style={{ width: 70, height: 120, top: 20 }}
                            source={require("../assets/images/HomeCheck.png")}
                        />
                        <Text
                            style={{
                                marginTop: 25,
                                width: 100,
                                textAlign: "center",
                                fontSize: 17,
                                fontFamily: "Poppins-Medium",
                            }}
                        >
                            Xem chẩn đoán
                        </Text>
                    </View>
                </View>
                <View>
                    <Button
                        style={{ width: "50%", height: 38 }}
                        title={"Chụp ảnh"}
                    />
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            position: "absolute",
                            left: 80,
                            top: 15,
                        }}
                        source={require("../assets/images/homeCamera.png")}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 40,
        color: COLORS.darkGreen,
        fontFamily: "HappyMonkey-Regular",
    },
    homeMainImage: {
        width: 350,
        height: 250,
        objectFit: "cover",
        borderRadius: 15,
        left: -10,
    },
});

export default Home;
