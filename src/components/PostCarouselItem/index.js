import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const PostCarouselItem = (props) => {

    const post = props.post;
    const width = useWindowDimensions().width;

    const navigation = useNavigation();

    const goToPostPage =() => {
        navigation.navigate('Post', {postId:post.id});
    
    }

    return (
        <Pressable onPress={goToPostPage} style = {[styles.container,{width:width - 60}]}>
        <View style = {styles.innerContainer}>
        {/* Image */}
         <Image 
          style={styles.image}
          source={{uri:post.image}}
         />

            <View style={{flex:1, marginHorizontal:10}}>
                {/* Bed & Bedroom */}
                {/* <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>  */}
                <Text style={styles.bedrooms}>{post.name}   {post.rating}/5.0</Text>

                {/* Type & Description */}
                <Text style={styles.description} numberOfLines={6}>
                    {post.type}, {post.title}
                </Text>

                {/* Old price & new price*/}
                <Text style={styles.prices}>
                    <Text style={styles.price}>${post.newPrice}/day</Text>
                </Text>

            </View>
         </View>
        </Pressable>
    );
};

export default PostCarouselItem