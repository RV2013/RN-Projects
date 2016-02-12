'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} = React;

var Child2Nav = React.createClass({
  popAll: function() {
    this.props.navigator.popToTop();
  },
  popOnce: function() {
    this.props.navigator.pop();
  },
  render: function() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Derpest child!</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.popAll()}
            underlayColor='#bbbbbb'>
            <Text style={styles.btnText}>Pop to root</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.popOnce()}
            underlayColor='#bbbbbb'>
            <Text style={styles.btnText}>Pop once</Text>
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
    backgroundColor: '#ffd007',
    padding: 10
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
  },
  button: {
    height: 36,
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#123456',
    justifyContent: 'center',
    color: '#FFFFFF',
    margin: 2
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 6,
  }
});

module.exports = Child2Nav;
