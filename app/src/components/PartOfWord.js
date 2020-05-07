import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";

const PartOfWord = (props) => {
    let displayWord = "";
    let typeOfWord = "";
    let isEnabled = false;
    let updateDisplay;

    if (props.useDefinition) {
        displayWord = props.definition;
        typeOfWord = "Definition";
        isEnabled = props.displayDefinition;
        updateDisplay = props.updateDefinition;
    } else if (props.usePartOfSpeech) {
        displayWord = props.partOfSpeech;
        typeOfWord = "Part of Speech";
        isEnabled = props.displayPartOfSpeech;
        updateDisplay = props.updatePartOfSpeech;
    } else if (props.useSentence) {
        displayWord = props.sentenceUsage;
        typeOfWord = "Sentence";
        isEnabled = props.displaySentence;
        updateDisplay = props.updateSentence;
    } else {
        displayWord = "This should not be seen";
    }
    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={updateDisplay}
            >
                {isEnabled ? (
                    <Text style={styles.textStyle}>{displayWord}</Text>
                ) : (
                    <Text style={styles.textStyle}>{typeOfWord}</Text>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 12,
        height: 90,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        marginVertical: 4,
        backgroundColor: "#d1e8e2",
    },
    viewStyle: {},
    textStyle: {
        fontSize: 16,
        color: "#2c3531",
        marginHorizontal: 5,
        textAlign: "center",
    },
});

const mapStateToProps = (state) => {
    return {
        word: state.word,
        definition: state.definition,
        partOfSpeech: state.partOfSpeech,
        sentenceUsage: state.sentenceUsage,
        displayDefinition: state.displayDefinition,
        displaySentence: state.displaySentence,
        displayPartOfSpeech: state.displayPartOfSpeech,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateDefinition: () => dispatch({ type: "UPDATE_DEFINITION_DISPLAY" }),
        updateSentence: () => dispatch({ type: "UPDATE_SENTENCE_DISPLAY" }),
        updatePartOfSpeech: () =>
            dispatch({ type: "UPDATE_PARTOFSPEECH_DISPLAY" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PartOfWord);
