import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function CapitaliseFirstLetterOfEachWord() {
  const [string, setString] = useState('');
  const [stringCaps, setStringCaps] = useState('');
  const [bool, setBool] = useState(false);

  const [stringArray, setStringArray] = useState('');
  const [stringArrayCaps, setStringArrayCaps] = useState<String | String[]>('');
  const [boolArray, setBoolArray] = useState(false);

  const capitalise = () => {
    if (string.length > 0) {
      setStringCaps(string[0].toUpperCase() + string.substring(1));
      setBool(true);
    }
  };

  const capitaliseArray = () => {
    if (stringArray.length > 0) {
      const words = stringArray.split(' ');
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        setStringArrayCaps(words.join(' '));
        setBoolArray(true);
      }
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.main}>
            In this example, we want to transform words using JavaScript.
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
            editable={!bool}
            autoCapitalize="none"
          />
          <Pressable style={styles.pressable} onPress={capitalise}>
            <Text>Transform!</Text>
          </Pressable>
          {bool && (
            <TextInput
              style={{...styles.textInput}}
              defaultValue={stringCaps}
              editable={false}
            />
          )}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.main}>
            In the second example, we want to transform multiple words using
            JavaScript.
          </Text>
          <Text style={styles.main}>
            To do so, please input multiple words in the following text field
            and transform them by clicking the "Transform" button below.
          </Text>
          <TextInput
            placeholder="Please input word here"
            style={styles.textInput}
            onChangeText={(text) => setStringArray(text)}
            value={stringArray}
            editable={!boolArray}
            autoCapitalize="none"
          />
          <Pressable style={styles.pressable} onPress={capitaliseArray}>
            <Text>Transform!</Text>
          </Pressable>
          {boolArray && (
            <TextInput
              style={{...styles.textInput}}
              defaultValue={stringArrayCaps.toString()}
              editable={false}
            />
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
