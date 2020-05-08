import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SelectPack from "../components/SelectPack";
import Constants from "expo-constants";
import { connect } from "react-redux";

const SelectPackScreen = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.wordPack}</Text>

            <SelectPack title="Easy Words" command="easy" />
            <SelectPack title="Medium Words" command="medium" />
            <SelectPack title="Hard Words" command="hard" />

            {/* Go back to the spelling screen */}
            <TouchableOpacity
                style={styles.startButtonStyle}
                onPress={() => props.navigation.navigate("Spelling")}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.iconStyle}>CONTINUE</Text>
                    <AntDesign name="arrowright" style={styles.iconStyle} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewStyle: {
        marginTop: 10,
    },
    textStyle: {
        marginTop: Constants.statusBarHeight,
        fontSize: 50,
    },
    viewStyle: {
        flex: 1,
        backgroundColor: "#116466",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconStyle: { fontSize: 30, margin: 15 },
});

const mapStateToProps = (state) => {
    return {
        wordPack: state.wordPack,
    };
};

export default connect(mapStateToProps)(SelectPackScreen);
