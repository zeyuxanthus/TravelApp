import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        height: 120,
        padding: 5,
    },

    innerContainer: {
        flexDirection:'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden' //Everything that goes outside the inner container is hidden
    },

    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },

    bedrooms: {
        marginVertical: 5,
        color:'#5b5b5b',

        
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices:{
        fontSize: 15,
        marginVertical: 5,
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