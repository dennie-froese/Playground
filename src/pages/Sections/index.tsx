import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

export default function Sections() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Pressable
          style={styles.sectionContainer}
          onPress={() =>
            navigation.navigate('CapitaliseFirstLetterOfEachWord')
          }>
          <Text style={styles.header}>CapitalizeFirstLetterOfEachWord</Text>
          <Text style={styles.main}>
            How to capitelize the first letter of each word in JavaScript
          </Text>
        </Pressable>
        <Pressable
          style={styles.sectionContainer}
          onPress={() => navigation.navigate('ArrayInsertion')}>
          <Text style={styles.header}>ArrayInsertion</Text>
          <Text style={styles.main}>
            How to insert elements into an array in JavaScript
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  main: {
    fontSize: 15,
    padding: 20,
  },
});
