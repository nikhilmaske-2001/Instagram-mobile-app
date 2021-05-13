import React from 'react';
import { Text, View } from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';

const Header = ({ imageUri, name }) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri} size={40} />
            <Text style={styles.name}>{name}</Text>
            <Icon name="dots-three-vertical" size={20} />
        </View>
    )
};

export default Header;