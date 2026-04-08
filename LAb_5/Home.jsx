import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Profile from './Profile'


const Home = ({navigation}) => {
  return (
    <View style = {{fontsize}}>
      <Text>Home</Text>
      <Button title='Profile'     onPress={() => navigation.navigate('Profile')}/>
    </View>
  )
}


export default Home


const styles = StyleSheet.create({})
