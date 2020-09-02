import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to my Playground!</Text>
        <Text style={styles.main}>
          This is a place where I try out new things in the world of React /
          React Native / Javascript.
        </Text>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate('Sections')}>
          <Text>Go to different sections</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  header: {fontSize: 20, fontWeight: 'bold'},
  main: {fontSize: 15, textAlign: 'center'},
  pressable: {backgroundColor: 'lightgrey', borderRadius: 8, padding: 6},
});
