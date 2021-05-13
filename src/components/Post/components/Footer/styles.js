import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    likesCount: {
        fontWeight: 'bold',
        margin: 3,
    },
    caption: {
        margin: 3,
    },
    postedAt: {
        margin: 3,
        color: '#8c8c8c',
    },
    iconContainer: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 105,
    },
});

export default styles;