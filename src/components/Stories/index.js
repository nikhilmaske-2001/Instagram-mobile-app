import React from 'react';
import { FlatList, View } from 'react-native';
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
    }, {
        imageUri: "https://i.pinimg.com/originals/91/9d/f0/919df067a8fbd22ce7b6f401b7688b35.png",
        name: 'Whatsapp',
    }, {
        imageUri: "https://i.pinimg.com/originals/2d/2b/e2/2d2be2421911037d80f9921dc29d54c2.jpg",
        name: 'Youtube',
    }, {
        imageUri: "https://i.pinimg.com/originals/c0/44/d1/c044d19025e6939e49af34610e2694d7.png",
        name: 'LinkedIn',
    }, {
        imageUri: "https://cdn.worldvectorlogo.com/logos/pinterest-1.svg",
        name: 'Printerest',
    }
]

const Stories = () => {
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={({ name }) => name}
            renderItem={({ item }) => <Story imageUri={item.imageUri} name={item.name} />}
        />
    );
};

export default Stories;