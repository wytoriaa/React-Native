import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import ListUsers from './ListUsers';
import AddUsers from './AddUsers';
import EditUsers from './EditUsers';
import DeleteUsers from './DeleteUsers';

const Stack = createStackNavigator();
export default function Principal(){
    return (
          <Stack.Navigator initialRouteName="ListUsers">
              <Stack.Screen name="ListUsers" component={ListUsers} />
              <Stack.Screen name="AddUsers" component={AddUsers}/>
              <Stack.Screen name="EditUsers" component={EditUsers}/>
              <Stack.Screen name="DeleteUsers" component={DeleteUsers}/>
          </Stack.Navigator>
        
      );
}