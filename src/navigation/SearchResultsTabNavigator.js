import React from "react";
import {createMaterialTabNavigator, createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const SearchResultsTabNavigator = (props) => {

    const Tab = createMaterialTopTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen name={"list"} component = {SearchResults}/>
            <Tab.Screen name={"map"} component = {SearchResultsMap}/>


        </Tab.Navigator>

    );
};

export default SearchResultsTabNavigator