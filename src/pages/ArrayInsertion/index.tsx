import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

export default function ArrayInsertion() {
  let beginning = ['Orange', 'Apple', 'Banana'];
  const [push, setPush] = useState(false);
  const [unshift, setUnshift] = useState(false);
  const [concat, setConcat] = useState(false);
  const [string, setString] = useState('');
  const [array, setArray] = useState(['']);
  const [bool, setBool] = useState(false);
  const [error, setError] = useState('');

  const insert = () => {
    if (string.length > 0) {
      if (push) {
        beginning.push(string);
      } else if (unshift) {
        beginning.unshift(string);
      } else if (concat) {
        beginning = beginning.concat(string);
      }
      setArray(beginning);
      setBool(true);
    } else {
      setError('Please enter a word in the field above.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.main}>
            In this example, we want to add elements to an array using
            JavaScript.
          </Text>
          <Text style={styles.main}>
            There are a number of ways to do that. Please select from the
            selection below which method you would like to use to add an
            element:
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={push}
              onValueChange={(newValue: boolean) => setPush(newValue)}
              disabled={unshift || concat}
            />
            <Text>push()</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={unshift}
              onValueChange={(newValue: boolean) => setUnshift(newValue)}
              disabled={push || concat}
            />
            <Text>unshift()</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={concat}
              onValueChange={(newValue: boolean) => setConcat(newValue)}
              disabled={push || unshift}
            />
            <Text>concat()</Text>
          </View>

          <Text style={styles.main}>
            Next, please input a word in the following text field and insert it
            into the original array by clicking the "Insert".
          </Text>
          <Text style={styles.main}>
            Original array: {beginning.toString()}
          </Text>
          <TextInput
            placeholder="Please input word here"
            style={styles.textInput}
            onChangeText={(text) => setString(text)}
            value={string}
            editable={!bool}
            autoCapitalize="none"
          />
          <Pressable style={styles.pressable} onPress={insert}>
            <Text>Insert!</Text>
          </Pressable>
          {error.length > 0 ? <Text style={styles.error}>{error}</Text> : null}
          {bool && (
            <Text style={styles.error}>
              New array with insertion: {array.toString()}
            </Text>
          )}
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
  error: {
    fontSize: 15,
    padding: 10,
    textAlign: 'center',
    color: 'red',
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 50,
  },
  checkbox: {
    margin: 10,
  },
});
