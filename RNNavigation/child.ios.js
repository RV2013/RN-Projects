'use strict';

var React = require('react-native');
var LowestChild = require('./child2.ios');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} = React;

var ChildNav = React.createClass({
  goDerper: function() {
    this.props.navigator.push({
               title: 'Even lower',
               component: LowestChild,
           });
  },
  render: function() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>My value: {this.props.myElement}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.goDerper()}
            underlayColor='#bbbbbb'>
            <Text style={styles.btnText}>DERPER</Text>
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
    backgroundColor: '#1aaf2d',
    padding: 10
  },
  text: {
    flex: 2,
    fontSize: 18,
    color: '#fff',
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

module.exports = ChildNav;
