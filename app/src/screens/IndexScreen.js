import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const IndexScreen = (props) => {
    return (
        <View style={styles.viewStyle}>
            {/* Go to the spelling screen */}
            <TouchableOpacity
                style={styles.startButtonStyle}
                onPress={() => props.navigation.navigate("Spelling")}
            >
                <Text style={styles.startButtonText}>START QUIZZING</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: { flex: 1, alignItems: "center" },
    startButtonStyle: {
        backgroundColor: "red",
        borderRadius: 12,
        width: 200,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    startButtonText: {
        fontSize: 20,
    },
});

export default IndexScreen;
