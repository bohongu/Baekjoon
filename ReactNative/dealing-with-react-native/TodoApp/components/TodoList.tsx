import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TodoItem from './TodoItem';

export interface TodoListsProps {
  todos: {id: number; text: string; done: boolean}[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList = ({todos, onToggle, onRemove}: TodoListsProps) => {
  return (
    <FlatList
      // eslint-disable-next-line react/no-unstable-nested-components
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;
