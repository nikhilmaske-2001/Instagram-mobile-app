import React from 'react';
import { Text, View } from 'react-native';
import ProfilePicture from '../../components/ProfilePicture';

const HomeScreen = () => {
    return (
        <View>
            < Text > Hello World</Text >
            <ProfilePicture uri={"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"} />
            <ProfilePicture uri={"https://i.pinimg.com/originals/65/a4/24/65a4240ae9174aa1e5f3af541faba57b.jpg"} />
            <ProfilePicture uri={"https://i.pinimg.com/474x/21/29/59/212959f2ca79435e4a6b338f69a9efbc--twitter-icon-twitter-app.jpg"} />
            <ProfilePicture uri={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} />
        </View>
    );
};

export default HomeScreen;