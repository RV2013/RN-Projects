


// vars and Imports

var React  = require('react-native');
var ProductsView = require('./ProductsView');

var {

  StyleSheet,
  View,
  Component,
  Text,
  NavigatorIOS,
  Navigator
} = React;



/// StyleSheet Details



var styles = StyleSheet.create({

tabText:{
  fontSize:38,
  margin:5,
  color:'red',
  justifyContent:'center',
  alignItems:'center',

},
mainviewBG:{
  backgroundColor: 'black',
},
container: {
  flex: 1,
},
wrapper: {
  flex: 1,
  justifyContent:'center',
  alignItems:'center',

}
});


class Tab1 extends Component{

  render(){

    return(

      <View >
        <NavigatorIOS
             style={styles.container}
             initialRoute={{
               component: ProductsView,
               title: 'Products Catalogue',
               passProps: { myProp: 'foo' },
               

        }}
        />
      </View>


    );
  }

}

module.exports = Tab1;

/*

<NavigatorIOS style={styles.container}
   initialRoute={{
     Component:ProductsView,
     title:'Products',
     passProps: { myProp: 'foo' },
   }}/>  



   <View>
     <Text style={styles.tabText}>
       Featured Tab
     </Text>
   </View>

*/
