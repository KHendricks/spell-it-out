import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";
import { connect } from "react-redux";
import PartOfWord from "../components/PartOfWord";
import PlayWord from "../components/PlayWord";
import InterfaceBar from "../components/InterfaceBar";
import SpellingInput from "../components/SpellingInput";

const SpellingScreen = (props) => {
    return (
        <ScrollView style={styles.viewStyle}>
            <InterfaceBar navigation={props.navigation} />
            <PlayWord />

            {/* Component that allows for user input, submission and clearing of the input*/}
            <SpellingInput />

            {/* Buttons that show the different parts of the words */}
            <PartOfWord useDefinition={true} />
            <PartOfWord useSentence={true} />
            <PartOfWord usePartOfSpeech={true} />

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                {/* Button for a New Word */}
                <TouchableOpacity
                    style={styles.newWordButtonStyle}
                    onPress={() => {
                        props.setInputText("");
                        props.newWord();
                    }}
                >
                    <Text style={styles.newWordButtonTextStyle}>NEW WORD</Text>
                </TouchableOpacity>

                {/* Button to reveal word */}
                <TouchableOpacity
                    style={styles.newWordButtonStyle}
                    onPress={() => {
                        props.setInputText(props.word);
                    }}
                >
                    <Text style={styles.newWordButtonTextStyle}>
                        REVEAL WORD
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: "#116466",
    },
    newWordButtonStyle: {
        backgroundColor: "#d9e9be",
        borderRadius: 12,
        width: 150,
        height: 40,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    newWordButtonTextStyle: { fontSize: 20, fontWeight: "bold" },
});

const mapStateToProps = (state) => {
    return {
        word: state.word,
        userInput: state.userInput,
        definition: state.definition,
        partOfSpeech: state.partOfSpeech,
        sentenceUsage: state.sentenceUsage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newWord: () => dispatch({ type: "NEW_WORD" }),
        setInputText: (userInput) =>
            dispatch({ type: "UPDATE_INPUT", userInput: userInput }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpellingScreen);
