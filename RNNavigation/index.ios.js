/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var RootNav = require('./root.ios');

var RNNavigation = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
                 style={styles.container}
                 initialRoute={{
             title: 'My Root',
             component: RootNav
         }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('RNNavigation', () => RNNavigation);
