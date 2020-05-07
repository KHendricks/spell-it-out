import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { MenuProvider } from "react-native-popup-menu";

// Redux
import { Provider } from "react-redux";
import store from "./src/store";

// Screens
import SpellingScreen from "./src/screens/SpellingScreen";
import IndexScreen from "./src/screens/IndexScreen";
import SelectPackScreen from "./src/screens/SelectPackScreen";

const navigator = createStackNavigator(
    {
        Index: IndexScreen,
        Spelling: SpellingScreen,
        SelectPack: SelectPackScreen,
    },
    {
        initialRouteName: "Spelling",
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
);

const App = createAppContainer(navigator);

export default () => {
    return (
        <Provider store={store}>
            <MenuProvider>
                <App />
            </MenuProvider>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {},
});
