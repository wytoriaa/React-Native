import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    titleDark:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    titleLight:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    subtitleDark:{
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    header: {
        flex: 1,
        backgroundColor: '#00BCD4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 9,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20
    },
    input: {
        height: 60,
        width: '100%',
        borderWidth: 1,
        padding: 10
    },
    container: {
        flex: 1
    }
})