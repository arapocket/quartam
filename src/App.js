import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import HomeScreen from './components/HomeScreen';


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
},
{
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  state = {};

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <AppContainer />
      </Provider>
    );
  }
}
