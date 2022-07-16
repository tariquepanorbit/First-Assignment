import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AddNewList from './AddNewList';
function SelectList({data = [], value = {}, onSelect = () => {}}) {
  const [count, setCount] = useState(3);
  const [visible, setVisible] = useState('false');
  const [showList, setShowList] = useState(false);
  const [data2, setData2] = useState(data);
  //console.log(Array.isArray(data2));
  //useEffect(() => setCount(count + 1));
  function addList() {
    setVisible('true');
  }
  const onSelectedItem = val => {
    setShowList(false);

    onSelect(val);
    //console.log(val.name);
  };

  const onAddNewList = task => {
    setCount(count + 1);
    setData2(prevState => [...prevState, {id: count, name: task}]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropDownStyle}
        onPress={() => setShowList(!showList)}>
        <Text style={styles.text}>{!!value ? value.name : `Your List`}</Text>
      </TouchableOpacity>
      <View>
        {showList &&
          visible &&
          data2.map((val, i) => {
            return (
              <TouchableOpacity
                key={String(i)}
                onPress={() => onSelectedItem(val)}>
                <Text style={styles.text}>{val.name}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
      {value.name == 'New List' ? (
        <AddNewList addNewList={onAddNewList}></AddNewList>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E2D1F9',
    flexDirection: 'column',
    width: 150,
    height: 'auto',
    maxHeight: 150,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginTop: 0,
  },
  text: {
    fontSize: 30,
    paddingLeft: 10,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
  },
  dropDownStyle: {
    backgroundColor: '#97A6DE',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SelectList;
