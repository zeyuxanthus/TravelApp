import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        height: 120,
        padding: 5,

        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
            },
            
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
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
        fontSize: 12,
    },
    prices:{
        fontSize: 13,
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