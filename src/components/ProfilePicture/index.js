import React from 'react';
import { View, Image } from 'react-native';
import styles from "./styles";

const ProfilePicture = ({ uri }) => (
    <View style={styles.container}>
        <Image
            style={styles.ProfilePicture}
            source={{ uri: uri }}
        />
    </View>
);

export default ProfilePicture;