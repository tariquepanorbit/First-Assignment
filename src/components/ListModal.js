import React from 'react';
import {useState, useEffect} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
const ListModal = props => {
  const [task, setTask] = useState('');
  const textInputHandler = text => {
    setTask(text);
  };
  const setSelectedStartDate = date => {
    setSelectedtDate(date);
  };
  const onPress = () => {
    props.closeModal(task, selectedDate);
  };
  const [selectedDate, setSelectedtDate] = useState(null);
  const startDate = selectedDate
    ? selectedDate.format('YYYY-MM-DD').toString()
    : '';
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your task</Text>
      <TextInput
        style={[styles.text, styles.input]}
        onChangeText={textInputHandler}
        value={task}></TextInput>
      <Text style={styles.text}>Due date {startDate}</Text>
      <View style={styles.calender}>
        <CalendarPicker value={task} onDateChange={setSelectedStartDate} />
        <Pressable onPress={onPress} style={styles.check}>
          <FontAwesomeIcon
            icon={faCircleCheck}
            color="black"
            size={50}></FontAwesomeIcon>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
    margin: 10,
  },
  container: {
    position: 'absolute',
    justifyContent: 'flex-end',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    top: -40,
    flex: 2,
    paddingTop: 20,
    flexDirection: 'column',
    backgroundColor: '#659EC7',

    borderRadius: 20,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
  check: {
    alignSelf: 'flex-end',
    paddingRight: 100,
    paddingBottom: 30,
    color: 'white',
  },
  calender: {
    width: 400,
    height: 500,
    backgroundColor: '#659EC7',
  },
});
export default ListModal;
