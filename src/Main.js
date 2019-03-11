import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { Home, Create } from 'scenes';

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Create: Create,
    },
    {
        initialRouteName: 'Home',
    },
);

const AppContainer = createAppContainer(AppNavigator);

class MainApp extends Component {
    render() {
        return <AppContainer/>;
    }
}

export { MainApp };
