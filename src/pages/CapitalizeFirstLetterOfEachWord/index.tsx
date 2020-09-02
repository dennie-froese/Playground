import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function CapitalizeFirstLetterOfEachWord() {
  const [string, setString] = useState('');
  const stringCaps = '';
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.main}>
            In this example, we want to transform words in JavaScript.
          </Text>
          <Text style={styles.main}>
            To do so, please input a word in the following text field and
            transform it by clicking the "Transform" button below.
          </Text>
          <TextInput
            placeholder="Please input word here"
            style={styles.textInput}
            onChangeText={(text) => setString(text)}
            value={string}
            autoCapitalize="none"
          />
          <Pressable style={styles.pressable}>
            <Text>Transform!</Text>
          </Pressable>
          <TextInput
            style={{...styles.textInput}}
            defaultValue={stringCaps ? stringCaps : ''}
            editable={false}
          />
        </View>
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
    textAlign: 'center',
  },
  textInput: {
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
  },
  pressable: {
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'teal',
    alignSelf: 'center',
  },
});
