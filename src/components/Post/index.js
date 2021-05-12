import React from 'react';
import Header from '../Post/components/Header';
import Body from '../Post/components/Body';
import Footer from '../Post/components/Footer';
import { View } from 'react-native';


const Post = () => {
    return (
        <View>
            <Header />
            <Body />
            <Footer />
        </View>
    );
};

export default Post;