import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Footer = ({ likesCount, caption, postedAt }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.leftIcons}>
                    <AntDesign name="hearto" size={25} color='#545454' />
                    <FontAwesome name="comment-o" size={23} color='#545454' />
                    <Ionicons name="paper-plane-outline" size={25} color='#545454' />
                </View>
                <View style={styles.rightIcons}>
                    <FontAwesome name="bookmark-o" size={25} color='#545454' />
                </View>
            </View>
            <Text style={styles.likesCount}>{likesCount}</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
};

export default Footer;