import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";

const SpellingInput = (props) => {
    // 0 - Incorrect
    // 1 - Normal
    // 2 - Correct
    const [wordCheck, setWordCheck] = useState(1);
    const [waitingOnSubmission, setWaitingOnSubmission] = useState(false);
    const checkWord = () => {
        if (!waitingOnSubmission) {
            // This is to prevent multiple queues of the button press
            setWaitingOnSubmission(true);
            setTimeout(() => setWaitingOnSubmission(false), 1000);

            // Word Matches
            if (props.userInput.toLowerCase() === props.word.toLowerCase()) {
                setTimeout(() => setWordCheck(2), 0);
                setTimeout(() => setWordCheck(1), 500);
                setTimeout(() => props.newWord(), 500);
                setTimeout(() => clearInputText(), 500);
            }
            // Word is empty
            else if (props.userInput === "") {
            }
            // Word does not match
            else {
                setTimeout(() => setWordCheck(0), 0);
                setTimeout(() => setWordCheck(1), 500);
            }
        }
    };

    const clearInputText = () => {
        props.setInputText("");
        setWordCheck(1);
    };

    return (
        <View>
            {/* Text box for user input */}
            <TextInput
                style={
                    wordCheck === 0
                        ? styles.textInputStyleIncorrect
                        : wordCheck === 1
                        ? styles.textInputStyle
                        : styles.textInputStyleCorrect
                }
                placeholder="Type answer here"
                onChangeText={(inputText) => props.setInputText(inputText)}
                value={props.userInput}
                autoCorrect={false}
            />

            {/* View Row for clear and submit buttons */}
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.submitButtonStyle}
                    onPress={checkWord}
                >
                    <AntDesign name="right" style={styles.iconStyle} />
                    <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: "#fff",
        height: 70,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 12,
        borderWidth: 5,
        borderColor: "#123c69",
        textAlign: "center",
        fontSize: 30,
    },
    textInputStyleIncorrect: {
        backgroundColor: "red",
        height: 70,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 12,
        borderWidth: 5,
        borderColor: "#005488",
        textAlign: "center",
        fontSize: 30,
    },
    textInputStyleCorrect: {
        backgroundColor: "green",
        height: 70,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 12,
        borderWidth: 5,
        borderColor: "#005488",
        textAlign: "center",
        fontSize: 30,
    },
    buttonRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    submitButtonStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d9e9be",
        height: 50,
        width: 150,
        marginVertical: 10,
        marginHorizontal: 50,
        borderRadius: 100,
    },
    buttonText: { fontSize: 16 },
    iconStyle: { fontSize: 35 },
});

const mapStateToProps = (state) => {
    return {
        word: state.word,
        userInput: state.userInput,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newWord: () => dispatch({ type: "NEW_WORD" }),
        setInputText: (userInput) =>
            dispatch({ type: "UPDATE_INPUT", userInput: userInput }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpellingInput);
