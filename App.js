import { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
} from 'react-native';

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function addGoalHandler() {
    setGoals((current) => [...current, goalText]);
  }

  function removeGoal(index) {
    setGoals(goals.filter((_, i) => i !== index));
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Ponha teu item aqui'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title='Adicionar' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goals.map((goal, index) => (
            <View style={styles.goalItemContainer}>
              <Text key={index} style={styles.goalItemText}>
                {goal}
              </Text>
              <Text
                title='Remover'
                style={styles.goalItemButton}
                onPress={() => {
                  removeGoal(index);
                }}
              >
                X
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
    paddingBottom: 20,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'silver',
    width: '70%',
    padding: 10,
  },
  goalsContainer: {
    flex: 7,
  },
  goalItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: 'dodgerblue',
    borderRadius: 100,
  },
  goalItemText: {
    color: 'white',
  },
  goalItemButton: {
    backgroundColor: 'gray',
    color: 'white',
    paddingHorizontal: 4,
  },
});
