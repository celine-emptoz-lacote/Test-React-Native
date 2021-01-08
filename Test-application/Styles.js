import {  StyleSheet  } from 'react-native';

export default  StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor:'whitesmoke',
      flex: 1
    },
    div:{
      margin: 10,
      padding: 5,
      flex: 1,
     justifyContent: 'center',
    
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      fontFamily: 'cursive',
      color: '#2196F3'
      
    },
    paragraph:{
      color:"grey"
    },
    input: {
      margin: 10,
      height: 40, width: 250
    },
    card: {
     flex: 1,
     flexDirection: "row",
     alignItems: 'center'
    }

  })

