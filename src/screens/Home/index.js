import React from 'react';
import { 
    View,
    Text,
    ImageBackground,
    Pressable} 
    from 'react-native';
import styles from './styles';
import Fontisto from "react-native-vector-icons/Fontisto";
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

    return(
        <View>
            <Pressable
            style={styles.searchButton}
            onPress= {() => navigation.navigate('Destination Search')}
            >
                <Fontisto name="search" size={25} color={"#58ACFA"} />
                <Text style={styles.searchButtonText}>Where do you want to explore?</Text>
            </Pressable>

            <ImageBackground source={require('../../../assets/images/rainbow.jpg')} style={styles.image}>

            <Text style={styles.title}>Welcome to Travel</Text>

            <Pressable
            style={styles.button}
            onPress= {() => console.warn('Explore button clicked')}
            >
                <Text style={styles.buttonText}>Explore locally</Text>
            </Pressable>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;