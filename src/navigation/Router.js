import React from "react";
import{NavigationContainer} from "@react-navigation/native";
import{createStackNavigator} from "@react-navigation/stack";
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guest";

import HomeTabNavigator from "./HomeTabNavigator"
import PostScreen from "../screens/PostScreen";

const Stacks = createStackNavigator();

const Router = (props) => {
    return(

        <NavigationContainer>
            <Stacks.Navigator>
            <Stacks.Screen 
                name={"Home"}
                component={HomeTabNavigator} 
                options={{
                    headerShown: false
                }}
                />

                <Stacks.Screen 
                name={"Destination Search"}
                component={DestinationSearchScreen} 
                />

                <Stacks.Screen 
                name={"Guests"}
                component={GuestsScreen} 
                options={{title: "How many people?"}}
                />

                <Stacks.Screen 
                name={"Post"}
                component={PostScreen} 
                options={{title: "Guides"}}
                />
            </Stacks.Navigator>
        </NavigationContainer>

    );
};

export default Router;