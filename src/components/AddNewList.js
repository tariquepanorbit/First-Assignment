import React from 'react';
import {useState} from 'react';
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
  const [newTask, setNewTask] = useState('');
  const onAddTask = task => {
    setChangeText(task);
  };
  const addNewTask = () => {
    setNewTask(changeText);
    //console.log('newTask is', newTask);
  };
  const onPress = () => {
    addNewTask();
    props.addNewList(newTask);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Enter Task</Text>
        <TextInput style={styles.input} onChangeText={onAddTask}></TextInput>
        <Button title="Add List" onPress={onPress}></Button>
      </View>
    </View>
  );
}

export default AddNewList;
styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 200,
    right: 0,
    width: 200,
    height: 150,
    backgroundColor: '#8AAAE5',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    margin: 20,
    marginLeft: 40,
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
