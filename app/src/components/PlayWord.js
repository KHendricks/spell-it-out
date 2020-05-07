import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as Speech from "expo-speech";

const PlayWord = (props) => {
    const playSound = () => {
        if (props.userInput !== null) {
            Speech.stop();
            Speech.speak(props.word, { rate: 0.8 });
        }
    };

    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress={playSound}>
                <Text style={styles.textStyle}>LISTEN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 100,
        height: 50,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        backgroundColor: "#d1e8e2",
    },
    viewStyle: {},
    textStyle: {
        fontSize: 30,
        color: "#2c3531",
        fontWeight: "bold",
    },
});

const mapStateToProps = (state) => {
    return {
        word: state.word,
    };
};

export default connect(mapStateToProps)(PlayWord);
