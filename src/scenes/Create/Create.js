import React, { Component } from 'react';
import { View, TextInput, Dimensions } from 'react-native';
import { Button, Text } from 'react-native-elements';
import uuid from 'uuid';

import { db } from 'database/connect';

import { colors } from 'shared/variables/colors';
import { CONSTANTS } from 'shared/variables/constants';
import { navigationStyle } from 'shared/config/navigation';

class Create extends Component {
    static navigationOptions = {
        headerTitle: CONSTANTS.CREATE,
        ...navigationStyle,
    };

    state = {
        text: null,
        error: null
    };

    handleDone = async () => {
        try {
            const realm = await db();
            realm.write(() => {
                realm.create('Item', {
                    id: uuid(),
                    text: this.state.text,
                    created: Date.now(),
                });
            });

            this.setState(() => ({ text: null }));
            this.props.navigation.navigate('Home');
        } catch (error) {
            this.setState({ error });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    editable={true}
                    autoFocus={true}
                    maxLength={200}
                    clearTextOnFocus={true}
                    scrollEnabled={true}
                    multiline={true}
                    onChangeText={text => this.setState(() => ({ text }))}
                    value={this.state.text}
                />
                <Button
                    title="Save"
                    disabled={!this.state.text}
                    onPress={() => this.handleDone()}
                    raised
                />
            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: colors.background,
        height: Dimensions.get('window').height,
        padding: 10,
        paddingTop: 20,
    },
    textInput: {
        backgroundColor: colors.white,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
        borderRadius: 5,
    },
};


export { Create };
