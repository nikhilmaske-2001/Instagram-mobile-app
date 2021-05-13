import React from 'react';
import Header from '../Post/components/Header';
import Body from '../Post/components/Body';
import Footer from '../Post/components/Footer';
import { View } from 'react-native';


const Post = ({ post }) => {
    return (
        <View>
            <Header imageUri={post.user.imageUri} name={post.user.name} />
            <Body imageUri={post.imageUri} />
            <Footer
                likesCount={post.likesCount}
                caption={post.caption}
                postedAt={post.postedAt}
            />
        </View>
    );
};

export default Post;