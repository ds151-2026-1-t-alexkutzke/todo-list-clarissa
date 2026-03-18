import React, { useState } from 'react';
import { View,Text,TextInput, Button, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from './styles'

interface TodoItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = () => {
    if (newTodoText.trim().length > 0) {
      const newTodo: TodoItem = {
        id: Math.random().toString(),
        text: newTodoText,
        isCompleted: false,
      };
      setTodos((currentTodos) => [...currentTodos, newTodo]);
      setNewTodoText('');
    }
  };

  const toggleTodoCompleted = (id: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

 
  const deleteTodo = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  
  const renderTodoItem = ({ item }: { item: TodoItem }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity
        onPress={() => toggleTodoCompleted(item.id)}
        style={styles.checkbox}
      >
        <Text style={item.isCompleted ? styles.completedText : styles.todoText}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <Button title="Deletar" onPress={() => deleteTodo(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicionar nova task"
          value={newTodoText}
          onChangeText={setNewTodoText}
        />
        <Button title="Adicionar" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

export default App;
