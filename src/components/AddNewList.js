import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
function AddNewList(props) {
  const [changeText, setChangeText] = useState('');
  const [showListEntry, setShowListEntry] = useState(true);

  const onAddList = list => {
    setChangeText(list);
  };

  const addNewList = () => {
    props.newList(changeText);
  };

  const onPress = () => {
    setShowListEntry(false);
    addNewList();
  };
  useEffect(() => {});
  return (
    <>
      {showListEntry && (
        <View style={styles.container}>
          <Text style={styles.text}>List name</Text>
          <TextInput style={styles.input} onChangeText={onAddList}></TextInput>
          <Text style={styles.add} onPress={onPress}>
            Add List
          </Text>
        </View>
      )}
    </>
  );
}
export default AddNewList;
styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    padding: 10,
    top: -700,
    left: 40,
    right: 100,
    width: '75%',
    height: 180,
    backgroundColor: '#C9BBCF',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 30,
    margin: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    marginTop: 0,
    margin: 10,
    padding: 10,
  },
  add: {
    backgroundColor: '#FFB562',
    fontSize: 25,
    alignSelf: 'center',
    padding: 4,
    borderWidth: 2,
  },
});
