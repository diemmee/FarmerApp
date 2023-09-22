import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "../../const/colors";

const Button = ({ title, onPress = () => {} }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 55,
        width: "100%",
        backgroundColor: COLORS.darkGreen,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,
    },
    title: {
        color: COLORS.white,
        fontFamily: "Poppins-Medium",
        fontSize: 19,
    },
});

export default Button;
