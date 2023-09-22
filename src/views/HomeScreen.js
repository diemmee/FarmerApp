import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import COLORS from "../const/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeview}>
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
                    <View style={styles.middleSection}>
                        <View style={{ marginTop: 50 }}>
                            <View style={styles.homeframe}>
                                <Image
                                    style={{ width: 110, height: 110 }}
                                    source={require("../assets/images/homeFrameCamera.png")}
                                />
                                <Text style={styles.takephoto}>
                                    Chụp hoặc tải ảnh lên
                                </Text>
                            </View>
                            <View style={styles.riceImg}>
                                <Image
                                    style={{ width: 77, height: 77 }}
                                    source={require("../assets/images/homeRiceImg.jpg")}
                                />
                            </View>
                        </View>
                        <Image
                            style={styles.chevron}
                            source={require("../assets/images/HomeChevron.png")}
                        />
                        <View style={styles.chandoan}>
                            <Image
                                style={{ width: 70, height: 120, top: 40 }}
                                source={require("../assets/images/HomeCheck.png")}
                            />
                            <Text style={styles.textchandoan}>
                                Xem chẩn đoán
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity
                            style={styles.openCam}
                            onPress={() => navigation.navigate("OpenCamera")}
                        >
                            <Text style={styles.textTakephoto}>Chụp ảnh</Text>
                            <AntDesign
                                name="camerao"
                                size={30}
                                color={COLORS.white}
                                style={styles.camerao}
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
        marginTop: 20,
        width: 350,
        height: 300,
        objectFit: "cover",
        borderRadius: 15,
    },
    safeview: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 30,
        height: "100%",
    },
    middleSection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    homeframe: {
        justifyContent: "center",
        alignItems: "center",
    },
    takephoto: {
        marginTop: 10,
        width: 100,
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: COLORS.black,
    },
    riceImg: {
        position: "absolute",
        left: 15,
        top: 17,
        justifyContent: "center",
        alignItems: "center",
    },
    chevron: {
        width: 30,
        height: 30,
        top: -10,
        marginLeft: 25,
        marginRight: 7,
    },
    chandoan: {
        justifyContent: "center",
        alignItems: "center",
    },
    textchandoan: {
        marginTop: 50,
        width: 100,
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: COLORS.black,
    },
    openCam: {
        height: 55,
        width: "70%",
        backgroundColor: COLORS.darkGreen,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,
        left: 50,
    },
    textTakephoto: {
        color: COLORS.white,
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        marginLeft: 40,
    },
    camerao: {
        width: 30,
        height: 58,
        position: "absolute",
        left: 50,
        top: 10,
    },
});

export default HomeScreen;
