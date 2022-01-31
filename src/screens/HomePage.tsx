import React from 'react';
import { StyleSheet, View } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.red]} />
      </View>
      <View style={styles.col}>
        <View style={[styles.box, styles.blue]} />
        <View style={[styles.box, styles.blue]} />
        <View style={[styles.box, styles.blue]} />
        <View style={[styles.box, styles.blue]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  col: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  box: {
    width: 50,
    height: 50,
    marginTop: 50,
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'powderblue',
  },
  green: {
    backgroundColor: 'green',
  },
});

export default HomePage;
