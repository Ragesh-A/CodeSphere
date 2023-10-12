import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollCards() {
  return (
    <>
      <Text style={styles.heading}>ScrollCard</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.bgBlue]}></View>
        <View style={[styles.card, styles.bgRed]}></View>
        <View style={[styles.card, styles.bgGreen]}></View>
        <View style={[styles.card, styles.bgBlue]}></View>

      </ScrollView>
      <View style={styles.bar}></View>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 250,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginEnd: 10
  }, bgRed: {
    backgroundColor: 'red'
  },
  bgGreen: {
    backgroundColor: 'green'
  },
  bgBlue: {
    backgroundColor: 'blue'
  },
  bar: {
    backgroundColor: 'pink',
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    width: '98%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  heading: {
    color: 'black',
    fontSize: 24,
    marginVertical: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    textDecorationStyle: 'dashed',
  }
})