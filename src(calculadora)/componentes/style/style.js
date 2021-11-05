import{StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    //header:{
        //backgroundColor: '#816FE8',
        //height: 60,
        //justifyContent: 'center',
        //alignItems: 'center',
        //fontSize: 500,
        
    //},
    content:{
        backgroundColor: '#CFC7FF',
        height: 760,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer:{
        backgroundColor: '#3A3269',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor: '#816FE8',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:5,
        marginHorizontal: 8,
        margin: 5,
        textAlign: 'auto',
        
    },
    textButton:{
        textAlign: 'center',
    },
    line: {
        width: 300,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        justifyContent: 'center',
        textAlign: 'center'
        

    },
    textLight:{
       color: 'white'
    }   
})