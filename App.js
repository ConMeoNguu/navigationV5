import * as React from 'react';
import {Button, View} from 'react-native';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TopTabScreen from './screens/HomeScreen';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import { AuthContext } from "./screens/AuthContext";

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="TopTabScreen" component={TopTabScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const authContext = React.useMemo(
    () => ({
      toggleTheme: () => {
        console.log(isDarkTheme, 'isdarktheme', !isDarkTheme)
        setIsDarkTheme(!isDarkTheme);
      },
      trueTheme: ()=>{
        console.log('true')
        setIsDarkTheme(true);
      },
      falseTheme: ()=>{
        console.log('false')
        setIsDarkTheme(false);
      }
    }),
    [],
  );

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    color: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    color: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <MyStack />
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}
