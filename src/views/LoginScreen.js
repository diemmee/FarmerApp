import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    SafeAreaView,
    Image,
    StyleSheet,
    StatusBar,
    Text,
    View,
    Keyboard,
    TouchableOpacity,
    Alert,
} from "react-native";

import COLORS from "../const/colors";
import Input from "./components/Input";
import Button from "./components/Button";
import Loader from "./components/Loader";

const LoginScreen = ({ navigation }) => {
    const [inputs, setInputs] = useState({
        email: "",
        fullname: "",
        phone: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.email) {
            handleError("Vui lòng nhập email", "email");
            isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError("Vui lòng nhập địa chỉ email hợp lệ", "email");
            isValid = false;
        }

        if (!inputs.password) {
            handleError("Vui lòng nhập mật khẩu", "password");
            isValid = false;
        } else if (inputs.password.length < 6) {
            handleError("Mật khẩu có độ dài ít nhất 6 kí tự", "password");
            isValid = false;
        }

        if (isValid) {
            register();
        }
    };

    const register = () => {
        setLoading(true);
        setTimeout(() => {
            try {
                setLoading(false);
                AsyncStorage.setItem("user", JSON.stringify(inputs));
                navigation.navigate("Main");
            } catch (error) {
                Alert.alert("Error", "bà sai chỗ nào rồi đó bà");
            }
        }, 3000);
    };

    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }));
    };

    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
    };

    const [hidePassword, setHidePassword] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#085728" barStyle={"light-content"} />
            <Loader visible={loading} />
            <View>
                <View style={{ height: 150 }}>
                    <Text style={styles.title}>Farmer</Text>
                </View>
                <View style={styles.sectionWrap}>
                    <Text style={styles.Login}>Đăng nhập</Text>

                    {/*input */}
                    <View style={{ marginTop: 20 }}>
                        <Input
                            placeholder="Nhập vào địa chỉ email"
                            placeholderTextColor="#000"
                            label="Email"
                            onFocus={() => {
                                handleError(null, "email");
                            }}
                            onChangeText={(text) =>
                                handleOnChange(text, "email")
                            }
                            error={errors.email}
                        />
                    </View>

                    {/* password */}
                    <View>
                        <Input
                            placeholder="Nhập mật khẩu"
                            label="Mật khẩu"
                            placeholderTextColor="#000"
                            onFocus={() => {
                                handleError(null, "password");
                            }}
                            onChangeText={(text) =>
                                handleOnChange(text, "password")
                            }
                            error={errors.password}
                            password
                            secureTextEntry={hidePassword ? false : true}
                        />
                        <TouchableOpacity
                            style={styles.hidepass}
                            onPress={() => {
                                setHidePassword(!hidePassword);
                            }}
                        >
                            {hidePassword ? (
                                <Image
                                    source={require("../assets/images/eye.png")}
                                />
                            ) : (
                                <Image
                                    source={require("../assets/images/hidden.png")}
                                />
                            )}
                        </TouchableOpacity>
                    </View>

                    {/* button register */}
                    <View>
                        <Button title="Đăng nhập" onPress={validate} />
                        <TouchableOpacity>
                            <Text
                                onPress={() =>
                                    navigation.navigate("RegisterScreen")
                                }
                                style={styles.textRegister}
                            >
                                Chưa có tài khoản? Đăng ký
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.darkGreen,
        height: 500,
    },

    title: {
        marginTop: 40,
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 40,
        color: COLORS.white,
        fontFamily: "HappyMonkey-Regular",
    },

    sectionWrap: {
        height: "120%",
        backgroundColor: COLORS.white,
        paddingHorizontal: 30,
        borderRadius: 70,
    },

    Login: {
        marginTop: 40,
        fontFamily: "Poppins-Bold",
        fontSize: 25,
        textAlign: "center",
        color: COLORS.darkGreen,
    },
    hidepass: {
        width: 50,
        height: 58,
        marginTop: 20,
        position: "absolute",
        right: 0,
        top: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textRegister: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
});

export default LoginScreen;
