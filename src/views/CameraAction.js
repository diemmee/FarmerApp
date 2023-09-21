import React, { useEffect, useRef, useState } from "react";
import {
    View,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
} from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import COLORS from "../const/colors";

const CameraAction = ({}) => {
    // const [imageUri, setImageUri] = useState("");
    const camera = useRef(null);
    const devices = useCameraDevices();
    const device = devices.back;

    // const [showCamera, setShowCamera] = useState(false);
    const [imageData, setImageData] = useState("");
    const [takePhotoClicked, setTakePhotoClicked] = useState(false);

    useEffect(() => {
        // async function getPermission() {
        //     const permission = await Camera.requestCameraPermission();
        //     console.log(permission);
        // }
        // getPermission();
        checkPermission();
    }, []);

    const checkPermission = async () => {
        const newMicrophonePermission =
            await Camera.requestMicrophonePermission();
        const NewCameraPermission = await Camera.requestCameraPermission();
        console.log(NewCameraPermission);
    };

    // const capturePhoto = async () => {
    //     if (camera.current !== null) {
    //         const photo = await camera.current.takePhoto({});
    //         setImageSource(photo.path);
    //         setShowCamera(false);
    //         console.log(photo.path);
    //     }
    // };
    if (device == null) return <ActivityIndicator />;

    // const openCamera = () => {
    //     let options = {
    //         storageOption: {
    //             path: "images",
    //             mediaType: "photo",
    //         },
    //         includeBase64: true,
    //     };

    // launchCamera(options, (response) => {
    //     console.log("Response = ", response);
    //     if (response.didCancel) {
    //         console.log("User hủy chọn");
    //     } else if (response.error) {
    //         console.log("ImagePicker error: ", response.error);
    //     } else if (response.customButton) {
    //         console.log("User tap : ", response.customButton);
    //     } else {
    //         const source = {
    //             uri: "data:image/jpeg;base64," + response.base64,
    //         };
    //         setImageUri(source);
    //     }
    // });
    const takePicture = async () => {
        if (camera != null) {
            const photo = await camera.current.takePhoto();
            setImageData(photo.path);
            setTakePhotoClicked(true);
            console.log(photo.path);
        }
    };
    return (
        <View style={{ flex: 1 }}>
            {takePhotoClicked ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {imageData !== "" && (
                        <Image
                            source={{ uri: "file://" + imageData }}
                            style={{ width: "100%", height: '100%' }}
                        />
                    )}
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            width: "90%",
                            height: 50,
                            borderWidth: 1,
                            alignSelf: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            bottom: 10,
														backgroundColor: 'green'
                        }}
                        onPress={() => {
                            setTakePhotoClicked(false);
                        }}
                    >
                        <Text style={{ color: "black" }}>chụp lại</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={camera}
                        style={StyleSheet.absoluteFill}
                        device={device}
                        isActive={true}
                        photo
                    />
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            width: 60,
                            height: 60,
                            borderRadius: 35,
                            backgroundColor: COLORS.white,
                            bottom: 60,
                            alignSelf: "center",
                        }}
                        onPress={() => {
                            takePicture();
                        }}
                    ></TouchableOpacity>
                </View>
            )}

            {/* <TouchableOpacity
                style={{
                    position: "absolute",
                    width: 70,
                    height: 70,
                    bottom: 40,
                    left: 60,
                }}
                onPress={openCamera}
            >
                <Image source={require("../assets/images/cameraPhoto.png")} />
            </TouchableOpacity> */}
            {/* <Image source={imageUri} /> */}
        </View>
    );
};

export default CameraAction;
