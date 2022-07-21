import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
function SelectList({
  data = [],
  value = {},
  showTask,
  onPress = () => {},
  onSelect = () => {},
  changeShowTask,
}) {
  const [showList, setShowList] = useState(false);
  console.log(data.length);
  onPress = () => {
    changeShowTask(showList);
    setShowList(!showList);
  };
  const onSelectedItem = val => {
    setShowList(false);
    onSelect(val);
  };
  useEffect(() => {
    if (data.length > 3) {
      setShowList(true);
    }
  }, [data]);
  useEffect(() => {
    setShowList(false);
  }, [value]);
  useEffect(() => {
    setShowList(!showTask);
  }, [showTask]);
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
                <Text style={styles.text}>
                  {val.name}
                  {data.size}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    width: 350,
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
    alignSelf: 'center',
  },
  dropDownStyle: {
    backgroundColor: '#CA4E79',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'center',

    // alignSelf: 'center',
  },
});
export default SelectList;
