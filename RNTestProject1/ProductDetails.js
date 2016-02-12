

'use strict'

var React =  require ('react-native');

var {
  View,
  StyleSheet,
  Component,
  Text,
  Image,
  NavigatorIOS
} = React;

// Styles goes Here

var styles = StyleSheet.create({


  instructions: {
    textAlign: 'right',
    color: 'blue',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

var textLabel = 'no words..';
// Class Structure


class ProductDetails extends Component{


render (){

    return(
      <View style={styles.container}>
        <Text style={styles.instructions}>
          {this.props.myElement}
        </Text>
        </View>
    );
}


_handleBackButtonPress(){


  console.log('caller' +  this.props.navigator.caller);
  textLabel = this.props.navigator.caller;

  this.props.navigator.caller.title = 'Backed By me';
    this.props.navigator.pop();
  }

  _handleNextButtonPress() {
    this.props.navigator.push(nextRoute);
  }
}


module.exports = ProductDetails;
