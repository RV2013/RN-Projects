'use strict'

var React = require('react-native');

var{
  View,
  StyleSheet,
  Text,
  Component
} =  React;


var styles = StyleSheet.create({

mainview:{
  flex  : 1,
  backgroundColor: 'blue',
  justifyContent: 'center',
  alignItems: 'center'
},
contentStyle:{
    fontSize: 22,
    color:  'green',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    flex:1
}
});

class ProductsView extends Component {

  render(){

    return(
          <View style={styles.mainview}>
            <Text style={styles.contentStyle}>
              This is first Navigation screen.
            </Text>
          </View>
    );
  }
}


module.exports = ProductsView;
