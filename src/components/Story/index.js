import React from 'react';
import { Text, View } from 'react-native';
import ProfilePicture from '../../components/ProfilePicture';


const Story = ({ imageUri, name }) => {
    return (
        <View>
            <ProfilePicture uri={imageUri} />
            <Text>{name}</Text>
        </View>
    );
};

export default Story;