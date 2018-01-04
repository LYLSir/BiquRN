import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

class HomeScene extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: '首页'
  })

  pushToDetailScene() {
    this.props.navigation.navigate('DetailScene')
  }

  render () {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text} onPress = {this.pushToDetailScene.bind(this)} >跳转至详情页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },
  text: {
    fontSize: 16,
    color: 'red'
  }
})

export default HomeScene
