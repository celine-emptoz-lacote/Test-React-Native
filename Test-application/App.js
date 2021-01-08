import  React from 'react';
import { Text, View  } from 'react-native';

import mock from './mock.json';

import Search from './components/search'
import SearchBar from './components/SearchBar'
import Styles from './Styles'

const datas = require('../mock.json');
export default class App extends React.Component {


render () {
   


const datas = require('./mock.json');

 
  return (
        <View style={Styles.container }>
            <Text style={Styles.title}> Ma première Application </Text>
            <SearchBar />
            <Search />
          
          </View> 

    )
  }


}