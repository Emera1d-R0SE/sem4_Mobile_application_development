// rnfes




import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();


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
      <StackNavigator />
    </NavigationContainer>
  )
}


export default App


const styles = StyleSheet.create({


})
