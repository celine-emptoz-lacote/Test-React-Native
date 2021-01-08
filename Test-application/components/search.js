import  React from 'react';
import { Text, View, StyleSheet , Picker , Button  , Image } from 'react-native';
import Styles from '../Styles'




export default class Search extends React.Component {

 

  constructor(props){
        super(props);
   
       this.state = {
        pikerSelection: 'Valeur par defaut !',
        prenom : "",
        nom: "",
        photo : '',
         
       }
    }

  setPikerValue(newValue){
    this.setState({
        pikerSelection: newValue,

    });
  }
    btn(prenom,nom,photo){
  
    this.setState({
        prenom: "Prénom :" + prenom,
        nom: "Nom : " + nom,
        photo: photo
    })

    }

render () {
   

const datas = require('../mock.json');

//chemin url de l'image
const image = this.state.photo
 
  return (
        <View >
           
            <View style={Styles.div} >
                <Text style={Styles.paragraph}>Selectionner un personne :</Text>
                <Picker 
                selectedLabel={this.state.pikerSelection}
                style={Styles.input}
                onValueChange={(itemValue, itemIndex) => this.setState(                          {pikerSelection: itemValue }) }
                >
                <Picker.Item label={this.state.pikerSelection}   />
                {datas.map((value,index) => {
                return  <Picker.Item label={value.last_name}  value={value.id}  
                />
         
                })} 
         
          
              </Picker>

              <Button  title='Envoyer' onPress= {() => this.btn(datas       [this.state.pikerSelection -1].last_name,datas[this.state.pikerSelection -1].first_name,datas[this.state.pikerSelection -1].photo ) }     />
       </View>

          <View style={Styles.card}>
              <Image  style = {{ width: 100, height: 100 }} source={{uri:image}}  /               >
              <View style={Styles.cardDiv}>
                <Text> {this.state.prenom} </Text>
                <Text> {this.state.nom} </Text>
              </View>
              
          </View>

     
    </View>
     
  );
  }


}