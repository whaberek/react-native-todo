import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { colors } from 'shared/variables/colors';
import { CONSTANTS } from 'shared/variables/constants';

const MainInfo = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.title}>{CONSTANTS.INFO}</Text>
        <Button
            onPress={() => navigation.navigate('Create')}
            title={CONSTANTS.CREATE}
            raised
        />
    </View>
);

const styles = {
    container: {
        backgroundColor: colors.white,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        marginTop: 7,
        fontSize: 18,
        color: colors.text,
    },
};

export { MainInfo };
