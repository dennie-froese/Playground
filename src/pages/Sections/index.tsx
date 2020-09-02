import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Sections() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Pressable style={styles.sectionContainer}>
          <Text style={styles.header}>Header</Text>
          <Text style={styles.main}>explanation</Text>
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
