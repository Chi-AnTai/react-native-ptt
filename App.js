import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import Cheerio from 'cheerio-without-node-native'

export default class App extends Component<Props> {
  state = {
    data: []
  }

  componentDidMount() {
    this.fetchPtt()
  }

  fetchPtt = async() => {
    let pttFirstPage = await fetch('https://www.ptt.cc/bbs/hotboards.html').then(response=>response.text())
    const $ = Cheerio.load(pttFirstPage);
    
    let result = $('.board').map((index,element)=>{
      return {
        englishTitle: $('.board-name',element).text(),
        title: $('.board-title',element).text(),
        numberOfUsers: $('.board-nuser span',element).text(),
        href: element.attribs.href
      }
    }).toArray()
    this.setState({
      data: result
    })
    
  }

  renderBoard = ({item}) => {
    return (
      <View style={{height:40,borderBottomColor:'gray',borderBottomWidth:1}} key={item.englishTitle}>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Text>{item.englishTitle}</Text>
            <Text>{item.title}</Text>
          </View>
          <View>
            <Text>{item.numberOfUsers}</Text>
          </View>
        </View>
      </View>
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
