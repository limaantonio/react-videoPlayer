import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import VideosListScreen from './pages/List';
import VideoPlayerScreen from './pages/Player';


const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Video List" component={VideosListScreen}/>
        <Stack.Screen name="Video Player" component={VideoPlayerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}