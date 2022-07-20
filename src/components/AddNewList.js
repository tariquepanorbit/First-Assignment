import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';
function AddNewList(props) {
  const [changeText, setChangeText] = useState('');
  const [newList, setNewList] = useState('');
  const [showListEntry,setShowListEntry] = useState(true);
  const onAddList = list => {
    setChangeText(list);
  };
  const addNewList = list => {
    setNewList(changeText);
    props.newList(changeText);
  };
  const onPress = () => {
    addNewList();
  };
  useEffect(() => {});
  return (
    { showListEntry && (
    <View style={((height = '400'), (width = '300'))}>
      <View style={styles.container}>
        <Text style={styles.text}>Enter Task</Text>
        <TextInput style={styles.input} onChangeText={onAddList}></TextInput>
        <Button title="Add List" onPress={onPress}></Button>
      </View>
    </View>
    )
    }
  );
    
}
export default AddNewList;
styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    flex: 1,
    position: 'absolute',
    padding: 20,
    top: -500,
    left: 50,
    right: 100,
    width: '75%',
    height: 160,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    margin: 20,
    marginLeft: 90,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    marginTop: 0,
    margin: 10,
    padding: 10,
  },
});
