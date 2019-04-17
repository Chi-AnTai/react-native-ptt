import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import APIHelper from '../helper/apiHelper';

export default class Boards extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.fetchData()
   
  }

  fetchData = async() => {
    let response = await APIHelper.fetchBoard(this.props.navigation.state.params.href)
    // console.log(response)
  }

  render() {
    return (
      <View style={{backgroundColor:'red'}}></View>
    )
  }
}