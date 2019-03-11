import React, { PureComponent } from 'react';
import { View, FlatList, Dimensions } from 'react-native';

import { ContentLoading, MainInfo, ListItem } from 'components';

import { colors } from 'shared/variables/colors';
import { CONSTANTS } from 'shared/variables/constants';
import { navigationStyle } from 'shared/config/navigation';

class Home extends PureComponent {
    static navigationOptions = {
        headerTitle: CONSTANTS.HOME,
        ...navigationStyle,
    };

    state = {
        data: [
            {
                id: 1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                checked: false,
            },
            {
                id: 2,
                text: 'Lorem ipsum dolor sit amet, consectetur.',
                checked: false,
            },
            {
                id: 3,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                checked: true,
            },
            {
                id: 4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                checked: true,
            },
            {
                id: 5,
                text: 'Lorem ipsum dolor sit amet,',
                checked: false,
            },
            {
                id: 6,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                checked: false,
            },
            {
                id: 7,
                text: 'Lorem ipsum dolor.',
                checked: true,
            },
        ],
        loading: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => ({
                loading: false,
            }))
        }, 500)
    }

    renderItem = ({ item }) => (
        <ListItem
            label={item.text}
            checked={item.checked}
        />
    );

    render() {
        const { loading, data } = this.state;
        return (
            <View style={styles.container}>
                <MainInfo navigation={this.props.navigation}/>

                <ContentLoading loading={loading}>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => `${index}-${item.id}`}
                        renderItem={this.renderItem}
                    />
                </ContentLoading>
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
};

export { Home };
