import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <>
      <Text style={styles.heading}>Flat cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.bgRed]}>
          <Text>RED</Text>
        </View>
        <View style={[styles.card, styles.bgGreen]}>
          <Text>GREEN</Text>
        </View>
        <View style={[styles.card, styles.bgBlue]}>
          <Text>BLUE</Text>
        </View>
      </View></>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10
  },
  card: {
    flexGrow: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  bgRed: {
    backgroundColor: 'red'
  },
  bgGreen: {
    backgroundColor: 'green'
  },
  bgBlue: {
    backgroundColor: 'blue'
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