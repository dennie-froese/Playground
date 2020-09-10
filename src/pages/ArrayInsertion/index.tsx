import 'react-native-gesture-handler';
import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import {StateMachineProvider} from 'state/StateMachine';

export default function ArrayInsertion() {
  const [current, send] = useContext(StateMachineProvider);
  const initArray = current.context.array;
  const push = current.matches('array.pushTicked');
  const unshift = current.matches('array.unshiftTicked');
  const concat = current.matches('array.concatTicked');
  const [string, setString] = useState('');
  const [array, setArray] = useState(['']);
  const [bool, setBool] = useState(false);
  const [error, setError] = useState('');

  const insert = () => {
    console.warn(current.matches('array.start'));
    if (!push && !unshift && !concat) {
      send('ERROR_UNTICKED');
    }
    // else if (string.length > 0) {
    //   if (push) {
    //     initArray.push(string);
    //   } else if (unshift) {
    //     initArray.unshift(string);
    //   } else if (concat) {
    //     let arrayConcat = initArray;
    //     arrayConcat = initArray.concat(string);
    //   }
    //   setArray(beginning);
    //   setBool(true);
    //   setError('');
    // } else {
    //   setError('Please enter a word in the field above.');
    // }
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
              value={current.matches('array.pushTicked')}
              onValueChange={(newValue: boolean) =>
                newValue ? send('TICK_PUSH') : send('UNTICK_PUSH')
              }
              disabled={unshift || concat}
            />
            <Text>push()</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={unshift}
              onValueChange={(newValue: boolean) =>
                newValue ? send('TICK_UNSHIFT') : send('UNTICK_UNSHIFT')
              }
              disabled={push || concat}
            />
            <Text>unshift()</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={concat}
              onValueChange={(newValue: boolean) =>
                newValue ? send('TICK_CONCAT') : send('UNTICK_CONCAT')
              }
              disabled={push || unshift}
            />
            <Text>concat()</Text>
          </View>

          <Text style={styles.main}>
            Next, please input a word in the following text field and insert it
            into the original array by clicking the "Insert".
          </Text>
          <Text style={styles.main}>Original array: {initArray}</Text>
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
          {current.matches('array.errorUnticked') ? (
            <Text style={styles.error}>
              Please tick one of the insertion options above.
            </Text>
          ) : current.matches('array.errorNoInput') ? (
            <Text style={styles.error}>
              Please enter a word in the field above.
            </Text>
          ) : null}
          {bool && (
            <Text style={styles.main}>
              New array with insertion using{' '}
              {push ? 'push()' : unshift ? 'unshift()' : 'concat()'}:{' '}
              {array.toString()}
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
