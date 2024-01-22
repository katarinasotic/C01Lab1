import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToDoList from './components/ToDoList';

const App = () => {
  const initialTasks = ['Task 1', 'Task 2', 'Task 3'];

  return (
    <View style={styles.container}>
      <ToDoList initialTasks={initialTasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;



