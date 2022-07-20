import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import ListModal from './src/components/ListModal';
import SelectList from './src/components/SelectList';
import AddNewList from './src/components/AddNewList';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
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
    {
      id: 3,
      name: 'Finished',
    },
  ];
  const [allTask, setAllTask] = useState([]);
  const [visible, setVisible] = useState(false);
  //const [newListModal, setNewListModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data[0]);
  const [allList, setAllList] = useState(data);
  const [taskdetails, setTaskDetails] = useState({});
  const [taskId, setTaskId] = useState(1);
  const [showTask, setShowTask] = useState(false);
  const [finished, setFinished] = useState([]);
  const [list, setList] = useState();
  const [count, setCount] = useState(4);
  const [data2, setData2] = useState(data);
  const [clickCount, setClickCount] = useState(0);

  const taskdate = val => {
    setDate(val);
  };

  const allLists = data => {
    setAllList(data);
  };
  const click = value => {
    setClickCount(value + 1);
    console.log('App', clickCount);
  };
  const onSelect = (item, clickCount) => {
    setSelectedItem(item);
    setShowTask(true);
  };
  function onclickHandler() {
    setVisible(true);
  }
  const deleteTask = event => {
    var task = event._dispatchInstances.memoizedProps.children;
    console.log('task is', task[0]);
    delete taskdetails[task[0]];
    console.log('taskdetails', taskdetails);
    setFinished(currentData => [...currentData, task]);
  };
  const newList = list => {
    setList(list);
    setCount(count + 1);
    setData2(prevState => [...prevState, {id: count, name: list}]);
    setAllList(data2);
  };
  const changeShowTask = show => {
    setShowTask(show);
  };
  function onCloseModal(task, clickdate) {
    console.log(clickdate);
    setTaskId(taskId + 1);
    const moment = require('moment');
    let d = new Date(clickdate);
    d = moment(d).format('MMM Do YY');
    console.log('ddd', d);

    setTaskDetails({
      ...taskdetails,
      [task]: {
        id: taskId,
        dueDate: d,
        listName: selectedItem.name,
      },
    });
    setVisible(false);
    setAllTask(currentData => [...currentData, task]);
    console.log('taskdetails', taskdetails);
  }
  let asArray = Object.entries(taskdetails);
  let result = asArray.filter(i => i[1]['listName'] === selectedItem.name);
  console.log('result is ', result);
  console.log('Finished is', finished);
  return (
    <View style={[styles.appContainer]}>
      {selectedItem != 'New List' && (
        <View>
          <SelectList
            changeShowTask={changeShowTask}
            list={list}
            click={click}
            showTask={showTask}
            allLists={allLists}
            allTask={allTask}
            value={selectedItem}
            data={data2}
            onSelect={onSelect}></SelectList>
          <View style={styles.taskView}>
            {!showTask &&
              result.map(t => (
                <Text
                  onPress={deleteTask}
                  key={Math.random()}
                  ref={elem => (this.textElem = elem)}
                  style={styles.task}>
                  {t[0]}
                  <View style={styles.date}>
                    <Text>{t[1].dueDate}</Text>
                  </View>
                </Text>
              ))}
          </View>
          <View>
            {selectedItem.name == 'New List' ? (
              <AddNewList newList={newList}></AddNewList>
            ) : selectedItem.name == 'Finished' ? (
              <View style={styles.taskView}>
                {finished.map(t => (
                  <Text key={Math.random()} style={styles.task}>
                    {t}
                  </Text>
                ))}
              </View>
            ) : null}
          </View>
        </View>
      )}
      {selectedItem.name != 'New List' ? (
        selectedItem.name != 'Finished' ? (
          <Pressable style={styles.circleplus} onPress={onclickHandler}>
            <FontAwesomeIcon icon={faCirclePlus} size={50} color={'white'} />
          </Pressable>
        ) : null
      ) : null}
      {visible && (
        <ListModal
          taskdate={taskdate}
          showSelect={visible}
          closeModal={onCloseModal}
          selectedItem={selectedItem}>
          {' '}
        </ListModal>
      )}
    </View>
  );
};
export default HelloWorldApp;
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 40,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#124c81',
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
  taskView: {
    flexDirection: 'column',
    position: 'relative',
    top: -700,
    backgroundColor: '#42b3f5',
    justifyContent: 'flex-start',
  },
  date: {
    padding: 10,
    margin: 10,
    color: 'blue',
    fontSize: 15,
    borderColor: '#427bf5',
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
    margin: 2,
    padding: 5,
    borderWidth: 1,
    fontSize: 30,
    borderColor: '#427bf5',
  },
});
