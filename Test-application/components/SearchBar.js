import  React from 'react';
import { StyleSheet ,  TextInput  } from 'react-native';


const datas = require('../mock.json');

export default class SearchBar extends React.Component {

 
  constructor(props){
    super(props);

   this.state = {
    textInput: "Rechercher ..."
   }


}
  


//barre de search
filterSearch(text){
  this.setState({
    textInput: text,
  })
  var longeur = datas.length;
 
 // boucle qui parcours les datas
  

    
  


  
}


render () {
   
const datas = require('../mock.json');

 
  return (
        
          
        <TextInput
        value={this.state.textInput}
        onChangeText={ (text) => this.filterSearch(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}

        />

    )
  }
}
