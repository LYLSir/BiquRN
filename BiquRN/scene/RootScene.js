import React, {Component} from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import HomeScene from './HomeScene'
import DetailScene from './DetailScene'

const RootScene = StackNavigator(
  {
    HomeScene: {screen: HomeScene},
    DetailScene: {screen: DetailScene}
  },
  {
    navigationOptions: {
      headerTintColor: '#333333',
      showIcon: true
    }
  }
)

export default RootScene
