import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import COLORS from "../const/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RiceDiseases } from "../data/info";
import SearchList from "./components/SearchList";

const SearchScreen = () => {
    const [search, setSearch] = useState();

    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
        setIsPressed(!isPressed);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ height: 100 }}>
                    <Text style={styles.title}>Farmer</Text>
                </View>
                <View style={styles.SearchContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            style={styles.field}
                            placeholder="Tìm kiếm "
                            placeholderTextColor="grey"
                            value={search}
                            onChangeText={setSearch}
                        />
                        <View pointerEvents="none">
                            <AntDesign
                                style={styles.searchIcon}
                                name="search1"
                            />
                        </View>
                    </View>

                    <SearchList list={RiceDiseases} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        height: "100%",
    },

    SearchContainer: {
        paddingHorizontal: 30,
        flex: 1,
        paddingVertical: 30,
    },

    title: {
        marginTop: 30,
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 40,
        color: COLORS.darkGreen,
        fontFamily: "HappyMonkey-Regular",
    },

    field: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        height: 50,
        shadowColor: "red",
        paddingHorizontal: 20,
        width: "100%",
        color: COLORS.black,
        shadowColor: COLORS.black,
        elevation: 5,
    },

    searchIcon: {
        position: "absolute",
        fontSize: 30,
        backgroundColor: COLORS.darkGreen,
        width: 50,
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 10,
        right: 1,
        color: COLORS.white,
        borderRadius: 10,
    },
});

export default SearchScreen;
