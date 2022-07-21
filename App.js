import React from 'react';
import {useState, useEffect} from 'react';
import ListModal from './src/components/ListModal';
import SelectList from './src/components/SelectList';
import AddNewList from './src/components/AddNewList';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
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
  const [selectedItem, setSelectedItem] = useState(data[0]);
  const [taskdetails, setTaskDetails] = useState({});
  const [taskId, setTaskId] = useState(1);
  const [showTask, setShowTask] = useState(false);
  const [finished, setFinished] = useState([]);
  const [list, setList] = useState();
  const [count, setCount] = useState(4);
  const [data2, setData2] = useState(data);

  const taskdate = val => {
    setDate(val);
  };

  const onSelect = (item, clickCount) => {
    setSelectedItem(item);
    setShowTask(true);
  };
  const onclickHandler = () => {
    setShowTask(true);
    setVisible(true);
  };
  const deleteTask = event => {
    var task = event._dispatchInstances.memoizedProps.children;

    delete taskdetails[task[0]];

    setFinished(currentData => [...currentData, task]);
  };
  const newList = list => {
    setList(list);
    setCount(count + 1);
    setData2(prevState => [...prevState, {id: count, name: list}]);
  };
  useEffect(() => {
    if (list !== undefined) {
      onSelect(data2[data2.length - 1]);
    }
  }, [data2]);

  const changeShowTask = show => {
    setShowTask(show);
  };

  const onCloseModal = (task, clickdate) => {
    setTaskId(taskId + 1);
    const moment = require('moment');
    let d = new Date(clickdate);
    d = moment(d).format('MMM Do YY');
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
  };

  let asArray = Object.entries(taskdetails);
  let result = asArray.filter(i => i[1]['listName'] === selectedItem.name);
  return (
    <View style={[styles.appContainer]}>
      <Text style={styles.heading}>Create Your task</Text>
      {selectedItem != 'New List' && (
        <View style={{position: 'relative'}}>
          <SelectList
            changeShowTask={changeShowTask}
            list={list}
            showTask={showTask}
            // allLists={allLists}
            allTask={allTask}
            value={selectedItem}
            data={data2}
            onSelect={onSelect}></SelectList>
          <View style={styles.taskView}>
            {showTask &&
              result.map(t => (
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomColor: '#3A5BA0',
                    borderBottomWidth: 10,
                  }}>
                  <Text
                    onPress={deleteTask}
                    key={Math.random()}
                    ref={elem => (this.textElem = elem)}
                    style={styles.task}>
                    {t[0]}
                    <View>
                      <Text style={styles.date} key={Math.random()}>
                        {t[1].dueDate}
                      </Text>
                    </View>
                  </Text>
                </View>
              ))}
          </View>
          <View>
            {selectedItem.name == 'New List' ? (
              <AddNewList newList={newList}></AddNewList>
            ) : selectedItem.name == 'Finished' ? (
              <View style={{position: 'relative'}}>
                {showTask && (
                  <View style={styles.finished}>
                    {finished.map(t => (
                      <Text key={Math.random()} style={styles.task}>
                        {t}
                      </Text>
                    ))}
                  </View>
                )}
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
    flex: 2,
    padding: 25,
    backgroundColor: '#3A5BA0',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 30,
    marginLeft: 35,
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
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
    position: 'absolute',
    top: '50%',
    left: '48%',
    transform: [{translateX: -110}, {translateY: -300}],
    backgroundColor: '#231955',
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  date: {
    padding: 10,
    margin: 10,
    color: 'white',
    fontSize: 15,
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
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 30,
  },
  finished: {
    position: 'absolute',
    // top: '50%',
    top: 0,
    left: '50%',
    transform: [{translateX: -110}, {translateY: -700}],
    backgroundColor: '#231955',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
