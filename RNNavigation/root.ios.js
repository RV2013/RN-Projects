'use strict';

var React = require('react-native');
var Child = require('./child.ios');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} = React;

var RootNav = React.createClass({
  goDerper: function() {
    this.props.navigator.push({
               title: 'The child title',
               component: Child,
               passProps: {myElement: 'this could be your value!'}
           });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.goDerper()}
          underlayColor='#bbbbbb'>
          <Text style={styles.btnText}>We must go derper</Text>
        </TouchableHighlight>
      </View>
    );
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5151f4',
    padding: 10
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#123456',
    justifyContent: 'center',
    color: '#FFFFFF',
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 6,
  }
});

module.exports = RootNav;
