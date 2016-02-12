


// vars and Imports

var React  = require('react-native');
var CartView = require('./CartView');


var {

  StyleSheet,
  View,
  Component,
  Text,
  NavigatorIOS,
  Image
} = React;


/// StyleSheet Details

var styles = StyleSheet.create({

tabText:{
  fontSize:38,
  margin:5,
  backgroundColor:'white',
  color:'blue'

},
container: {
  flex: 1,
    backgroundColor:'white',
  justifyContent: 'center',
  alignItems:'center',

},
wrapper:{
  flex:1
}
});


// Image assets

var backbuttonIcon =  require('./Images/bin-7.png');

class Tab2 extends Component{

  render(){

    return(

      <NavigatorIOS
           style={styles.wrapper}
           initialRoute={{
             component: CartView,
             title: 'Cart View',
             passProps: { myProp: 'foo' },
             backButtonTitle:'Back',
             translucent: true,
      }}
      />

    );
  }

}

var MyView = React.createClass({
  render: function(){
    console.log('My View render triggered');
    return (
        <View style={styles.container}>
        <Text style={styles.tabText}>
          Hello there, welcome to My View
        </Text>
      </View>
    );
  }
});




module.exports = Tab2;

/*


<NavigatorIOS style={styles.container}
  initialRoute={{
    Component:CartView,
    title:'Cart Here',
    passProps: { myProp: 'foo' }
  }}
   />

  <View>
  <View style={styles.container}>
  </View>
  <Text style={styles.tabText}>
    Search tab
  </Text>
   </View>

*/
