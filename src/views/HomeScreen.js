import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
		ScrollView
} from "react-native";
import COLORS from "../const/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                backgroundColor: COLORS.white,
                paddingHorizontal: 30,
                height: "100%",
            }}
        >
            <StatusBar backgroundColor="#085728" barStyle={"light-content"} />
            <ScrollView>
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
	                                    fontSize: 14,
	                                    fontFamily: "Poppins-Regular",
	                                    color: COLORS.black,
	                                }}
	                            >
	                                Chụp hoặc tải ảnh lên
	                            </Text>
	                        </View>
	                        <View
	                            style={{
	                                position: "absolute",
	                                left: 15,
	                                top: 17,
	                                justifyContent: "center",
	                                alignItems: "center",
	                            }}
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
	                                fontSize: 14,
	                                fontFamily: "Poppins-Regular",
	                                color: COLORS.black,
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
	                        onPress={() => navigation.navigate("CameraAction")}
	                    >
	                        <Text
	                            style={{
	                                color: COLORS.white,
	                                fontFamily: "Poppins-Regular",
	                                fontSize: 16,
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
            </ScrollView>
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
        marginTop: 10,
        width: 350,
        height: 300,
        objectFit: "cover",
        borderRadius: 15,
    },
});

export default HomeScreen;
