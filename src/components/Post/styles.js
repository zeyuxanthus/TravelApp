import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        margin: 20,

    },

    image: {
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    bedrooms: {
        alignSelf:'center',
        marginVertical: 5,
       // color:'#5b5b5b',

        
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices:{
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color:'#5b5b5b',
        textDecorationLine:'line-through'
    },
    price:{
        fontWeight: 'bold',
    },
    totalPrice:{
        textDecorationLine: "underline",
        color: '#5b5b5b'
    },
});

export default styles;