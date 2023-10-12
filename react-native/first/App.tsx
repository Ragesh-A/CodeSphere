import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useColorScheme} from 'react-native'; //for get to know color mode
import {StyleSheet} from 'react-native';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      {/*safe area help from notches*/}
      <View>
        <Text style={isDarkMode ? style.whiteText : style.whiteText}>
          Hello World
        </Text>
      </View>
    </SafeAreaView>
  );
};

// creation of stylesheet
const style = StyleSheet.create({
  whiteText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});

export default App;
