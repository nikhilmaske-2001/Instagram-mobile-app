import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#3c3c3c'
    },
    left: {
        flexDirection: 'row',
    },
    right: {
        margin: 10,
    }
});
export default styles;