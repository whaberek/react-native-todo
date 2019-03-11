import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from 'shared/variables/colors'

const ContentLoading = ({ loading, children }) => (
    loading
        ? <ActivityIndicator
            style={styles.loader}
            size="large"
            color={colors.blue}
        />
        : children
);

const styles = StyleSheet.create({
    loader: {
        paddingTop: 20,
        paddingBottom: 20,
    },
});

export { ContentLoading }
