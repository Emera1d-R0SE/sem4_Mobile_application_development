// rnfes


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';






const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'
    screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 12
        },
        tabBarStyle: {
          height: 60
        }    
      }}
    >
      <Tab.Screen name="Home" component={Home}
       options={{tabBarActiveTintColor:'blue' ,
        tabBarIcon:({color, size}) => {
          <Icon name="home" size={size} color="rgb(232, 9, 9)" />
        }
       }}
      />
      <Tab.Screen name="Profile" component={Profile}
      options={{tabBarActiveTintColor:'blue' ,
        tabBarIcon:({color, size}) => {
          <Icon name="profile" size={size} color="rgb(232, 9, 9)" />
        }
       }}/>
    </Tab.Navigator>
  );
}




function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}


const App = () => {
  return (
     <NavigationContainer>
      {/* <StackNavigator />   for stack navigation   */}
      <MyTabs/>
    </NavigationContainer>
  )
}


export default App


const styles = StyleSheet.create({


})
