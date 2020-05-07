import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from "react-native-popup-menu";

const InterfaceBar = (props) => {
    const SelectWordPack = () => {
        props.navigation.navigate("SelectPack");
    };
    const AddWordPack = () => {};

    return (
        <View style={styles.viewStyle}>
            {/* Wordpack Title*/}
            <Text style={styles.wordPackStyle}>{props.wordPack}</Text>

            {/* Options Button */}
            <Menu>
                <MenuTrigger>
                    <SimpleLineIcons name="options" style={styles.iconStyle} />
                </MenuTrigger>
                <MenuOptions>
                    <View
                        style={{
                            backgroundColor: "#e9e5e5",
                        }}
                    >
                        <Text style={styles.wordPackHeaders}>OPTIONS</Text>
                    </View>

                    <MenuOption
                        style={styles.menuTextStyle}
                        onSelect={SelectWordPack}
                        text="Select wordpack"
                    />
                </MenuOptions>
            </Menu>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 50,
        marginTop: Constants.statusBarHeight,
        marginBottom: 25,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    wordPackStyle: { marginLeft: 15, fontSize: 20, color: "#d1e8e2" },
    wordPackHeaders: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 4,
    },
    menuTextStyle: { alignSelf: "center" },
    iconStyle: {
        fontSize: 25,
        marginVertical: 5,
        marginHorizontal: 40,
        color: "#d1e8e2",
    },
});

const mapStateToProps = (state) => {
    return {
        wordPack: state.wordPack,
    };
};

export default connect(mapStateToProps)(InterfaceBar);
