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
  StatusBar,
  StatusBarIOS,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

var Tab1Item1 = require('./Tab1');
var Tab1Item2 = require('./Tab2');


//var React = require('react-native');

//var Gridview  = require('react-native-grid-view');



var MOCKED_MOVIES_DATA = [
  {title: 'Title',
  year: '2015',
  posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}
  },

];


class RNTestProject1 extends Component {

  constructor(props) {
          super(props);
          this.state = {
              selectedTab: 'Tab1Item1'
          };
      }

  render() {

    return (


      <TabBarIOS selectedTab={this.state.selectedTab}>

                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'Tab1Item1'}
                    systemIcon="featured"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Tab1Item1'
                        });
                    }}>
                    <Tab1Item1/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'Tab1Item2'}
                    systemIcon="search"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Tab1Item2'
                        });
                    }}>
                    <Tab1Item2/>
                </TabBarIOS.Item>
            </TabBarIOS>

);
  }
}


var MyView = React.createClass({
  render: function(){
    console.log('My View render triggered');
    return (
        <View style={styles.wrapper}>
        <Text style={styles.welcome}>
          Hello there, welcome to My View
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'right',
    color: '#333333',
    marginBottom: 5,
  },
  statusBarStyle:{
    color: '#333333',
  },
  containerNav: {
    flex: 1,
  }
});

React.StatusBarIOS.setStyle(1, true);

AppRegistry.registerComponent('RNTestProject1', () => RNTestProject1);



/*


<TabBarIOS selectedTab={this.state.selectedTab}>

          <TabBarIOS.Item
              selected={this.state.selectedTab === 'Tab1Item1'}
              systemIcon="featured"
              onPress={() => {
                  this.setState({
                      selectedTab: 'Tab1Item1'
                  });
              }}>
              <Tab1Item1/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              selected={this.state.selectedTab === 'Tab1Item2'}
              systemIcon="search"
              onPress={() => {
                  this.setState({
                      selectedTab: 'Tab1Item2'
                  });
              }}>
              <Tab1Item2/>
          </TabBarIOS.Item>
      </TabBarIOS>





      <NavigatorIOS
           style={styles.containerNav}
           initialRoute={{
             component: MyView,
             title: 'My NavigatorIOS test',
             passProps: { myProp: 'foo' },
     }}/>

      */
