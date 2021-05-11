import React from 'react';
import { View } from 'react-native';
import Story from '../Story';

const data = [
    {
        imageUri: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
        name: 'Facebook',
    }, {
        imageUri: "https://i.pinimg.com/originals/65/a4/24/65a4240ae9174aa1e5f3af541faba57b.jpg",
        name: 'Snapchat',
    }, {
        imageUri: "https://i.pinimg.com/474x/21/29/59/212959f2ca79435e4a6b338f69a9efbc--twitter-icon-twitter-app.jpg",
        name: 'Twitter',
    }, {
        imageUri: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        name: 'Github',
    }
]

const Stories = () => {
    return (
        <View>
            <Story imageUri={data[0].imageUri} name={data[0].name} />
            <Story imageUri={data[1].imageUri} name={data[1].name} />
            <Story imageUri={data[2].imageUri} name={data[2].name} />
            <Story imageUri={data[3].imageUri} name={data[3].name} />
        </View>
    );
};

export default Stories;