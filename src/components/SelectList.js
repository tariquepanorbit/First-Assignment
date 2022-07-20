import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AddNewList from './AddNewList';
function SelectList({
  data = [],
  value = {},
  showTask = {},
  onPress = () => {},
  onSelect = () => {},
  click = {},
  allLists = () => {},
}) {
  const [visible, setVisible] = useState('false');
  const [showList, setShowList] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  function addList() {
    setVisible('true');
  }
  onPress = () => {
    setClickCount(clickCount + 1);
    setShowList(!showList);
    click(clickCount);
  };
  const onSelectedItem = val => {
    setShowList(false);
    onSelect(val);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropDownStyle} onPress={onPress}>
        <Text style={styles.text}>{!!value ? value.name : `Your List`}</Text>
      </TouchableOpacity>
      <View>
        {showList &&
          data.map((val, i) => {
            return (
              <TouchableOpacity
                key={String(i)}
                onPress={() => onSelectedItem(val)}>
                <Text style={styles.text}>{val.name}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: 200,
    height: '100%',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginTop: 0,
    overflow: 'scroll',
  },
  text: {
    fontSize: 30,
    paddingLeft: 10,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
  },
  dropDownStyle: {
    backgroundColor: '#4881a1',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SelectList;
