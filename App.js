import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

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
      <GoalInput
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item, index }) => (
            <GoalItem item={item} index={index} removeGoal={removeGoal} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 7,
  },
});
