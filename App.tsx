import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

export function AddNewTodo(){
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
      <TouchableOpacity 
        style={styles.button
        }>
        <View style={styles.iconButton}>
          <Text style={styles.textButton}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

