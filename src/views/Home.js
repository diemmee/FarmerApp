import React, { Component } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import COLORS from "../const/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
// import Button from "./components/Button";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                backgroundColor: COLORS.white,
                paddingHorizontal: 30,
                height: "100%",
            }}
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
                    <View style={{ marginTop: 50 }}>
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
                            top: -10,
                            marginLeft: 25,
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
                            style={{ width: 70, height: 120, top: 40 }}
                            source={require("../assets/images/HomeCheck.png")}
                        />
                        <Text
                            style={{
                                marginTop: 50,
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
                    <TouchableOpacity
                        style={{
                            height: 55,
                            width: "70%",
                            backgroundColor: COLORS.darkGreen,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                            marginVertical: 20,
                            left: 50,
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                fontFamily: "Poppins-Medium",
                                fontSize: 19,
                                marginLeft: 40,
                            }}
                        >
                            Chụp ảnh
                        </Text>
                        <AntDesign
                            name="camerao"
                            size={30}
                            color={COLORS.white}
                            style={{
                                width: 30,
                                height: 58,
                                position: "absolute",
                                left: 50,
                                top: 10,
                            }}
                        />
                    </TouchableOpacity>
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
