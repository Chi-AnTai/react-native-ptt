import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HotBoards from './src/views/hotBoards';
import Board from './src/views/boards'

const RootStack = createStackNavigator({
  HotBoards: HotBoards,
  Board: Board 
});
const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
