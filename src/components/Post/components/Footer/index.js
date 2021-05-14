import React, { useState, useEffect } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Footer = ({ likesCount: likesCountProps, caption, postedAt }) => {

    const [isLiked, setIsLike] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const onLikeClicked = () => {
        setIsLike(!isLiked);
        const ammount = isLiked ? -1 : 1;
        setLikesCount(likesCount + ammount);
    };

    useEffect(() => {
        setLikesCount(likesCountProps);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikeClicked}>
                        {isLiked ? <AntDesign name="heart" size={25} color={'#ff1212'} />
                            : <AntDesign name="hearto" size={25} color={'#545454'} />
                        }
                    </TouchableWithoutFeedback>
                    <FontAwesome name="comment-o" size={23} color='#545454' />
                    <Ionicons name="paper-plane-outline" size={25} color='#545454' />
                </View>
                <View style={styles.rightIcons}>
                    <FontAwesome name="bookmark-o" size={25} color='#545454' />
                </View>
            </View>
            <Text style={styles.likesCount}>{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
};

export default Footer;