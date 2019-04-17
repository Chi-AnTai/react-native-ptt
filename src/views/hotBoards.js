import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import APIHelper from '../helper/apiHelper';

export default class HotBoards extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.fetchHotBoards()
  }

  fetchHotBoards = async() => {
    let response = await APIHelper.fetchHotBoards()
    this.setState({data: response})
  }
    
  renderBoard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={()=>this.props.navigation.push('Board',{href: item.href})}
        style={{height:40,borderBottomColor:'gray',borderBottomWidth:1}}
        key={item.index}
      >
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Text>{item.englishTitle}</Text>
            <Text>{item.title}</Text>
          </View>
          <View>
            <Text>{item.numberOfUsers}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={this.state.data}
          renderItem={this.renderBoard}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  
});
