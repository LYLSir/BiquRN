import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

class DetailScene extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: '详情页'
  })

  popLastPage() {
    this.props.navigation.goBack()
  }

  render () {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text} onPress = {this.popLastPage.bind(this)} >返回首页</Text>
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

export default DetailScene
