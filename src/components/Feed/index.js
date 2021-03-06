import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const data = [
    {
        id: '1',
        user: {
            imageUri: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
            name: "Facebook",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: 1234,
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        id: '2',
        user: {
            imageUri: "https://i.pinimg.com/originals/65/a4/24/65a4240ae9174aa1e5f3af541faba57b.jpg",
            name: "Snapchat",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: 134,
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        id: '3',
        user: {
            imageUri: "https://i.pinimg.com/474x/21/29/59/212959f2ca79435e4a6b338f69a9efbc--twitter-icon-twitter-app.jpg",
            name: "Twitter",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: 1342,
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        id: '4',
        user: {
            imageUri: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            name: "Github",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: 1234,
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        id: '5',
        user: {
            imageUri: "https://i.pinimg.com/originals/91/9d/f0/919df067a8fbd22ce7b6f401b7688b35.png",
            name: "Whatsapp",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: 15788,
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        id: '6',
        user: {
            imageUri: "https://i.pinimg.com/originals/2d/2b/e2/2d2be2421911037d80f9921dc29d54c2.jpg",
            name: "Youtube",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: 2345,
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        id: '7',
        user: {
            imageUri: "https://i.pinimg.com/originals/c0/44/d1/c044d19025e6939e49af34610e2694d7.png",
            name: "LinkedIn",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: 345,
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        id: '8',
        user: {
            imageUri: "https://i.pinimg.com/474x/13/bc/eb/13bceb594ac9faf0ecd37638c81ffea7.jpg",
            name: "Printerest",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: 125677,
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
]

const Feed = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={Stories}
        />

    );
};

export default Feed;