
'use strict'

var React = require ('react-native');
var ProductDetails = require('./ProductDetails');

var {

View,
StyleSheet,
Component,
Text,
TouchableHighlight
} =  React;

var initialText = 'I am calling Next Screen.';

// StyleSheet

var styles = StyleSheet.create({


  instructions: {
    textAlign: 'right',
    color: 'blue',
    marginBottom: 5,
    flex:0.001,

  },
  container: {
    flex: 0.99,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    height: 10,
    flex:0.009,
    backgroundColor: '#123456',
    justifyContent: 'center',
    alignItems:'flex-start',
    flexDirection:'row',

  },
  btnText: {
    fontSize: 18,
    color: 'blue',
    marginTop: 6,
  }
});


class CartView  extends Component{

// render() function
render(){

  return(

    <View style={styles.container}>
    <Text style={styles.instructions}>
    {initialText}
    </Text>
    <TouchableHighlight
        style={styles.button}
        onPress={() => this.goDerper()}
        underlayColor='#bbbbbb'>
        <Text style={styles.btnText}>Move Next</Text>
      </TouchableHighlight>
    </View>

  );
}


// Navigation Functions

goDerper(){
    this.props.navigator.push({
               title: 'CheckOut',
               component: ProductDetails,
               passProps: {myElement: initialText}
           });
  }

}

module.exports = CartView;
