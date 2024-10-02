import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setGoals={setGoals} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item, index }) => (
            <GoalItem item={item} index={index} setGoals={setGoals} />
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
