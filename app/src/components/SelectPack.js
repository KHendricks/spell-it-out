import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const SelectPack = (props) => {
    let command = "";
    let buttonStyle;
    if (props.command === "easy") {
        command = props.easy;
    } else if (props.command === "medium") {
        command = props.medium;
    } else if (props.command === "hard") {
        command = props.hard;
    }

    buttonStyle =
        props.command.toLowerCase() == props.wordPack.toLowerCase()
            ? styles.buttonStyleSelected
            : styles.buttonStyle;

    return (
        <View style={styles.viewStyle}>
            {/* Container with the list of all available word packs*/}
            <TouchableOpacity style={buttonStyle} onPress={command}>
                <Text style={styles.textStyle}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {},
    buttonStyle: {
        backgroundColor: "white",
        borderRadius: 12,
        width: 250,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 4,
        borderColor: "black",
        margin: 10,
    },
    buttonStyleSelected: {
        backgroundColor: "#d2e9af",
        borderRadius: 12,
        width: 250,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 4,
        borderColor: "black",
        margin: 10,
    },

    textStyle: { fontSize: 25, fontWeight: "bold" },
});

const mapStateToProps = (state) => {
    return { wordPack: state.wordPack };
};
const mapDispatchToProps = (dispatch) => {
    return {
        easy: () => dispatch({ type: "EASY_MODE" }),
        medium: () => dispatch({ type: "MEDIUM_MODE" }),
        hard: () => dispatch({ type: "HARD_MODE" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPack);
