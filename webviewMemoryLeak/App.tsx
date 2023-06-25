import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import {ExampleHTML} from './exampleHTML';
type RootStackParamList = {
  Home: undefined;
  WebviewTest: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
});

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to example webview"
        onPress={() => navigation.navigate('WebviewTest')}
      />
      <Text>
        (to see memory leak navigate between the pages multiple times)
      </Text>
    </View>
  );
};
const WebviewTest = () => {
  return <WebView source={{html: ExampleHTML}} />;
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="WebviewTest" component={WebviewTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
