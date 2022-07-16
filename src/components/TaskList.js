import React from 'react';
import {View, Text} from 'react-native';
function TaskList(props) {
  console.log('task is', props.task);
  return (
    <View>
      <Text>{props.task}</Text>
    </View>
  );
}
export default TaskList;
