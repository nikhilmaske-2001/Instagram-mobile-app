import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const data = [
    {
        user: {
            imageUri: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
            name: "Facebook",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: "1234",
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        user: {
            imageUri: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
            name: "Facebook",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: "1234",
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        user: {
            imageUri: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
            name: "Facebook",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: "1234",
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        user: {
            imageUri: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
            name: "Facebook",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: "1234",
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        user: {
            imageUri: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
            name: "Facebook",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: "1234",
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
    {
        user: {
            imageUri: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
            name: "Facebook",
        },
        imageUri: "https://i.pinimg.com/originals/37/28/7d/37287df47571dd2ca5949a4968366efe.jpg",
        likesCount: "1234",
        caption: "Beautiful nature picture",
        postedAt: "5 minutes ago",
    },
]

const Feed = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Post post={item} />}
            ListHeaderComponent={Stories}
        />

    );
};

export default Feed;