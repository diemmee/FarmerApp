import React from "react";
import {
    FlatList,
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import COLORS from "../const/colors";
import { useNavigation } from "@react-navigation/native";
// import SearchDetails from "./components/SearchDetails";
// import { RiceDiseases } from "../data/info";
import { Unorderedlist, UL, LI } from "react-native-unordered-list";

const SearchDetailsScreen = ({ route }) => {
    const navigation = useNavigation();
    const { list } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <AntDesign
                    style={styles.arrow}
                    name="arrowleft"
                    size={25}
                    color={"grey"}
                    onPress={navigation.goBack}
                />
                <Text style={styles.Diseasetitle}>{list.title} </Text>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={list.image} />
                </View>
            </View>

            <View style={styles.descContainer}>
                <View>
                    <Text style={styles.title}>Triệu chứng</Text>
                    <View style={styles.detail}>
                        {list.trieuChung.map((trieuChungItem, index) => (
                            <View key={index} style={styles.listItem}>
                                <Text
                                    style={{
                                        color: "#76817E",
                                        marginRight: 10,
                                    }}
                                >
                                    •
                                </Text>
                                <Text style={styles.desc}>
                                    {trieuChungItem}
                                </Text>
                            </View>
                        ))}
                        <Text style={styles.desc}>
                            {list.trieuChungTongQuat}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Nguyên nhân gây bệnh</Text>
                    <View style={styles.detail}>
                        <Text style={styles.desc}>{list.nguyenNhan}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Biện pháp phòng ngừa</Text>
                    <View style={styles.detail}>
                        {list.bienPhapPhongNgua.map(
                            (bienPhapPhongNguaItem, index) => (
                                <View key={index} style={styles.listItem}>
                                    <Text
                                        style={{
                                            color: "#76817E",
                                            marginRight: 10,
                                        }}
                                    >
                                        •
                                    </Text>
                                    <Text style={styles.desc}>
                                        {bienPhapPhongNguaItem}
                                    </Text>
                                </View>
                            )
                        )}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        bottom: 0,
    },
    container: {
        height: "100%",
        backgroundColor: "white",
    },
    header: {
        backgroundColor: "#F2F7F4",
        paddingHorizontal: 30,
        paddingVertical: 30,
    },

    descContainer: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    image: {
        width: "100%",
        height: 139,
        borderRadius: 15,
    },
    arrow: {
        width: 40,
        height: 40,
        textAlign: "center",
        justifyContent: "center",
        borderRadius: 20,
        paddingTop: 7,
    },

    Diseasetitle: {
        color: COLORS.black,
        paddingVertical: 10,
        fontFamily: "Poppins-Medium",
        fontSize: 15,
    },

    title: {
        color: COLORS.black,
        paddingVertical: 10,
        fontFamily: "Poppins-Medium",
        fontSize: 13,
    },
    desc: {
        paddingVertical: 5,
        color: COLORS.black,
        fontFamily: "Poppins-Light",
        fontSize: 13,
        textAlign: "auto",
        flexWrap: "wrap",
    },
    detail: {
        paddingHorizontal: 10,
    },
});

export default SearchDetailsScreen;
