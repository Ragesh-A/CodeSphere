import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ScrollCards from './components/ScrollCards';

export default function AppPro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <FlatCards />
          <ScrollCards />
          <ScrollCards />
          <ScrollCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
