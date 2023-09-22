import React, { useEffect, useRef, useState } from "react";
import {
    View,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
} from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { launchImageLibrary } from "react-native-image-picker";

import COLORS from "../const/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const OpenCamera = ({ navigation }) => {
    const camera = useRef(null);
    const devices = useCameraDevices();
    const device = devices.back;

    const [showCamera, setShowCamera] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [imageSource, setImageSource] = useState();
    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {
        const checkPermission = async () => {
            const NewCameraPermission = await Camera.requestCameraPermission();
            console.log(NewCameraPermission);
        };
        checkPermission();
    }, []);

    const capturePhoto = async () => {
        if (camera.current !== null) {
            const photo = await camera.current.takePhoto({});
            setImageSource(photo.path);
            setShowCamera(true);
            setShowGallery(false);
            console.log(photo.path);
        }
    };

    const OpenGallary = async () => {
        let options = {
            mediaType: "photo",
        };
        const result = await launchImageLibrary(options);
        if (!result.didCancel) {
            setSelectedImage(result.assets[0].uri);
            setShowGallery(true);
        }
    };

    if (device == null) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator></ActivityIndicator>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <StatusBar backgroundColor={COLORS.black}></StatusBar>
            {showCamera ? (
                <View style={styles.capture}>
                    {imageSource !== "" ? (
                        <Image
                            source={{ uri: `file://'${imageSource}` }}
                            style={styles.captureImg}
                        />
                    ) : null}

                    <TouchableOpacity
                        style={styles.closeTouch}
                        onPress={() => {
                            setShowCamera(false);
                        }}
                    >
                        <AntDesign
                            style={styles.close}
                            name="close"
                            size={25}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.checkCircle}>
                        <AntDesign
                            name="checkcircle"
                            size={70}
                            color={"green"}
                        />
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    {showGallery && (
                        <View style={{ flex: 1 }}>
                            {selectedImage ? (
                                <Image
                                    source={{ uri: selectedImage }}
                                    style={styles.selectedImage}
                                />
                            ) : null}

                            <TouchableOpacity
                                style={styles.closeGallary}
                                onPress={() => {
                                    setShowGallery(false);
                                }}
                            >
                                <AntDesign
                                    style={styles.close}
                                    name="close"
                                    size={25}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.checkCircleGallary}>
                                <AntDesign
                                    name="checkcircle"
                                    size={70}
                                    color={"green"}
                                />
                            </TouchableOpacity>
                        </View>
                    )}

                    {!showGallery && (
                        <>
                            <Camera
                                ref={camera}
                                style={StyleSheet.absoluteFill}
                                device={device}
                                isActive={true}
                                photo={true}
                            />
                            <TouchableOpacity style={styles.arrowLeft}>
                                <AntDesign
                                    style={styles.arrow}
                                    name="arrowleft"
                                    size={25}
                                    color={COLORS.white}
                                    onPress={navigation.goBack}
                                />
                            </TouchableOpacity>
                            <View style={styles.openGallary}>
                                <TouchableOpacity onPress={() => OpenGallary()}>
                                    <Image
                                        source={require("../assets/images/cameraPhoto.png")}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        capturePhoto();
                                    }}
                                >
                                    <Image
                                        style={{
                                            alignSelf: "center",
                                        }}
                                        source={require("../assets/images/circle.png")}
                                    />
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    loading: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    capture: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    captureImg: {
        width: "160%",
        height: "51%",
        borderRadius: 20,
        top: -70,
        transform: [{ rotate: "270deg" }],
    },
    close: {
        zIndex: 10,
        position: "absolute",
        width: 40,
        height: 40,
        borderRadius: 20,
        paddingTop: 7,
        paddingLeft: 7,
        backgroundColor: COLORS.white,
        color: COLORS.black,
    },
    closeTouch: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: 20,
        width: 60,
        height: 60,
        left: 20,
    },
    checkCircle: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        bottom: 40,
    },
    selectedImage: {
        width: "100%",
        height: "85%",
        borderRadius: 20,
    },
    closeGallary: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: 20,
        width: 60,
        height: 60,
        left: 20,
    },
    checkCircleGallary: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        bottom: 30,
    },
    arrowLeft: {
        top: 20,
        left: 20,
        width: 50,
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    openGallary: {
        flexDirection: "row",
        position: "absolute",
        width: "120%",
        height: 130,
        backgroundColor: COLORS.white,
        backgroundColor: "black",
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        marginLeft: -80,
    },
});

export default OpenCamera;
