import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';


const Body = ({ imageUri }) => {
    return (
        <View>
            <Image
                source={{ uri: imageUri }}
                style={styles.image}
            />
        </View>
    )
};

export default Body;