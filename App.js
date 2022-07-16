import React, {Component} from 'react';
import {useState} from 'react';
import ListModal from './src/components/ListModal';
import SelectList from './src/components/SelectList';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCoffee,
  faCaretDown,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
const HelloWorldApp = () => {
  let data = [
    {
      id: 1,
      name: 'Default',
    },
    {
      id: 2,
      name: 'New List',
    },
  ];

  const [allTask, setAllTask] = useState([]);

  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data[0]);
  const onSelect = item => {
    //console.log('item is', item);
    setSelectedItem(item);
  };
  console.log(selectedItem);
  function onclickHandler() {
    setVisible(true);
  }
  function addTask() {}
  function onCloseModal(task) {
    setVisible(false);
    setAllTask(currentData => [...currentData, task]);
    console.log('allTask', task, allTask);
  }

  return (
    <View style={[styles.appContainer]}>
      {selectedItem != 'New List' && (
        <View>
          <SelectList
            value={selectedItem}
            data={data}
            onSelect={onSelect}></SelectList>
          <View style={styles.taskView}>
            {allTask.map(t => (
              <Text key={Math.random()} style={styles.task}>
                {t}
              </Text>
            ))}
          </View>
        </View>
      )}

      <Pressable style={styles.circleplus} onPress={onclickHandler}>
        <FontAwesomeIcon icon={faCirclePlus} size={50} color={'#317773'} />
      </Pressable>
      {visible && (
        <ListModal showSelect={visible} closeModal={onCloseModal}>
          {' '}
        </ListModal>
      )}
    </View>
  );
};
export default HelloWorldApp;
const styles = StyleSheet.create({
  taskcontainer: {
    width: 200,
    height: 200,
  },
  appContainer: {
    flex: 2,
    padding: 40,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#FBEAEB',
    justifyContent: 'space-between',
  },
  circleplus: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35,
    paddingRight: 50,
    paddingBottom: 30,
    color: 'white',
  },

  button: {
    alignItems: 'center',
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  task: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
