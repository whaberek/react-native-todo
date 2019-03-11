import React, {} from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from 'shared/variables/colors';

const ListItem = ({ label, checked }) => (
    <View style={styles.container}>
        <Text style={styles.text}>
            {label}
        </Text>
        <Icon
            raised
            name={checked ? 'check' : 'minus'}
            type='font-awesome'
            color={checked ? colors.accent : colors.header}
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
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        flexWrap: 'wrap',
        flex: 1,
        fontSize: 15,
        paddingRight: 10,
        color: colors.text,
    },
};

export { ListItem };
