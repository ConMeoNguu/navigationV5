import * as React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useTheme, TouchableRipple, Switch, Drawer} from 'react-native-paper';

import {AuthContext} from './AuthContext';

function ScanScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Scan!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function CreatCodeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CreatCodeScreen!</Text>
    </View>
  );
}

function HistoryScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HistoryScreen!</Text>
    </View>
  );
}

function SettingsScreen() {
  const paperTheme = useTheme();
  const {toggleTheme, falseTheme, trueTheme} = React.useContext(AuthContext);
  // console.log(paperTheme, 'paperTheme');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <TouchableRipple
        onPress={() => {
          paperTheme.dark ? falseTheme() : trueTheme();
          // toggleTheme();
        }}>
        <View style={styles.preference}>
          <Text>Dark Theme</Text>
          <View pointerEvents="none">
            <Switch value={paperTheme.dark} />
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
}

const Tabs = createMaterialTopTabNavigator();

export default function () {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="SettingsScreen" component={SettingsScreen} />
      <Tabs.Screen name="ScanScreen" component={ScanScreen} />
      <Tabs.Screen name="CreatCodeScreen" component={CreatCodeScreen} />
      <Tabs.Screen name="HistoryScreen" component={HistoryScreen} />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
