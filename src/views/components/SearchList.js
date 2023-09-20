import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../const/colors";
import SearchDetailsScreen from "../SearchDetailsScreen";
const CARD_WIDTH = 150;
const CARD_HEIGHT = 163;

const SearchList = ({ list }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {list.map((item) => {
                return (
                    <TouchableOpacity
                        style={styles.cardContainer}
                        key={item.id}
                        onPress={() => {
                            navigation.navigate("SearchDetailsScreen", {
                                list: item,
                            });
                        }}
                    >
                        <View style={[styles.card]}>
                            <View style={styles.imageBox}>
                                <Image
                                    style={styles.image}
                                    source={item.image}
                                />
                            </View>
                            <View style={styles.footer}>
                                <View style={styles.titleBox}>
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    cardContainer: {
        marginRight: 20,
        marginTop: 25,
        marginLeft: 5,
        alignItems: "stretch",
    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: "#F2F7F4",
        borderRadius: 10,
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        objectFit: "cover",
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
        marginLeft: 16,
        marginRight: 10,
    },
    titleBox: {
        flex: 1,
    },
    title: {
        textAlign: "center",
        marginVertical: 4,
        fontSize: 13,
        color: COLORS.darkGreen,
        fontFamily: "Poppins-Regular",
        paddingTop: 5,
    },
});

export default SearchList;
